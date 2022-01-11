function testState(state, setState) {
    // initial state values
    const initialTest = {
        color: '',
        colorChanged: '',
    };
    // current state values
    const oldTest = state.test || {};
    // making sure all new pieces of state are added
    const test = { ...initialTest, ...oldTest };

    // this is what actually updates the state
    function updateState() {
        setState({ ...state, test });
    }

    function pickColor(newColor) {
        test.color = newColor;
        test.colorChanged = Date.now();
        updateState();
    }

    return {
        ...test,
        pickColor,
    };
}

export default testState;
