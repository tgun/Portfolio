import React from 'react';
import InfoBox from './infobox.js';
import ArrayList from './arrayList.js';

export default (props) => {
	return (
		<div className="row mb-2">
			<div className="col-md-6">
				<InfoBox 
					tagline={props.first.title}
					content={<ArrayList items={props.first.items} />}
				/>
			</div>
			<div className="col-md-6">
				<InfoBox 
					tagline={props.second.title}
					content={<ArrayList items={props.second.items} />}
				/>
			</div>
		</div>
	);
};