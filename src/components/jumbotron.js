import React from 'react';
import {Container} from 'react-bootstrap';
import '../style/jumbo.scss';

const Jumbo = (props) => {
	return (
		<div className="jumbotron">
			<Container>
				<h1>{props.title}</h1>
				<p className="lead">{props.content}</p>
				{props.extras}
			</Container>
		</div>
	);
};

export default Jumbo;