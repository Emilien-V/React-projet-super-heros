import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectHeroesReducer from './selectHeroesReducer';
import scoreboardReducer from './scoreboardReducer';

export default combineReducers({
    heroes: heroesReducer,
    selectHeroes: selectHeroesReducer,
    scoreboard: scoreboardReducer
});