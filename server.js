const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

const { dbUrl } = require('./config/db');
const postRoute = require('./routes/post');
const getRoute = require('./routes/get');

// MIDDLEWARE
app.use(bodyParser.json())

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
})

// ROUTE
app.use('/post', postRoute)
app.use('/api', getRoute)
app.get('/', (req,res)=>{
	res.send('hello from home')
})

app.listen(5000,() =>{
	console.log('server listening') 
}) 