const INITIAL_STATE = {
    isLoading: false,
    data: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'DISCOVER_LOADING':
            return {
                ...state,
                isLoading: true
            };
        case 'DISCOVER_LOADED':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        default:
            return state;
    }
};