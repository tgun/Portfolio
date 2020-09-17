import React from 'react';
import '../style/sidenav.scss';

export default () => {
	return (
		<div className="sidenav">
			<div className="tops">
			    <span className="logo">&lt;/&gt;</span>

			    <div className="en">
			        <a href="#" className="current"><i className="fa fa-home"></i></a>
			        <a href="#"><i className="fa fa-cogs"></i></a>
			        <a href="#projects"><i className="fa fa-user-circle"></i></a>
			        <a href="#"><i className="fa fa-question-circle"></i></a>
			    </div>
		    </div>
		    
		    <div className="sidenav-bottom">
		    	<a href="https://github.com/tgun/" target="_blank"><i className="fa fa-2x fa-github"></i></a>
		    	<br/>
		        <a href="https://www.linkedin.com/in/lawrence-roberts-67255269/" target="_blank"><i className="fa fa-2x fa-linkedin"></i></a>
		    </div>
		</div>
);
}