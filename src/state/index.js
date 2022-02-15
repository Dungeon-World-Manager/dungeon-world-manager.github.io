import React from 'react';
import testState from './testState';
import authState from './authState';
import classesState from './classesState';

const State = React.createContext();

export const Provider = ({ children }) => {
    const [state, setState] = React.useState({});

    const stateValues = {
        test: testState(state, setState),
        auth: authState(state, setState),
        classes: classesState(state, setState),
    };
    return <State.Provider value={stateValues}>{children}</State.Provider>;
};

export default State;
