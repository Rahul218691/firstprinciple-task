const Testimonial = require('../models/testimonialSchema');
const path = require('path');
const fs = require('fs');

const getTestimonials = async(req,res) =>{
	try {
		const {type} = req.query;
		if(type === "manage"){
			const data = await Testimonial.find({});
			res.json({
				msg:'Success',
				posts:data
			})
		}else{
			const data = await Testimonial.find({active:1});
			res.json({
				msg:'Success',
				posts:data
			})			
		}
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}
}


const createTestimonial = async(req,res) =>{
	try {
		if(!req.file) return res.status(400).json({msg:'No Files selected'});
		const {description,post,name,active} = req.body;
		const fileURL = `${process.env.BASE_URL}/uploads/${req.file.filename}`;
		const newPost = await Testimonial.create({
			description,
			post,
			name,
			active,
			photo:fileURL
		});
		res.json({
			msg:'Testimonial Added Successfully!',
			post:newPost
		})
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}
}


const updateTestimonial = async(req,res) =>{
	try {
		const {id} = req.params;
		const {description,post,name,active} = req.body;
		const postFind = await Testimonial.findById(id);
		if(!postFind) return res.status(400).json({msg:'No Testimonial found!'});
		if(!req.file){
			await Testimonial.findOneAndUpdate({_id:id},{
				description:description ? description : postFind.description,
				name:name ? name : postFind.name,
				post:post ? post :postFind.post,
				active:active ? active: postFind.active
			})
			res.json({
				msg:'Testimonial updated!'
			})
		}else{
			const filename = postFind.photo.split('uploads/')[1];
			const pathinfo = path.join(__dirname,`../../public/uploads/${filename}`);
			const fileURL = `${process.env.BASE_URL}/uploads/${req.file.filename}`;
			if(fs.existsSync(pathinfo)){
				fs.unlink(pathinfo,(err)=>{
					if(err) console.log(err);
				})
			}	
			await Testimonial.findOneAndUpdate({_id:id},{
				description:description ? description : postFind.description,
				name:name ? name : postFind.name,
				post:post ? post :postFind.post,
				active:active ? active: postFind.active,
				photo:fileURL				
			})		
			res.json({
				msg:'Testimonial updated!'
			})
		}
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}	
}

const deleteTestimonial = async(req,res) =>{
	try {
		const {id} = req.params;
		const exists = await Testimonial.findById(id);
		if(!exists) return res.status(400).json({msg:'Testimonial not found!'});
		const filename = exists.photo.split('uploads/')[1];
		const pathinfo = path.join(__dirname,`../../public/uploads/${filename}`);
		if(fs.existsSync(pathinfo)){
			fs.unlink(pathinfo,(err)=>{
				if(err) console.log(err);
			})
		}
		await Testimonial.findByIdAndDelete(id);
		res.json({
			msg:'Testimonial Deleted'
		})
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}	
}


module.exports = {
	getTestimonials,
	createTestimonial,
	updateTestimonial,
	deleteTestimonial
}