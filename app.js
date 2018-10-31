const express = require('express');
const path = require('path');

//Init app
const app = express();

//set up templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

//Home route
app.get('/', function(req, res, next){
    res.render('index');
    next();
});

app.get('/submit', function(req, res, next){
    res.render('submit');
});
/*
app.get('/otherRoute', function(req, res){
    res.render('projects');
});
app.get('/OurDataSet', function(){
    res.render('goals');
});
*/
//Start server
app.listen(3000, function(){
    console.log('Server started on port 3000...');
});