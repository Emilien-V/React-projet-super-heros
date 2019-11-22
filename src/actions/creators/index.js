import superHeroApi from '../../apis/superHeroApi';
import keys from '../../secret';
import {SELECT_HERO, FETCH_HEROES, ADD_TO_SCROREBOARD, FETCH_SEARCH_HEROES} from '../types'

export const fetchSearchHero = name => async (dispatch) => {
    console.log(name)
    const response = await superHeroApi.get(`/api/${ keys.API_KEY }/search/${name}`);
    dispatch({ type: FETCH_SEARCH_HEROES, payload: [response.data] })
    console.log(response.data)
}; 

export const addToScoreboard = (hero1, hero2) => (dispatch) => {
    console.log(hero1, hero2)
    dispatch({
        type: ADD_TO_SCROREBOARD,
        heroes: [hero1, hero2]
    });
}

export const deselectHero = (hero) => (dispatch, getState) => {
    const state = getState();
    let hero1 = state.selectHeroes.hero1;
    let hero2 = state.selectHeroes.hero2;
    
    if(hero1 && hero1.id === hero.id) {
        hero1 = null
    } 
    if (hero2 && hero2.id === hero.id) {
        hero2 = null
    }

    dispatch({
        type: SELECT_HERO,
        hero1, 
        hero2
    });
}

export const selectHero = (hero) => (dispatch, getState) => {
    const state = getState();
    let hero1 = state.selectHeroes.hero1;
    let hero2 = state.selectHeroes.hero2;
    
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

    dispatch({
        type: SELECT_HERO,
        hero1, 
        hero2
    });
}

export const fetchHero = id => async (dispatch, getState) => {
    const state = getState();

    if(!state.heroes.some( hero => parseInt(hero.id) === id)) {
        const response = await superHeroApi.get(`/api/${ keys.API_KEY }/${id}`);
        dispatch({ type: FETCH_HEROES, payload: [response.data] })
    }
    
}; 

export const fetchFirstHeroes = () => async (dispatch) => {
    const ids = [70, 149, 332, 265, 213, 644, 720, 298, 732, 107];
    const promise = [];

    ids.forEach( id => {
        promise.push(new Promise( resolve => superHeroApi.get(`/api/${ keys.API_KEY }/${id}` ).then( response => resolve(response.data) )));
        
    })
    
    Promise.all(promise).then(value => dispatch({ type: FETCH_HEROES, payload: value }));
};

    
