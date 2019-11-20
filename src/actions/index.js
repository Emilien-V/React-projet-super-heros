import superHeroApi from '../apis/superHeroApi';

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

export const fetchHeroes = () => async dispatch => {


    const response = await superHeroApi.get('/api/3191256137611048/2');
    
    dispatch({ type: 'FETCH_HEROES', payload: response.data })
}; 
