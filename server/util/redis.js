const redis = require("ioredis");
const logDir = !__dirname.startsWith("/opt") ? ".logs" : "/opt/evapp/logs/beacon";
const Logger = require('tracer').dailyfile({ root: logDir, maxLogFiles: 10, allLogsFileName: 'NBA' });
const dotenv = require('dotenv');
dotenv.config();

let client = false, redisparams = {
    scheme: 'tcp',
    port: process.env.REDIS_PORT, // replace with your port
    host: process.env.REDIS_HOST,
    persistent: 1
};
client = process.env.REDISENV === 'prod' ? new redis.Cluster([{ ...redisparams }]) : new redis({ ...redisparams });
client.on('connect', function () {
    Logger.info({ "Redis client connected --> ": process.env.REDIS_HOST });
    console.log("Redis client connected --> ",process.env.REDIS_HOST);
});
client.on('error', function (err) {
    Logger.error({ 'err': err });
    console.log("redis err ---", err);
});
module.exports = client;