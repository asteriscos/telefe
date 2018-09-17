var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  search = require('./api/models/searchModel'),
  bodyParser = require('body-parser');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://telefe:telefe01@ds149672.mlab.com:49672/telefe', {
  useNewUrlParser: true
});
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var routes = require('./api/routes/searchRoutes');
routes(app);


app.listen(port);