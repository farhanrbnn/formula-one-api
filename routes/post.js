const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res)=>{
	res.send('hello from post');
});

router.post('/', (req, res)=>{
	const post = new Post({
		Constructor: req.body.Constructor,
		teamPrincipal: req.body.teamPrincipal,
		base: req.body.base,
		powerUnit: req.body.powerUnit,
		chassis: req.body.chassis
	})

	post.save()
	.then((data)=>{
		res.json(data)
	})
	.catch((err)=>{
		res.json({message:err})
	})
})

module.exports = router; 