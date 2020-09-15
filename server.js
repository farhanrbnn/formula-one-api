const express = require('express');
const app = express();

app.get('/', function(req, res){
	res.send('this is practice for RESTful API');
});

app.listen(3000, ()=>{
	console.log('server listening')
});