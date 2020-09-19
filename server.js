const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true})
		.then(()=>{
			app.get('/', function(req, res){
				res.send('this is practice for RESTful API');

			});

			app.listen(3000, ()=>{
				console.log('server listening')

			});			
		})



