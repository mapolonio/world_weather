const express = require('express');
const router = express.Router();
const config = require('config');
const apiKey = config.get('forecast').apikey;
const ForecastIO = require('forecast-io');
const forecast = new ForecastIO(apiKey);
const moment = require('moment-timezone');

/* TODO: reemplazar diccionario por consulta a redis */
const cities = {
  CL: {
    lat: -33.437754,
    lng: -70.650522
  },
  CH: {
    lat: 47.378626,
    lng: 8.540011
  },
  NZ: {
    lat: -36.899989,
    lng: 174.783307
  },
  AU: {
    lat: -33.869471,
    lng: 151.208354
  },
  UK: {
    lat: 51.507110,
    lng: -0.127206
  },
  USA: {
    lat: 33,
    lng: -83
  }
};

router.get('/update/:city', function(req, res) {
  let lat;
  let lng;
  let city = cities[req.params.city];
  try {
    lat = city.lat;
    lng = city.lng;
  } catch (error) {
    console.log(error);
    res.status(400);
    return res.send('Bad request');
  }
  res.setHeader('Content-Type', 'application/json');
  forecast
    .latitude(lat)
    .longitude(lng)
    .units('si')
    .exclude('minutely,hourly,daily')
    .get()
    .then(response => {
      let data = JSON.parse(response);
      res.send({
        temperature: data.currently.temperature,
        time: moment.unix(data.currently.time).tz(data.timezone).format('H:mm:ss')
      });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
