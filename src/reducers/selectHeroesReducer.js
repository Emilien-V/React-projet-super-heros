import {SELECT_HERO} from '../actions/types'

export default (state = {hero1: null, hero2: null}, action) => {
    switch(action.type) {
        case SELECT_HERO:
            const {hero1, hero2} = action;
            return {...state, hero1, hero2};
        default:
            return state
    }
};