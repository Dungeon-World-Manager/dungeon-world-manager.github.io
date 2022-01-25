export default function (state, setter) {
    const initialAuth = {
        user: {
            id: '',
            userName: '',
            email: '',
        },
        lastLogin: '',
        lastUser: {
            id: '',
            userName: '',
            email: '',
        },
    };
    const oldAuth = state.auth || {};
    const auth = { ...initialAuth, ...oldAuth };

    function updateState() {
        setter({ ...state, auth: auth });
    }

    function signInUser(userInfo) {
        auth.user = userInfo;
        auth.lastLogin = Date.now();
        updateState();
    }

    function logoutUser() {
        auth.lastUser = { ...auth.user };
        auth.user = { ...initialAuth.user };
        setter(auth);
    }

    return {
        ...auth,
        signInUser,
        logoutUser,
    };
}
