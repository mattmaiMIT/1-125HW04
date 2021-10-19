var express = require('express');
var app     = express();

var mysql = require('mysql2');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'MyNewPass',
  database: 'contacts'
});

// used to serve static files from public directory
app.use(express.static('public'));

app.get('/', function(req, res){
res.send('Root Route');
});

app.listen(3000, function(){
   console.log('Running on port 3000!')
});

// test with curl 'http://localhost:3000/add?FirstName=Matt&LastName=Mai&PhoneNumber=6179490377&Email=matthew6@mit.edu&University=MIT&Major=IDM'

app.get('/add', function(req, res){
   console.log('FirstName: ', req.query.FirstName); 
   console.log('LastName: ', req.query.LastName); 
   console.log('PhoneNumber: ', req.query.PhoneNumber);
   console.log('Email: ', req.query.Email);
   console.log('PhoneNumber: ', req.query.University);
   console.log('PhoneNumber: ', req.query.Major);
   //res.send(`echoing: ${req.query.FirstName} ${req.query.LastName} ${req.query.PhoneNumber} ${req.query.Email} ${req.query.University} ${req.query.Major}`);

connection.query(
   'INSERT INTO `contacts` VALUES(?,?,?,?,?,?)',[req.query.FirstName,req.query.LastName,req.query.PhoneNumber,req.query.Email,req.query.University,req.query.Major],
   //'INSERT INTO `contacts` (`FirstName`,`LastName`,`PhoneNumber`,`Email`,`University`,`Major`) VALUES(?,?,?,?,?,?)',[req.query.FirstName,req.query.LastName,req.query.PhoneNumber,req.query.Email,req.query.University,req.query.Major],
   function(err, results, fields) {
      console.log(results);
      res.send(results);
    }
);

});

app.get('/read', function(req, res){
   connection.query(
     'SELECT * FROM `contacts`',
     function(err, results, fields) {
       console.log(results);
       res.send(results);
     }
   );

});


