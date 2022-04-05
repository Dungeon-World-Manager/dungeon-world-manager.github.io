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
    loadSessionsList,
  };
}

export default sessionsState;
