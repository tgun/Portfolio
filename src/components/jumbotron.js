import React from 'react';
import '../style/jumbo.scss';

export default (props) => {
	return (
		<section className="jumbotron">
			<div className="container">
				<h1>{props.title}</h1>
				<p className="lead">{props.content}</p>
				{props.extras}
			</div>
		</section>
	);
};