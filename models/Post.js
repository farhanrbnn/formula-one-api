const mongoose = require('mongoose');

const driverSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	nationality: {
		type: String,
		required: true
	}
})

const postSchema = mongoose.Schema({
	Constructor:{
		type:String,
		required: true
	},
	teamPrincipal:{
		type:String,
		required: true
	},
	base:{
		type:String,
		required: true		
	},
	powerUnit:{
		type:String,
		required: true
	},
	chassis:{
		type:String,
		required: true
	},
	driver:[driverSchema]
})

module.exports = mongoose.model('Post', postSchema);