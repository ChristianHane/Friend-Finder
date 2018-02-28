const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const htmlRoute = require('./app/routing/htmlRoutes.js');
const apiRoute = require('./app/routing/apiRoutes.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('json spaces', 2);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './app/public')));

app.use('/api/friends', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
})

