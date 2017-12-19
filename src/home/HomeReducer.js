const INITIAL_STATE = {
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'HOME_LOAD_DATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            console.log(`HomeScreen: ${action.type}`)
            return state;
    }
};