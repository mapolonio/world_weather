const express = require('express');
const router = express.Router();
const config = require('config');
const apiKey = config.get('forecast').apikey;
const ForecastIO = require('forecast-io');
const forecast = new ForecastIO(apiKey);
const moment = require('moment-timezone');
const City = require('../../models/city');
const ErrorModel = require('../../models/error');
const APIError = require('../../lib/APIError');

function dontGiveUp(f) {
  try {
    return f();
  } catch (err) {
    if (err instanceof APIError) {
      ErrorModel.save(err.message);
      return dontGiveUp(f);
    }
    throw err;
  }
}

function forcedFailForecast (lat, lng) {
  return () => {
    if (Math.random(0, 1) < 0.1) {
      throw new APIError('How unfortunate! The API Request Failed');
    }
    return forecast
      .latitude(lat)
      .longitude(lng)
      .units('si')
      .exclude('minutely,hourly,daily')
      .get();
  };

}

router.get('/update/:city', function(req, res) {
  let lat;
  let lng;
  City.getCity(req.params.city)
    .then(city => {
      if (!city) {
        throw new Error('City not found');
      }
      lat = city.lat;
      lng = city.lng;
      res.setHeader('Content-Type', 'application/json');
      dontGiveUp(forcedFailForecast(lat, lng))
        .then(result => {
          let data = JSON.parse(result);
          res.send({
            temperature: data.currently.temperature,
            time: moment.unix(data.currently.time).tz(data.timezone).format('H:mm:ss')
          });
        });

    })
    .catch(err => {
      console.log(err);
      res.status(400);
      return res.send('Bad request');
    });
});

module.exports = router;
