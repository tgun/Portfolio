import React from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';

import InfoBox from '../components/infobox.js';
import ArrayList from '../components/arrayList.js';
import Sockets from '../common/sockets.png';
import Fisher from '../common/fisher.png';
import ZBase from '../common/zbase.png';

let projects = [
	{
		"title": "CBS Fisher",
		"text": "Fisher is an all in one managment and membership software for the Community Bible Study ministry. I worked to streamline the software, removing bugs, increasing overall application speed, and introducing new and improved features for the members of CBS.",
		"href": "https://fisher.communitybiblestudy.org/",
		"linkText": "See the Site!",
		"img": Fisher
	}, 
	{
		"title": "ZBase",
		"text": "A Minecraft Classic custom server software, in .NET Core. This project highlights a large array of skills, from REST API Consumption, custom network protocol work, to multi-threaded systems working together.",
		"href": "https://github.com/umby24/ZBase/tree/dotnetcore",
		"linkText": "See the Code!",
		"img": ZBase
	},
	{
		"title": "Managed Sockets",
		"text": "Managed Sockets is a A simple, Asynchronous, event-driven TCP socket library for c#. The purpose of this project was to create a intermidatery socket layer for ZBase that could be used at scale.",
		"href": "https://github.com/umby24/ManagedSockets/tree/dotnetcore",
		"linkText": "See the Code!",
		"img": Sockets
	},
	{
		"title": "Home Inspection Specialists",
		"text": "I created the website for the (now out of business) home inspection company, Home Inspection Specialists. The source code is still available.",
		"href": "https://github.com/tgun/HIS",
		"linkText": "See the Code!",
		"img": ""
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
		<div id="projects" className="rounded container-fluid p-4">
			<Row className="text-center mb-2">
				<Col>
					<h1 className="mb-4">Projects</h1>
					<p>Most of my work was done for private companies under NDA, however, there are a few public and personal projects I can highlight here.</p>
				</Col>
			</Row>

			<Row>
				{renderCards()}
			</Row>

			<div className="row mb-2">

			</div>
		</div>
	);	
};