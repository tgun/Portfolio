import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

export default () => {
	return (
		<Navbar 
			expand="lg" 
			sticky="top" 
			className="custom-navbar"
			style={{
				background: 'rgba(255, 255, 255, 0.1)',
				backdropFilter: 'blur(10px)',
				border: '1px solid rgba(255, 255, 255, 0.2)',
				boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
			}}
			variant="dark"
		>
			<Navbar.Brand href="#top" style={{ fontWeight: 'bold', fontSize: '1.3rem', padding: '0.5rem 1rem' }}>
				Tommy Roberts
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ms-auto">
					<Nav.Link href="#top" className="nav-link-custom">Home</Nav.Link>
					<Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
					<Nav.Link href="#about" className="nav-link-custom">About</Nav.Link>
					<Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);	
};