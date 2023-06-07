/* eslint-disable no-console */
const chalk = require('chalk');
const { client } = require('./util/redis');
const normalMasterData = require('./data/masterData');
const japanMasterData = require('./data/masterData_japan');

const divider = chalk.cyan(
  '----------------------------------------------------------------------------------',
);

function storeMasterDataInRedis() {
  console.log(divider);
  // Store normal master data in redis
  client
    .set(
      `${process.env.BUILD_ENV}_normalMasterData`,
      JSON.stringify(normalMasterData),
    )
    .then(() => {
      console.log(
        'Stored normal master data in redis succesfully',
        chalk.green('✓'),
      );
    })
    .catch((err) => {
      console.log(
        'error while storing normal master data into redis',
        chalk.red('❌'),
        err,
      );
      process.exit(1);
    });
  // Store japan master data in redis
  client
    .set(
      `${process.env.BUILD_ENV}_japanMasterData`,
      JSON.stringify(japanMasterData),
    )
    .then(() => {
      console.log(
        'Stored japan master data in redis succesfully',
        chalk.green('✓'),
      );
      process.exit();
    })
    .catch((err) => {
      console.log(
        'error while storing japan master data into redis',
        chalk.red('❌'),
        err,
      );
      process.exit(1);
    });
  console.log(
    chalk.yellow('Task:'),
    chalk.blue('Storing Master Data in Redis'),
  );
  console.log(divider);
}

storeMasterDataInRedis();
