import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {getDataAPI} from '../utils/fetchData';
import {toast} from 'react-toastify'

const Testimonials = () =>{

	const [posts,setPosts] = useState([]);

	const navigate = useNavigate()

	const handleNavigate = () =>{
		navigate('managetestimonial')
	}

	useEffect(()=>{
		const getTestimonials = async() =>{
			try{
				const {data} = await getDataAPI('testimonials');
				if(data){
					setPosts(data.posts)
				}
			}catch(error){
				toast.error(error.response.data.msg)
			}
		}
		getTestimonials()
	},[])

	return(
		<section id="testimonial" className="testimonial-area">
		<div className="container">
		<div className="row justify-content-center">
		<div className="col-lg-6">
		<div className="section-title text-center pb-10">
		<h4 className="title">Testimonial</h4>
		<button onClick={handleNavigate} className="testimonial__button">MANAGE TESTIMONIAL</button>
		<p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
		</div> 
		</div>
		</div> 
		<div className="row">
		<div className="col-lg-12">
		<div className="row testimonial-active">
		{
			posts && posts.length > 0 ? 
			posts.map((p,i) =>(
				<div className="col-lg-4" key={i}>
				<div className="single-testimonial mt-30 mb-30 text-center">
				<div className="testimonial-image">
				<img src={p.photo} alt="Author" />
				</div>
				<div className="testimonial-content">
				<p className="text">{p.description}</p>
				<h6 className="author-name">{p.name}</h6>
				<span className="sub-title">{p.post}</span>
				</div>
				</div> 
				</div>				
			)) : null
		}
		</div> 
		</div>
		</div> 
		</div> 
		</section>
		)
}

export default Testimonials;