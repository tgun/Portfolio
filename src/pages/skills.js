import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SkillList from '../components/dualSkillList.js';
import constants from '../common/constants.js';

export default () => {
	return (
		<Container id="skills">
			<Row className="text-center mb-2">
				<Col md={12}>
					<h1>Skills</h1>
					<p>My skillset includes software development, cybersecurity, penetration testing and system administration.</p>
					<p>Here are some of the technologies I've worked with.</p>
				</Col>
			</Row>
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

		</Container>
	);	
};