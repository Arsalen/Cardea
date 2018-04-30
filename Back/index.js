
var cors = require('cors')

var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

var patientRoutes = require('./routes/patientRoutes'); //importing route

var recordRoutes = require('./routes/recordRoutes'); //importing route

var doctorRoutes = require('./routes/doctorRoutes'); //importing route

var clinicRoutes = require('./routes/clinicRoutes'); //importing route

patientRoutes(app); //register the route

recordRoutes(app);

doctorRoutes(app);

clinicRoutes(app);

app.listen(port,function () {
    console.log('API server started on: ' + port);
  });
  