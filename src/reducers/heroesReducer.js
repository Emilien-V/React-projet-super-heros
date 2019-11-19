export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_HEROES':
            return action.payload;
        default:
            return state
    }
};