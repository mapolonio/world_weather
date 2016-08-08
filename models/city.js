var db = require('../lib/db');

module.exports = {
  getCity(cityCode) {
    return db.hgetallAsync(`cities:${cityCode}`);
  }
};
