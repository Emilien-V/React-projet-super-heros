import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectHeroesReducer from './selectHeroesReducer';
import scoreboardReducer from './scoreboardReducer';
import searchHeroesReducer from './searchHeroesReducer';

export default combineReducers({
    heroes: heroesReducer,
    selectHeroes: selectHeroesReducer,
    scoreboard: scoreboardReducer,
    searchHeroes: searchHeroesReducer
});