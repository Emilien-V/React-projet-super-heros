import superHeroApi from '../apis/superHeroApi';
import keys from '../secret';

//Exemple de Actions Creator

export const selectHeroes = (hero1, hero2) => {
    //Retourne une action
    return {
        type: 'SELECTED_HEROES',
        payload: {
            hero1, hero2
        }
    };
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

    
