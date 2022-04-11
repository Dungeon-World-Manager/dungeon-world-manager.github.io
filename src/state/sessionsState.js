function sessionsState(state, setter) {
  const initialSessions = {
    list: [],
    session: {},
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
  function loadSessionsList(list) {
    sessions.list = list;
    updateState();
  }

  //   function loadSession(session) {
  //     sessions.session = session;
  //     updateState();
  //   }

  return {
    ...sessions,
    clearSessions,
    addNewSession,
    loadSessionsList,
  };
}

export default sessionsState;
