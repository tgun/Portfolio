import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Nav>
					<Nav.Link href="#top">Home</Nav.Link>
					<Nav.Link href="#skills">Skills</Nav.Link>
					<Nav.Link href="#about">About</Nav.Link>
					<Nav.Link href="#projects">Projects</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);	
};