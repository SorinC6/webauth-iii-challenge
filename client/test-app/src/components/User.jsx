import React from 'react';

const User = ({ username, departament }) => {
	return (
		<div>
			<h4>{username}</h4>
			<p>departament: {departament}</p>
		</div>
	);
};

export default User;
