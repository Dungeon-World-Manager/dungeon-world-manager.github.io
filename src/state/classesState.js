export default function (state, setter) {
    const initialClasses = {
        publicClasses: [],
    };
    const oldClasses = state.classes || {};
    const classes = { ...initialClasses, ...oldClasses };

    function updateState() {
        setter({ ...state, classes: classes });
    }

    function loadPublicClasses(publicClasses) {
        classes.publicClasses = publicClasses;
        updateState();
    }

    return {
        ...classes,
        loadPublicClasses,
    };
}
