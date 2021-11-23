const mongoose = require('mongoose');


const testimonial = new mongoose.Schema({
    description:{
        type:String,
        trim:true
    },
    post:{
        type:String,
        trim:true
    },
    photo:{
        type:String,
        required:true
    },
    name:{
        type:String,
        trim:true,
        required:true
    },
    active:{
        type:Number,
        default:0
    }
},{
    timestamps:true
});


const Testimonial = mongoose.model('testimonial',testimonial);

module.exports = Testimonial;