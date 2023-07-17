import {useState} from 'react';
import style from './SearchBar.module.css';
import {useDispatch} from 'react-redux';
import { getPokemonByName } from '../../redux/actions';

const SearchBar = ()=> {
   const dispatch = useDispatch();
   const [searchValue,setSearchValue] = useState(''); 
   
   const changeHandler = (event)=>{
      const value = event.target.value;
      setSearchValue(value);
   };
   
   const onSearch=(value)=>{
      dispatch(getPokemonByName(value));
   };

   return (
      <div className={style.barra}>
         <input className={style.inputSearch} type='search' onChange = {changeHandler} value={searchValue}/>
         <button className={style.botonSearch} onClick={()=>{onSearch(searchValue); setSearchValue('')} }>Search</button>
      </div>  
   );
}

export default SearchBar;
