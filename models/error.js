var db = require('../lib/db');
const moment = require('moment-timezone');

/*
  Model:

  api.errors {
    ...,
    [timestamp]: errorMessage
  }
*/

module.exports = {
  save(errorMessage) {
    let timestamp = `[${moment().format('DD-MM-YYYY H:mm:ss')}]`;
    console.log(`${timestamp}: ${errorMessage}`);
    return db.hsetAsync('api.errors', timestamp, errorMessage);
  }
};
