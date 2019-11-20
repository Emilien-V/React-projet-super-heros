import superHeroApi from '../../apis/superHeroApi';
import keys from '../../secret';
import {SELECT_HERO} from '../types'

//Exemple de Actions Creator

export const selectHero = (hero) => (dispatch, getState) => {
    const state = getState();
    let hero1 = state.selectHeroes.hero1;
    let hero2 = state.selectHeroes.hero2;

    console.log('hero', hero)
    console.log({hero1, hero2})
    
    if(hero1) {
        if (hero2) {
            hero1 = hero2
            hero2 = hero
        } else {
            hero2 = hero
        }
    } else {
        hero1 = hero
    }

    console.log({hero1, hero2}) 

    dispatch({
        type: SELECT_HERO,
        hero1, 
        hero2
    });
}

export const fetchHeroes = () => async (dispatch, getState) => {
    const id = Math.floor(Math.random() * 10) + 1;
    const state = getState();

    if(!state.heroes.some( hero => parseInt(hero.id) === id)) {
        const response = await superHeroApi.get(`/api/${ keys.API_KEY }/${id}`);
        dispatch({ type: 'FETCH_HEROES', payload: [response.data] })
    }

    
}; 

export const fetchFirstHeroes = () => async (dispatch) => {
    const heroes = [];
    const ids = [70, 149, 332, 265, 213, 644, 720, 298, 732, 107];
    const promise = [];

    ids.forEach( id => {
        promise.push(new Promise( resolve => superHeroApi.get(`/api/${ keys.API_KEY }/${id}` ).then( response => resolve(response.data) )));
        
    })
    
    Promise.all(promise).then(value => dispatch({ type: 'FETCH_HEROES', payload: value }));
};

    
