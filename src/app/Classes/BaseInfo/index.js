import React from 'react';
import {} from 'semantic-ui-react';
import { addClass } from '../../../functions/db';
// Importing a state
import State from '../../../state';
import ClassForm from '../components/ClassForm';

const BaseInfo = () => {
	const state = React.useContext(State);
	const auth = state.auth;

	function classSubmit(createClass) {
		//This is going to tie the user with the class that is created.
		createClass.userId = auth.user.id;
		createClass.userName = auth.user.userName;
		addClass(createClass);
	}

	return (
		<React.Fragment>
			<ClassForm classSubmit={classSubmit} />
		</React.Fragment>
	);
};

export default BaseInfo;
