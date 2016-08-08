var db = require('../lib/db');

module.exports = {
  getCity(cityCode) {
    return db.hgetallAsync(`cities:${cityCode}`);
  },

  getAll() {
    return db.keysAsync('cities:*')
      .map(key => {
        return db.hgetallAsync(key)
          .then(city => {
            city.key = key.split(':')[1];
            return city;
          });
      });
  }
};
