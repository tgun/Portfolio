import React from 'react';
import {Button, Container} from 'react-bootstrap';

import Jumbo from '../components/jumbotron.js';

import SkillSection from './skills.js';
import AboutSection from './about.js';
import ProjectSection from './projects.js';

function getSocialMediaButtons() {
	return (
		<React.Fragment>
			<p>
				<Button variant="primary" className="my-2" href="https://github.com/tgun/">Github</Button>
				<Button variant="secondary" className="my-2" href="https://www.linkedin.com/in/lawrence-roberts-67255269/">LinkedIn</Button>
			</p>
		</React.Fragment>
	);
}

export default () => {
	return (
		<div>
			<Jumbo 
				title="Tommy Roberts - Information Security Engineer II"
				content="Cybersecurity professional with extensive experience in both software development and information security. I specialize in building secure systems and protecting critical infrastructure. Explore my work below!"
				extras={getSocialMediaButtons()}
				id="top"
			/>
			<Container>
				<SkillSection />
				<AboutSection />
				<ProjectSection />
			</Container>

		</div>
	);
};