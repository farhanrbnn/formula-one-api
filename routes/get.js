const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res)=>{
	try{
		const getData = await Post.find({}, {_id:0});
		res.json({
			message:'success',
			data: getData
		});

	} catch (err) {
		res.json({message:err});
	}
});

router.get('/:id', async(req, res)=>{
	try{
		const getData = await Post.findById(req.params.id);
		res.json(getData)

	} catch (err) {
		res.json({message:err})
	} 
})

module.exports = router;