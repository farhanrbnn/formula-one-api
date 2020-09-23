const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.post('/', async (req, res)=>{
	const post = new Post({
		Constructor: req.body.Constructor,
		teamPrincipal: req.body.teamPrincipal,
		base: req.body.base,
		powerUnit: req.body.powerUnit,
		chassis: req.body.chassis,
		driver:req.body.driver
	});

	try {
		const savedPost = await post.save();
		res.json(savedPost);

	} catch (err) {
		res.json({message:err});
	}

});

module.exports = router; 