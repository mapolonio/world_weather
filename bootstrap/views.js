const path = require('path');
const exphbs  = require('express-handlebars');

module.exports = function views (app) {
  app.set('views', path.join(__dirname, 'views'));
  app.engine('hbs', exphbs({defaultLayout: 'main.hbs'}));
  app.set('view engine', 'hbs');
};
