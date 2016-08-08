const bluebird = require('bluebird');
const client = require('../lib/db');
const cities = require('../config/cities');

/*
  Model:

  cities:countryCode {
    name: string,
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
      return  client.hmsetAsync(`cities:${city.code}`, 'name', city.name, 'lat', city.lat, 'lng', city.lng);
    });
  },

  client
};
