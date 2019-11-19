import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';

// const heroReducer = () => {
//     return [
//         { name: 'Batman', publisher: 'DC', image: '/urlImage'},
//         { name: 'Captain America', publisher: 'Marvel', image: '/urlImage'},
//     ];
// };

const selectedHeroesReducer = (selectedHero = null, action) => {
    if(action.type === 'SELECTED_HEROES') {
        return action.payload;
    }

    return selectedHero;
};

export default combineReducers({
    heroes: heroesReducer,
    selectedHeroes: selectedHeroesReducer
});