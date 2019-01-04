const express = require('express');
const path = require('path');

//Init App
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', function(req, res){
  res.render('index', {
    title:'Article'
  });
});

//Start Server
app.listen(3000, function(){
  console.log('Server started on port 3000.');
});
