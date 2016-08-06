const bluebird = require('bluebird');
const config = require('config');
const redis = require('redis');
bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);
const client = redis.createClient(config.get('dbconnection'));

client.on('error', err => {
  console.log('Error ' + err);
});

module.exports.initialize = function () {
  return client.setAsync('string key', 'string val')
    .then(() => client.hsetAsync('hash key', 'hashtest 1', 'some value'))
    .then(() => client.hsetAsync(['hash key', 'hashtest 2', 'some other value']))
    .then(() => client.hkeysAsync('hash key')
    .then(replies => {
      console.log(replies.length + ' replies:');
      replies.forEach((reply, i) => {
        console.log('    ' + i + ': ' + reply);
      });
      client.quit();
    }));
};
