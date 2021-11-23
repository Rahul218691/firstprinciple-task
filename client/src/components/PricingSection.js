import React from 'react';
import {Link} from 'react-router-dom'
import Baloon from '../images/baloon.svg';
import Flower from '../images/flower.svg';

const PricingSection = () =>{
	return(
		<section id="pricing" className="pricing-area">
		<div className="container">
		<div className="row justify-content-center">
		<div className="col-lg-6">
		<div className="section-title text-center pb-10">
		<h4 className="title">Our Pricing</h4>
		<p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
		</div> 
		</div>
		</div> 
		<div className="row justify-content-center">
		<div className="col-lg-4 col-md-7 col-sm-9">
		<div className="single-pricing mt-40">
		<div className="pricing-header text-center">
		<h5 className="sub-title">Basic</h5>
		<span className="price">$ 199</span>
		<p className="year">per year</p>
		</div>
		<div className="pricing-list">
		<ul>
		<li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
		<li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
		<li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
		<li><i className="lni-check-mark-circle"></i> Awesome Support</li>
		</ul>
		</div>
		<div className="pricing-btn text-center">
		<Link className="main-btn" to="#">GET STARTED</Link>
		</div>
		<div className="buttom-shape">
		
		</div>
		</div> 
		 </div>
		<div className="col-lg-4 col-md-7 col-sm-9">
		<div className="single-pricing pro mt-40">
		<div className="pricing-baloon">
		<img src={Baloon} alt="baloon" />
		</div>
		<div className="pricing-header">
		<h5 className="sub-title">Pro</h5>
		<span className="price">$ 399</span>
		<p className="year">per year</p>
		</div>
		<div className="pricing-list">
		<ul>
		<li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
		<li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
		<li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
		<li><i className="lni-check-mark-circle"></i> Awesome Support</li>
		</ul>
		</div>
		<div className="pricing-btn text-center">
		<Link className="main-btn" to="#">GET STARTED</Link>
		</div>
		<div className="buttom-shape">
		
		</div>
		</div> 
		</div>
		<div className="col-lg-4 col-md-7 col-sm-9">
		<div className="single-pricing enterprise mt-40">
		<div className="pricing-flower">
		<img src={Flower} alt="flower" />
		</div>
		<div className="pricing-header text-right">
		<h5 className="sub-title">Enterprise</h5>
		<span className="price">$ 799</span>
		<p className="year">per year</p>
		</div>
		<div className="pricing-list">
		<ul>
		<li><i className="lni-check-mark-circle"></i> Carefully crafted components</li>
		<li><i className="lni-check-mark-circle"></i> Amazing page examples</li>
		<li><i className="lni-check-mark-circle"></i> Super friendly support team</li>
		<li><i className="lni-check-mark-circle"></i> Awesome Support</li>
		</ul>
		</div>
		<div className="pricing-btn text-center">
		<Link className="main-btn" to="#">GET STARTED</Link>
		</div>
		<div className="buttom-shape">
		
		</div>
		</div> 
		</div>
		</div> 
		</div> 
		</section>
		)
}

export default PricingSection;