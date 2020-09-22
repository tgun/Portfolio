import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import '../style/jumbo.scss';

export default (props) => {
	return (
		<Jumbotron>
			<Container>
				<h1>{props.title}</h1>
				<p className="lead">{props.content}</p>
				{props.extras}
			</Container>
		</Jumbotron>
	);
};