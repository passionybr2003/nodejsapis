/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint consistent-return:0 */
const dotenv = require('dotenv');

dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./util//logger');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const session = require('express-session');
const { redisStore } = require('./util/redis');
const argv = require('./util/argv');
const port = require('./util//port');
const setup = require('./middlewares/frontendMiddleware');
const path = require('path');
const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
const Router = require('./routes/index');
const config = require('./config');
const rfs = require('rotating-file-stream');
const morganBody = require('morgan-body');
const shortid = require('shortid');
const fs = require('fs');
const { cryptoJSDecryptAES, getCookieValue } = require('./util/helper');

const logPath = !__dirname.startsWith('/opt')
  ? '.logs'
  : `/opt/evapp/logs/react-${process.env.ENVIRONMENT_NAME}`;
const Logger = require('tracer').dailyfile({
  root: logPath,
  maxLogFiles: 10,
  allLogsFileName: 'React',
});
const { nanoid } = require('nanoid');
const csrf = require('csurf');
const crypto = require('crypto');
const axios = require('axios');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');

const app = express();
app.disable('x-powered-by');

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.options('*', cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('test'));

// Encryption/Decryption of API request & response

const privateDec = (data) => {
  if (process.env.ENCRYPTION === 'yes') {
    const decrypted = jwt_decode(data);
    return decrypted;
  } else return data;
};

const payload = {};


// To fetch user's IP-Address
const requestIp = require('request-ip');

app.use(requestIp.mw());

//Stop cacheing
app.set('etag', false);
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
});
app.disable('view cache');


//Global variables
let sessionId = "-";
let clientIP = "-";


const doLog = (logMessage, logData = "", logSessionId = "", userIPAddress = "") => {
  Logger.info(`Track: NBA-${process.env.ENVIRONMENT_NAME}, UserIP: ${userIPAddress}, session-id: ${logSessionId ? decodeURIComponent(logSessionId) : "NA"}, ${logMessage}`, logData);
}


app.get('/*', (req, res, next) => {
  res.setHeader('Surrogate-Control', 'no-store');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});


function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}
let csrfProtection;
if (config.ENABLE_CSRF === 'true') {
  csrfProtection = csrf();
}

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log'),
  maxFiles: 15,
  history: 'history.log.txt',
});

morganBody(app, {
  stream: accessLogStream,
  noColors: true,
  filterParameters: ['apiPassword', 'cardNumber', 'cvv'],
  skip: (req, res) => !req.originalUrl.includes('/api/v1'),
  logIP: true,
});

// Database connection
const db = require('./models/index');

const Payment = db.payments;
const User = db.users;
const { Op } = db.Sequelize;
db.sequelize.sync();

app.use(
  compression({
    level: 2, // set compression level from 1 to 9 (6 by default)
    filter: shouldCompress, // set predicate to determine whether to compress
  }),
);



app.use(
  session({
    name: config.SESS_NAME,
    secret: config.SESS_SECRET,
    store: redisStore,
    saveUninitialized: false,
    genid: (req) => nanoid(128), // use UUIDs for session IDs
    resave: false,
    rolling: true,
    cookie: {
      sameSite: true,
      secure: false,
      maxAge: parseInt(config.SESS_LIFETIME, 10),
    },
  }),
);
if (config.ENABLE_CSRF === 'true') {
  app.use(csrfProtection);
}

app.use((req, res, next) => {
  if (config.ENABLE_CSRF === 'true') {
    res.cookie('csurf', req.csrfToken(), {
      httpOnly: false,
      sameSite: 'Strict',
    });
  }
  res.cookie('clientId', shortid.generate(), {
    httpOnly: true,
    sameSite: 'Strict',
  });
  res.cookie('setClient', true, {
    httpOnly: false,
    sameSite: 'Strict',
  });
  next();
});



app.use('/locales', express.static(path.join(__dirname, 'locales')));

setup(app, {
  outputPath: path.resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

app.get('/*', (req, res, next) => {
  // res.setHeader('Cache-Control', 'public, max-age=2592000');
  res.setHeader('Expires', new Date(Date.now() + 85000000).toUTCString());
  next();

});


// Start your app.
app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }
  logger.appStarted(port, prettyHost);
});



app.post('/api/userDetails/', (req, res) => {
   console.log("1------userDetails :: ",req.body.userId );
   
  User.findOne({
    where: {
       id: req.body.userId
    }
  }).then((data) => {
        res.send({
          message: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Something went wrong',
        });
      });
    
});

app.post('/api/updateDetails', (req, res) => {
  console.log("1------POST userDetails :: ",req.body );
  const updateData = req.body;
  User.update(updateData, {
    where: { id: req.body.userId }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "User details has been updated successfully."
      });
    } else {
      res.send({
        message: `User details not updated `
      });
    }
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Something went wrong"
    });
  });
});


app.post('/api/allUsers/', (req, res) => {
  console.log("1------allUsers :: ",req.body.userId );
  
 User.findAll().then((data) => {
       res.send({
         message: data,
       });
     })
     .catch((err) => {
       res.status(500).send({
         message:
           err.message || 'Something went wrong',
       });
     });
   
});

app.post('/api/deleteUser/', (req, res) => {
  console.log("1------deleteUsers :: ",req.body.userId );
  
 User.destroy({
  where: {
     id: req.body.userId 
  }
}).then((data) => {
    console.log("1--------del ", data);
    if(data === 1) {
       res.send({
         message: "User has been removed",
       });
      } else {
        res.send({
          message: "User not exist",
        });
      }
     })
     .catch((err) => {
       res.status(500).send({
         message:
           err.message || 'Something went wrong',
       });
     });
   
});






//Update Data into DB
app.post('/db/updatePayment', (req, res) => {
  
  if (process.env.ENCRYPTION === 'yes') {
    req.body = privateDec(req.body.data);
  }
  console.log("1------fetpym body", req.body );
  console.log("1------fetpym",privateDec(req.body.data) );
  delete req.body.iat;
  // Create a Payment object
  User.create(req.body)
      .then((data) => {
        res.send({
          message: 'Payment was updated successfully.',
        });
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || 'Some error occurred while updating the Payment.',
        });
      });
});



//Fetch data from DB
app.post('/db/fetchPayment', (req, res) => {
  console.log("1------fetpym",req.body.data);
  if (process.env.ENCRYPTION === 'yes') {
    req.body = privateDec(req.body.data);
  }
  console.log("1------fetpym dec",req.body);
  // Save PaymentInfo in the database
  User.findAll({ })
    .then(data => {
      Logger.info('fetchTransData Data for => ', req.body, ' is ',JSON.stringify(data));
      res.send(data);
    })
    .catch(err => {
      Logger.info(' Data not found for => ', req.body," is ",err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Payment."
      });
    });
});


