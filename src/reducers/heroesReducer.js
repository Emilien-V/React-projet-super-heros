import {FETCH_HEROES} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case FETCH_HEROES:
            return [...state, ...action.payload];
        default:
            return state
    }
};