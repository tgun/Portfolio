import React from 'react';
import '../style/infobox.scss';

export default (props) => {
	return (
		<div className="infobox row no-gutters rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
			<div className="col p-4 d-flex flex-column position-static">
				<strong className="d-inline-block mb-2 tagline">{props.tagline}</strong>
				<h3 className="mb-0">{props.title}</h3>
				<p className="mb-auto">{props.content}</p>
			</div>
		</div>
	);	
};