const INITIAL_STATE = {
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DISCOVER_LOAD_DATA':
            return {
                ...state,
                data: action.payload
            };
        default:
            console.log(`DiscoverScreen: ${action.type}`)
            return state;
    }
};