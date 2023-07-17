import {/*FILTER_BY_SOURCE_OFF, FILTER_BY_TYPE_OFF,PAGINATE*/GET_POKEMON_BY_NAME,INC_CURRENT_PAGE,DEC_CURRENT_PAGE,FILTER_POKEMONS_BY_SOURCE, FILTER_POKEMONS_BY_TYPE, GET_ALL_POKEMONS,GET_TYPES,ORDER_POKEMONS,CHANGE_ORDER_DIRECTION} from './actions.js';

const ITEMS_PER_PAGE =12;

const initialState = {
    pokemons:[],
    pokemonsFiltered:[],
    types: [],
    typeValue:'',
    sourceValue:'',
    filtered:false,
    orderBy:'',
    orderDirection:'ascending',
    currentPage:1,
};

const rootReducer = (state = initialState, action)=>{
    switch(action.type) {
        case GET_ALL_POKEMONS:
            return {...state,pokemons:action.payload};

        case GET_TYPES:
            return {...state,types:action.payload}; 

        case FILTER_POKEMONS_BY_TYPE:{
            const { pokemons, sourceValue } = state;
            let newPokemonsFiltered =
              action.payload === 'all'
                ? [...pokemons]
                : [...pokemons].filter(pokemon => pokemon.types.includes(action.payload));
            if (sourceValue!==''){
                if(sourceValue==='BBDD')
                    newPokemonsFiltered=newPokemonsFiltered.filter(pokemon=>pokemon.created);
                else 
                    newPokemonsFiltered=newPokemonsFiltered.filter(pokemon=>!pokemon.created);  
            }
            return {...state,
                      typeValue:action.payload,
                      filtered:(action.payload!=='all' || sourceValue !==''),
                      pokemonsFiltered:newPokemonsFiltered
                    }      
        };

        case FILTER_POKEMONS_BY_SOURCE: {
            const { typeValue, pokemons, } = state;
            let newPokemonsFiltered = [];
            switch (action.payload) {
              case 'BBDD':
                newPokemonsFiltered = typeValue
                  ? pokemons.filter(pokemon => pokemon.created && pokemon.types.includes(typeValue))
                  : pokemons.filter(pokemon => pokemon.created);
                break;
              case 'API':
                newPokemonsFiltered = typeValue
                  ? pokemons.filter(pokemon => !pokemon.created && pokemon.types.includes(typeValue))
                  : pokemons.filter(pokemon => !pokemon.created);
                break;
              default:
                newPokemonsFiltered = typeValue
                  ? pokemons.filter(pokemon => pokemon.types.includes(typeValue))
                  : [...pokemons];
                break;
            }
            return {
              ...state,
              sourceValue: action.payload,
              filtered:(action.payload!=='' || typeValue !=='all'),
              pokemonsFiltered: newPokemonsFiltered,
            };
        }
        
        case ORDER_POKEMONS :
            return {...state,sourceValue:''};

        case GET_POKEMON_BY_NAME :
            if (!Array.isArray(action.payload)) return alert(action.payload.error);
            return {...state,
                      pokemonsFiltered: action.payload,
                      filtered:true};
        
        case INC_CURRENT_PAGE : 
            return {...state,currentPage:state.currentPage+1};
        
        case DEC_CURRENT_PAGE : 
            return {...state,currentPage:state.currentPage-1};


        default:    
            return {...state};
    }    
};

export default rootReducer;