import React from 'react';
import InfoBox from '../components/infobox.js';
import ArrayList from '../components/arrayList.js';
import Sockets from '../common/sockets.png';
import Fisher from '../common/fisher.png';
import ZBase from '../common/zbase.png';

export default () => {
	return (
		<div id="projects" className="rounded container-fluid p-4">
			<div className="row text-center mb-2">
				<div className="col-md-12">
					<h1 className="mb-4">Projects</h1>
					<p>Most of my work was done for private companies under NDA, however, there are a few public and personal projects I can highlight here.</p>
				</div>
			</div>

			<div className="row mb-2">
				<div className="col-md-3">
					<div className="card">
						<img src={Fisher} className="card-img-top" />
						<div className="card-body">

							<h5 className="card-title">CBS Fisher</h5>
							<p className="card-text">Fisher is an all in one managment and membership software for the Community Bible Study ministry.
							I worked to streamline the software, removing bugs, increasing overall application speed, and introducing new and improved features for the members of CBS.
							</p>
							<a href="#" class="btn btn-primary">See the Site!</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
					<img src={ZBase} className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">ZBase</h5>
							<p className="card-text">A Minecraft Classic custom server software, in .NET Core.
							This project highlights a large array of skills, from REST API Consumption, custom network protocol work, to multi-threaded systems working together.</p>
							<a href="#" class="btn btn-primary">See the Code!</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<img src={Sockets} className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">Managed Sockets</h5>
							<p className="card-text">Managed Sockets is a A simple, Asynchronous, event-driven TCP socket library for c#. The purpose of this project was to create a intermidatery socket layer for ZBase that could be used at scale.
							</p>
							<a href="#" class="btn btn-primary">See the Code!</a>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card">
						<div className="card-body">
							<h5 className="card-title">Home Inspection Specialists</h5>
							<p className="card-text">I created the website for the (now out of business) home inspection company, Home Inspection Specialists. The source code is still available.</p>
							<a href="#" class="btn btn-primary">See the Code!</a>
						</div>
					</div>
				</div>
			</div>

			<div className="row mb-2">

			</div>
		</div>
	);	
};