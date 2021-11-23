import React from 'react';
import {Header,Crafted,Pricing,CallToAction,Testimonials,
ClientLogos,ContactForm,Footer} from '../components'
import {Link} from 'react-router-dom'

const Home = () =>{
	return(
			<>
				<Header />
				<Crafted />
				<Pricing />
				<CallToAction />
				<Testimonials />
				<ClientLogos />
				<ContactForm />
				<Footer />
				<Link className="back-to-top" to="#"><i className="lni-chevron-up"></i></Link>				
			</>
		)
}

export default Home;