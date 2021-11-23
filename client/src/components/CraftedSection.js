import React from 'react';
import ServiceImage from '../images/services.png';

const CraftedSection = () =>{
	return(
			<section id="service" className="services-area">
			<div className="container">
			<div className="row">
			<div className="col-lg-6">
			<div className="section-title pb-10">
			<h4 className="title">Crafted For</h4>
			<p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
			</div> 
			</div>
			</div> 
			<div className="row">
			<div className="col-lg-8">
			<div className="row">
			<div className="col-md-6">
			<div className="services-content mt-40 d-sm-flex">
			<div className="services-icon">
			<i className="lni-bolt"></i>
			</div>
			<div className="services-content media-body">
			<h4 className="services-title">Startup</h4>
			<p className="text">Short description for the ones<br/> who look for something new.</p>
			</div>
			</div> 
			</div>
			<div className="col-md-6">
			<div className="services-content mt-40 d-sm-flex">
			<div className="services-icon">
			<i className="lni-bar-chart"></i>
			</div>
			<div className="services-content media-body">
			<h4 className="services-title">SaaS Business</h4>
			<p className="text">Short description for the ones<br/> who look for something new.</p>
			</div>
			</div> 
			</div>
			<div className="col-md-6">
			<div className="services-content mt-40 d-sm-flex">
			<div className="services-icon">
			<i className="lni-brush"></i>
			</div>
			<div className="services-content media-body">
			<h4 className="services-title">Agency</h4>
			<p className="text">Short description for the ones<br/> who look for something new.</p>
			</div>
			</div> 
			</div>
			<div className="col-md-6">
			<div className="services-content mt-40 d-sm-flex">
			<div className="services-icon">
			<i className="lni-bulb"></i>
			</div>
			<div className="services-content media-body">
			<h4 className="services-title">App Landing</h4>
			<p className="text">Short description for the ones<br/> who look for something new.</p>
			</div>
			</div> 
			</div>
			</div> 
			</div> 
			</div> 
			</div> 
			<div className="services-image d-lg-flex align-items-center">
			<div className="image">
			<img src={ServiceImage} alt="Services" />
			</div>
			</div> 
			</section>
		)
}

export default CraftedSection;