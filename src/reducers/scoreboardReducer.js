import {ADD_TO_SCROREBOARD} from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case ADD_TO_SCROREBOARD:
            return [...state, action.heroes];
        default:
            return state
    }
};