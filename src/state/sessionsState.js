function sessionsState(state, setter) {
	const initialSessions = {
		list: [],
	};
	const oldSessions = state.sessions || {};
	const sessions = { ...initialSessions, ...oldSessions };

	function updateState() {
		setter({ ...state, sessions: sessions });
	}

	function clearSessions() {
		sessions.list = [];
		updateState();
	}

	return {
		...sessions,
		clearSessions,
	};
}

export default sessionsState;
