import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectHeroesReducer from './selectHeroesReducer';

export default combineReducers({
    heroes: heroesReducer,
    selectHeroes: selectHeroesReducer
});