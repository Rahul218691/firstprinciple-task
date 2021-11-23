import React from 'react';
import {Link} from 'react-router-dom'
import Logo from '../images/logo.svg';

const Footer = () =>{
	return(
		<footer id="footer" className="footer-area">
		<div className="footer-widget">
		<div className="container">
		<div className="row">
		<div className="col-lg-12">
		<div className="footer-logo-support d-md-flex align-items-end justify-content-between">
		<div className="footer-logo d-flex align-items-end">
		<Link className="mt-30" to="index.html"><img src={Logo} alt="Logo" /></Link>
		<ul className="social mt-30">
		<li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
		<li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
		<li><Link to="#"><i className="lni-instagram-original"></i></Link></li>
		<li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
		</ul>
		</div> 
		</div> 
		</div>
		</div> 
		<div className="row">
		<div className="col-lg-2 col-md-4 col-sm-6">
		<div className="footer-link">
		<h6 className="footer-title">Company</h6>
		<ul>
		<li><Link to="#">About</Link></li>
		<li><Link to="#">Contact</Link></li>
		<li><Link to="#">Career</Link></li>
		</ul>
		</div> 
		</div>
		<div className="col-lg-3 col-md-4 col-sm-6">
		<div className="footer-link">
		<h6 className="footer-title">Product & Services</h6>
		<ul>
		<li><Link to="#">Products</Link></li>
		<li><Link to="#">Business</Link></li>
		<li><Link to="#">Developer</Link></li>
		</ul>
		</div> 
		</div>
		<div className="col-lg-3 col-md-4 col-sm-5">
		<div className="footer-link">
		<h6 className="footer-title">Help & Suuport</h6>
		<ul>
		<li><Link to="#">Support Center</Link></li>
		<li><Link to="#">FAQ</Link></li>
		<li><Link to="#">Terms & Conditions</Link></li>
		</ul>
		</div> 
		</div>
		<div className="col-lg-4 col-md-6 col-sm-7">
		<div className="footer-newsletter">
		<h6 className="footer-title">Subscribe Newsletter</h6>
		<div className="newsletter">
		<form action="#">
		<input type="text" placeholder="Your Email" />
		<button type="submit"><i className="lni-angle-double-right"></i></button>
		</form>
		</div>
		<p className="text">Subscribe weekly newsletter to stay upto date. We don’t send spam.</p>
		</div> 
		</div>
		</div> 
		</div> 
		</div> 
		<div className="footer-copyright">
		<div className="container">
		<div className="row">
		<div className="col-lg-12">
		<div className="copyright text-center">
		<p className="text">Template Crafted by <Link rel="nofollow" to="/">UIdeck</Link> - UI Powered by <Link el="nofollow" to="/">AyroUI</Link></p>
		</div>
		</div>
		</div> 
		</div> 
		</div> 
		</footer>
		)
}

export default Footer