const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { dbUrl } = require('./config/db')
const postRoute = require('./routes/post')

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

app.use('/post', postRoute)
app.use('/', (req,res)=>{
	res.send('hello from home')
})


app.listen(5000,() =>{
	console.log('server listening')
}) 