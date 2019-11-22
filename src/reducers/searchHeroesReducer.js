import {FETCH_SEARCH_HEROES} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_SEARCH_HEROES:
            return [...action.payload];
        default:
            return state
    }
};