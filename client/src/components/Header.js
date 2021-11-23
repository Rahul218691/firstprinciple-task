import React,{useState} from 'react';
import Logo from '../images/logo.svg'
import HeadShape from '../images/header-shape.svg'
import {Link} from 'react-router-dom'

const Header = () =>{

	const [toggle,setToggle] = useState(false);

	return(
		<header className="header-area">
		<div className="navgition navgition-transparent">
		<div className="container">
		<div className="row">
		<div className="col-lg-12">
		<nav className="navbar navbar-expand-lg">
		<Link className="navbar-brand" to="#">
		<img src={Logo} alt="Logo" />
		</Link>
		<button onClick={()=>setToggle(!toggle)} className={toggle ? 'navbar-toggler active' : 'navbar-toggler'} type="button" data-toggle="collapse" data-target="#navbarOne" aria-controls="navbarOne" aria-expanded="false" aria-label="Toggle navigation">
		<span className="toggler-icon"></span>
		<span className="toggler-icon"></span>
		<span className="toggler-icon"></span>
		</button>
		<div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
		<ul className="navbar-nav m-auto">
		<li className="nav-item active">
		<Link className="page-scroll" to="#home">HOME</Link>
		</li>
		<li className="nav-item">
		<Link className="page-scroll" to="#service">SERVICES</Link>
		</li>
		<li className="nav-item">
		<Link className="page-scroll" to="#pricing">PRICING</Link>
		</li>
		<li className="nav-item">
		<Link className="page-scroll" to="#testimonial">Testimonial</Link>
		</li>
		<li className="nav-item">
		<Link className="page-scroll" to="#contact">CONTACT</Link>
		</li>
		</ul>
		</div>
		<div className="navbar-social d-none d-sm-flex align-items-center">
		<span>FOLLOW US</span>
		<ul>
		<li><Link to="#"><i className="lni-facebook-filled"></i></Link></li>
		<li><Link to="#"><i className="lni-twitter-original"></i></Link></li>
		<li><Link to="#"><i className="lni-instagram-original"></i></Link></li>
		<li><Link to="#"><i className="lni-linkedin-original"></i></Link></li>
		</ul>
		</div>
		</nav> 
		</div>
		</div> 
		</div> 
		 </div> 
		<div id="home" className="header-hero bg_cover">
		<div className="container">
		<div className="row justify-content-center">
		<div className="col-xl-8 col-lg-10">
		<div className="header-content text-center">
		<h3 className="header-title">Handcrafted Landing Page for Startups and SaaS Businesses</h3>
		<p className="text">A simple, customizable, and, beautiful SaaS business focused landing page to make your project closer to launch!</p>
		<ul className="header-btn rounded-buttons">
		<li><Link className="main-btn rounded-three" to="#">GET IN TOUCH</Link></li>
		<li><Link className="main-btn rounded-four video-popup" to="../../watch.html?v=r44RKWyfcFw">WATCH THE VIDEO <i className="lni-play"></i></Link></li>
		</ul>
		</div> 
		</div>
		</div> 
		</div> 
		<div className="header-shape">
		<img src={HeadShape} alt="shape" />
		</div>
		</div> 
		</header>
		)
}

export default Header;