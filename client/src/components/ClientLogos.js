import React from 'react';
import ClientLogo1 from '../images/client_logo_01.png'
import ClientLogo2 from '../images/client_logo_02.png'
import ClientLogo3 from '../images/client_logo_03.png'
import ClientLogo4 from '../images/client_logo_04.png'

const ClientLogos = () =>{
	return(
		<section className="client-logo-area">
		<div className="container">
		<div className="row">
		<div className="col-md-3 col-6">
		<div className="single-client mt-30 text-center">
		<img src={ClientLogo1} alt="Logo" />
		</div> 
		</div>
		<div className="col-md-3 col-6">
		<div className="single-client mt-30 text-center">
		<img src={ClientLogo2} alt="Logo" />
		</div> 
		</div>
		<div className="col-md-3 col-6">
		<div className="single-client mt-30 text-center">
		<img src={ClientLogo3} alt="Logo" />
		</div> 
		</div>
		<div className="col-md-3 col-6">
		<div className="single-client mt-30 text-center">
		<img src={ClientLogo4} alt="Logo" />
		</div> 
		 </div>
		</div> 
		</div> 
		</section>
		)
}

export default ClientLogos;