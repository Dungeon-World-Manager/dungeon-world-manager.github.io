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
    console.log(state);
    const oldAuth = state.auth || {};
    // console.log('oldAuth', oldAuth);
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
        // console.log('auth', auth);
        updateState();
    }

    return {
        ...auth,
        signInUser,
        logoutUser,
    };
}
