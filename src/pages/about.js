import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../style/about.scss';

export default () => {
	return (
		<Container id="about" fluid className="about-section rounded p-4">
			<Row className="text-center mb-2">
				<Col>
					<h1 className="mb-4">About</h1>
					<p>I am currently an Information Security Engineer II at USAA, and I live in San Antonio, TX</p>
					<p>My journey began in software development, where I built secure applications and learned the importance of security-first design. This foundation led me naturally into cybersecurity, where I now focus on protecting critical systems and data.</p>
					<p>I am passionate about bridging the gap between development and security teams, ensuring that security is built into systems from the ground up rather than bolted on as an afterthought.</p>
					<p>My unique background in both software engineering and cybersecurity allows me to understand threats from multiple perspectives and design comprehensive security solutions that don't compromise user experience or system performance.</p>
				</Col>
			</Row>
		</Container>
	);	
};