const service = require('../../services');
const { cryptoJSEncryptAES } = require('../../util/helper');
const { isEncryption, SESS_NAME } = require('../../config');
const config = require('../../config');
const appController = {};

function Authenticate(req, res) {
  service.appService.login(req.body).then(
    (response) => {
      req.session.user = response.AuthenticateCCBUserV2ResMsg.email;
      // Reverting code that used session.save method. Will look at it later
      req.session.tokens = JSON.stringify({
        refreshToken: response.AuthenticateCCBUserV2ResMsg.refreshToken,
        accessToken: response.AuthenticateCCBUserV2ResMsg.accessToken,
      });
      delete response.AuthenticateCCBUserV2ResMsg.accessToken;
      delete response.AuthenticateCCBUserV2ResMsg.refreshToken;
      res.json(response);
    },
    (error) => {
      if (error && error.status) {
        res.status(error.status);
      }
      res.json({ err: error });
    },
  );
}

function Logout(req, res) {
  try {
    // eslint-disable-next-line prefer-destructuring
    const user = req.session.user;
    if (user) {
      req.session.destroy((err) => {
        if (err) {
          res.clearCookie(SESS_NAME);
          if (config.ENABLE_CSRF === 'true') {
            res.clearCookie('csurf');
          }
          res.status(418).json({
            reason: 'Error while destroying session',
          });
        } else {
          res.clearCookie(SESS_NAME);
          if (config.ENABLE_CSRF === 'true') {
            res.clearCookie('csurf');
          }
          res.send({
            username: user,
          });
        }
      });
    } else {
      res.status(418).json({
        reason: 'Error: Session user not found',
      });
    }
  } catch (err) {
    res.clearCookie(SESS_NAME);
    if (config.ENABLE_CSRF) {
      res.clearCookie('csurf');
    }
    res.status(418).json({
      reason: 'Exception during destroying session',
    });
  }
}


appController.Authenticate = Authenticate;
appController.Logout = Logout;


module.exports = appController;
