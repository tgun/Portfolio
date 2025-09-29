import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SkillList from '../components/dualSkillList.js';
import constants from '../common/constants.js';
import '../style/skills.scss';

export default () => {
	return (
		<Container id="skills" className="skills-section text-center rounded p-4">
			<Row className="justify-content-center mb-2">
				<Col>
					<h1>Skills</h1>
					<p>As an Information Security Engineer with a strong software development background, I bring a unique perspective to cybersecurity.</p>
					<p>My dual expertise allows me to build secure systems and identify vulnerabilities others might miss.</p>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col>
					<SkillList 
						first={{title: 'Backend Development', items: constants.backendSkills}} 
						second={{title: 'Frontend Development', items: constants.frontendSkills}} 
					/>
					<SkillList 
						first={{title: 'Cybersecurity', items: constants.securitySkills}} 
						second={{title: 'Penetration Testing', items:constants.pentestingSkills}} 
					/>
					<SkillList 
						first={{title: 'Sysadmin', items: constants.adminSkills}} 
						second={{title: 'General', items: constants.generalSkills}} 
					/>
				</Col>
			</Row>
		</Container>
	);	
};