import React from 'react';
import testState from './testState';
import authState from './authState';
import classesState from './classesState';
import charactersState from './charactersState';
import sessionsState from './sessionsState';

const State = React.createContext();

export const Provider = ({ children }) => {
	const [state, setState] = React.useState({});

	const stateValues = {
		test: testState(state, setState),
		auth: authState(state, setState),
		classes: classesState(state, setState),
		characters: charactersState(state, setState),
		sessions: sessionsState(state, setState),
	};
	return <State.Provider value={stateValues}>{children}</State.Provider>;
};

export default State;
