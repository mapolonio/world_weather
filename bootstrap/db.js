const bluebird = require('bluebird');
const client = require('../lib/db');
const cities = require('../config/cities');

/*
  Model:

  cities:countryCode {
    lat: number,
    lng: number
  }
*/

client.on('error', err => {
  console.log('Error ' + err);
});

module.exports = {
  initialize () {
    return bluebird.map(cities, city => {
      return  client.hmsetAsync(`cities:${city.code}`, 'lat', city.lat, 'lng', city.lng);
    });
  },

  client
};
