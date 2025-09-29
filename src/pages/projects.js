import React from 'react';
import {Row, Col, Card, Button, Container} from 'react-bootstrap';
import Sockets from '../common/sockets.png';
import Fisher from '../common/fisher.png';
import ZBase from '../common/zbase.png';

let projects = [
	{
		"title": "USAA Security Infrastructure",
		"text": "Led security architecture initiatives and incident response processes for critical financial systems. Implemented advanced SIEM solutions and performed routine advanced traffic analysis.",
		"href": "#",
		"linkText": "Confidential",
		"img": ""
	},
	{
		"title": "ZBase - Secure Gaming Server",
		"text": "A Minecraft Classic custom server software in .NET Core with built-in security features. Implemented secure authentication, DDoS protection, and network protocol security. Demonstrates secure coding practices and network security implementation.",
		"href": "https://github.com/umby24/ZBase/tree/dotnetcore",
		"linkText": "See the Code!",
		"img": ZBase
	},
	{
		"title": "Managed Sockets - Networking Library",
		"text": "A simple, asynchronous, event-driven TCP socket library for C#. Designed as an intermediary socket layer for ZBase that could be used at scale, featuring clean architecture and efficient connection management.",
		"href": "https://github.com/umby24/ManagedSockets/tree/dotnetcore",
		"linkText": "See the Code!",
		"img": Sockets
	},
	{
		"title": "CBS Fisher - Secure Web Application",
		"text": "Developed and secured an all-in-one management platform for Community Bible Study ministry. Implemented secure authentication, data encryption, and vulnerability remediation that improved the application's security posture by 80%.",
		"href": "https://fisher.communitybiblestudy.org/",
		"linkText": "See the Site!",
		"img": Fisher
	}
];

function renderCards() {
	return projects.map((k, i) => {
		return (
			<Col key={i}>
				<Card>
					<Card.Img variant="top" src={k.img} />
					<Card.Body>
						<Card.Title>{k.title}</Card.Title>
						<Card.Text>
							{k.text}
						</Card.Text>
						<Button variant="primary" href={k.href}>{k.linkText}</Button>
					</Card.Body>
				</Card>
			</Col>
		);
	});
}

export default () => {
	return (
		<Container fluid rounded id="projects" className="rounded p-4">
			<Row className="text-center mb-2">
				<Col>
					<h1 className="mb-4">Projects</h1>
					<p>A selection of my work spanning both cybersecurity and software development. Many enterprise security projects remain confidential, but here are some highlights that demonstrate my diverse skill set.</p>
				</Col>
			</Row>

			<Row>
				{renderCards()}
			</Row>

			<Row className="mb-2">

			</Row>
		</Container>
	);
};