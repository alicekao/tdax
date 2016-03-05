//Node configuration goes here
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

//every request to our server will pass through app.use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
console.log(__dirname)
app.use(express.static(path.join(__dirname, '/client')));

//middleware deals with applicant and recruiter login routes
require('./server/middleware.js')(app, express);

//routes.js deals with all other GET request routes like /*
require('./server/routes.js')(app, express);

var port = process.env.PORT || 8000;

app.listen(port, function() {
  console.log('EvenHire running on port ' + port);
});
