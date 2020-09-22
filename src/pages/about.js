import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../style/about.scss';

export default () => {
	return (
		<Container id="about" fluid className="about-section rounded p-4">
			<Row className="text-center mb-2">
				<Col>
					<h1 className="mb-4">About</h1>
					<p>I am currently a Software Engineer 1 at USAA, and I live in San Antonio, TX</p>
					<p>I enjoy providing experiences that my users love, and fixing issues present in current applications.</p>
					<p>I am very results oriented, I want to provide value in a quick and organized manor.</p>
					<p>I have a preference towards backend work, however as you can see, I can handle my own in the front-end space as well!</p>
				</Col>
			</Row>
		</Container>
	);	
};