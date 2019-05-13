//In this file we need to require Express 
//and create a reference to a variable 
//from an instance of Express. 
//Static contents like HTML, CSS or 
//JavaScript can be served using express.js:

var express = require('express');
var app = express();

// and we can start listening to a port using the code:

var server = app.listen(8080, ()=>{
	console.log('server is running on port', server.address().port);
});

// In-order to tell Express that, we will be using a static file. 
// We will add a new line inside server.js:

app.use(express.static(__dirname));


