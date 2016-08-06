const settings = require('./settings');
const views = require('./views');
const router = require('./router');
const db = require('./db');

// Returns a promise
module.exports = (app) => {
  settings(app);
  views(app);
  router(app);
  db.initialize()
    .then(() => console.log('Database ready'));
};
