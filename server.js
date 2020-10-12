// IMPORT PACKAGE
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  cors = require('cors');
const app = express();

let corsOption = {
	origin:'http://localhost:8080'
};

// IMPORT SCRIPT
const { dbUrl } = require('./config/db');
const postRoute = require('./routes/post');
const getRoute = require('./routes/get');

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors(corsOption));

// DB CONNECTION
mongoose.connect(dbUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
.then(() => {
	console.log('dbconnected',)
})
.catch((err)=>{
	console.log(err)
});

// ROUTE
app.use('/api/post', postRoute)
app.use('/api', getRoute)

app.listen(5000,() =>{
	console.log('server listening') 
});