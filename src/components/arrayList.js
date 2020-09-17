import React from 'react';

function getListItems(items) {
	return items.map((k, i) => {
		return <li key={i}>{k}</li>
	});
}

export default (props) => {
	return (
		<ul>
			{getListItems(props.items)}
		</ul>
	);
};