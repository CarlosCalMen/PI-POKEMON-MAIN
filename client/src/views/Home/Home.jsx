import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx';
import style from './Home.module.css';
import {useSelector,useDispatch} from 'react-redux';
import { useEffect,useState } from 'react';
import { getAllPokemons,incCurrentPage,decCurrentPage } from '../../redux/actions.js';
const ITEMS_PER_PAGE = 12;
const next = '>';
const previous = '<';
// //const last = '>>';
// //const first = '<<';

const Home=()=>{

    const pokemons = useSelector(state=>state.pokemons);
    const sourceValue = useSelector(state=>state.sourcevalue);
    const typeValue = useSelector(state=>state.typeValue);
    const filtered = useSelector(state=>state.filtered)
    const pokemonsFiltered = useSelector(state=>state.pokemonsFiltered);
    const currentPage=useSelector(state=>state.currentPage);
    const [pokemonList,setPokemonList]=useState([]);//(sourceValue||typeValue)?[...pokemonsFiltered]:[...pokemons]); 
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getAllPokemons());
      //  alert(`data despues de useeffect en pokemons${pokemons.length}`);
    },[dispatch]);
    
    useEffect(()=>{
        const aux= filtered? [...pokemonsFiltered] : [...pokemons];
        //alert(`data despues de useeffect en aux ${aux.length}`);
        setPokemonList(aux.splice((currentPage-1)*ITEMS_PER_PAGE,ITEMS_PER_PAGE));
    },[pokemons,pokemonsFiltered]);
    
    const prevPage = ()=>{
        const aux= filtered? [...pokemonsFiltered] : [...pokemons];
        if (currentPage > 1){
            dispatch(decCurrentPage());
            setPokemonList(aux.splice((currentPage-1)*ITEMS_PER_PAGE,ITEMS_PER_PAGE));
        };
    };

    const nextPage = ()=>{
        const aux= filtered? [...pokemonsFiltered] : [...pokemons];
        if (currentPage -1 < Math.trunc(pokemons.length/ITEMS_PER_PAGE)){
            dispatch(incCurrentPage());
            setPokemonList(aux.splice((currentPage-1)*ITEMS_PER_PAGE,ITEMS_PER_PAGE));
        };
    };

    return (
        <>
          <h1>Esta es la vista de Home</h1>
          {pokemonList.length > 0 ? (
            <>
              <CardsContainer pokemonList={pokemonList} />
              <button onClick={prevPage}>{previous}</button>
              <input value={`${currentPage}`} disabled={true} />
              <button onClick={nextPage}>{next}</button>
            </>
          ) : null}
        </>
      );
      
;}      

export default Home;