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

  //Add a new session to the session list
  function addNewSession(newSession) {
    sessions.list.push(newSession);
    updateState();
  }

  return {
    ...sessions,
    clearSessions,
    addNewSession,
  };
}

export default sessionsState;
