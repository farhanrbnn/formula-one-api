const mongoose = require('mongoose');

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
	}
})

module.exports = mongoose.model('Post', postSchema);