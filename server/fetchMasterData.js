/* eslint-disable no-console */
require('dotenv').config();
const request = require('request');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const options = {
  method: 'POST',
  url: `${process.env.CCB_API_URL_MASTER_DATA}/ccb/getMasterData`,
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    GetMasterDataRequest: {
      apiUser: process.env.API_USER,
      apiPassword: process.env.API_PASSWORD,
    },
  },
  json: true,
};

console.log(
  chalk.cyan(
    '----------------------------------------------------------------------------------',
  ),
);
console.log(
  chalk.yellow('Task:'),
  chalk.blue('Fetching Master Data for', process.env.BUILD_ENV, 'Environment'),
);
console.log(
  chalk.cyan(
    '----------------------------------------------------------------------------------',
  ),
);

request(options, (error, response, body) => {
  if (error) throw new Error(error);
  const { responseCode } = body.GetMasterDataResponse;
  if (responseCode === '1') {
    const { GetMasterDataResponse } = body;
    delete GetMasterDataResponse.responseCode;
    delete GetMasterDataResponse.status;
    const clientPath = 'app/config/masterData.js';
    const serverPath = path.join(
      __dirname,
      '../',
      'server',
      'data',
      'masterData.js',
    );
    const data = JSON.stringify(GetMasterDataResponse, null, '\t');
    const clientStringData = `export default ${data}`;
    const serverStringData = `module.exports = ${data}`;

    fs.writeFile(serverPath, serverStringData, (err) => {
      if (err) throw err;
      console.log(
        'Master Data File saved successfully in server',
        chalk.green('✓'),
      );
    });
    fs.writeFile(clientPath, clientStringData, (err) => {
      if (err) throw err;
      console.log(
        'Master Data File saved successfully in client',
        chalk.green('✓'),
      );
    });
  } else if (responseCode === '0') {
    const { errorMessage } = body.GetMasterDataResponse.failureMessage[0];
    console.log('Cannot fetch master data:', errorMessage);
    process.exit(1);
  } else {
    console.log('Something went wrong during master data fetch!');
    process.exit(1);
  }
});
