import axios from 'axios';
export const GET_ALL_POKEMONS = 'GET_ALL_POKEMONS';
//export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const GET_POKEMON_BY_NAME = 'GET_POKEMON_BY_NAME';
export const FILTER_POKEMONS_BY_TYPE = 'FILTER_POKEMONS_BY_TYPE';
export const FILTER_POKEMONS_BY_SOURCE = 'FILTER_POKEMONS_BY_SOURCE';
export const ORDER_POKEMONS =  'ORDER_POKEMONS';
export const CHANGE_ORDER_DIRECTION = 'CHANGE_ORDER_DIRECTION';
export const CREATE_POKEMON = 'CREATE_POKEMON';
export const GET_TYPES = 'GET_TYPES';
// export const PAGINATE ='PAGINATE';
export const DEC_CURRENT_PAGE = 'DEC_CURRENT_PAGE';
export const INC_CURRENT_PAGE = 'INC_CURRENT_PAGE';
// export const FILTER_BY_SOURCE_OFF = 'FILTER_BY_SOURCE_OFF';
// export const FILTER_BY_TYPE_OFF = 'FILTER_BY_TYPE_OFF';

export const getAllPokemons= ()=>{
    return async (dispatch)=>{
        const pokemonList=(await axios('http://localhost:3001/pokemons')).data;
        dispatch ({type:GET_ALL_POKEMONS,payload:pokemonList}); 
    };
};

// export const getPokemonByID = (id)=>{
//     return async (dispatch)=>{
//         const pokemon=(await axios(`http://localhost:3001/pokemons/${id}`)).data;
//         dispatch ({type:GET_POKEMON_BY_ID,payload:pokemon}); 
//     };
// };

export const getPokemonByName = (name)=>{
    return async (dispatch)=>{
        const pokemonList=(await axios(`http://localhost:3001/pokemons/?name=${name}`)).data;
        dispatch ({type:GET_POKEMON_BY_NAME,payload:pokemonList}); 
    };
};

export const filterPokemonsByType = (type)=>{
    return (dispatch)=>dispatch({type:FILTER_POKEMONS_BY_TYPE,payload:type});
};

export const filterPokemonsBySource = (source)=>{
    return (dispatch)=>dispatch({type:FILTER_POKEMONS_BY_SOURCE,payload:source});
};

export const orderPokemons = (property)=>{
    return (dispatch)=>dispatch({type:ORDER_POKEMONS,payload:property});
};

export const changeOrderdirection = (direction)=>{
    return (dispatch)=>dispatch({type:CHANGE_ORDER_DIRECTION,payload:direction});
};

export const createPokemon = (newPokemon)=>{
    return async (dispatch)=>{
        try {
            const pokemonCreated=(await axios.post('http://localhost:3001/pokemons',newPokemon)).data;
            dispatch ({type:CREATE_POKEMON,payload:pokemonCreated}); 
            alert('Pokemon created successfully');
        } catch (error) {
            alert(error.response.data.error);
        }
    };
};

export const getTypes =()=>{
    return async (dispatch)=>{
        const types=(await axios('http://localhost:3001/types')).data;
        dispatch ({type:GET_TYPES,payload:types}); 
    };
};

export const decCurrentPage = ()=>{
    return (dispatch)=>{
        dispatch({type:DEC_CURRENT_PAGE});
    };
};

export const incCurrentPage = ()=>{
    return (dispatch)=>{
        dispatch({type:INC_CURRENT_PAGE});
    };
};

// export const paginate = (direction)=>{
//     return (dispatch)=>{
//         dispatch({type:PAGINATE,payload:direction});
//     }; 
// };

// export const filterBySourceOff = ()=> {
//     return (dispatch) => dispatch({type:FILTER_BY_SOURCE_OFF,payload:false});
// };

// export const filterByTypeOff = ()=> {
//     return (dispatch) => dispatch({type:FILTER_BY_TYPE_OFF,payload:false});
// };