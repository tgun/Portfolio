import React from 'react';
import InfoBox from './infobox.js';
import ArrayList from './arrayList.js';
import { Row, Col, Container } from 'react-bootstrap';

export default (props) => {
	return (
		<Row mb={2}>
			<Col md={6}>
				<Container>
					<InfoBox 
						tagline={props.first.title}
						content={<ArrayList items={props.first.items} />}
					/>
				</Container>
			</Col>
			<Col md={6}>
				<Container>
					<InfoBox 
						tagline={props.second.title}
						content={<ArrayList items={props.second.items} />}
					/>
				</Container>
			</Col>
		</Row>
	);
};