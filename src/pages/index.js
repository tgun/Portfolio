import React from 'react';
import {Button} from 'react-bootstrap';

import Jumbo from '../components/jumbotron.js';
import InfoBox from '../components/infobox.js';

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
				title="Tommy Roberts developer profile"
				content="I am a multi-talented IT professional with a long experience in software development. Feel free to learn more on the site or at the links below!"
				extras={getSocialMediaButtons()}
				id="top"
			/>
			
			<SkillSection />
			<AboutSection />
			<ProjectSection />
		</div>
	);
};