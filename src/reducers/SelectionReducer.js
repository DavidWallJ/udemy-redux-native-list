// the state her is the state the last time the reducer react-native
// return just state changes nothing
export default (state = null, action) => {
    switch (action.type) {
        case 'selectLibrary':
            return action.payload;
        default:
            return state;
    }
};
