import { useDispatch,useSelector } from 'react-redux';
import style from './Filters.module.css';
import { filterPokemonsBySource,filterPokemonsByType} from '../../redux/actions';

const Filters = ()=>{
    const dispatch=useDispatch();
    const types=useSelector(state=>state.types);

    const changeHandler = (event)=>{
        const nameSelect=event.target.name;
        const valueSelected = event.target.value;
        switch (nameSelect) {
            case 'source':
                return dispatch(filterPokemonsBySource(valueSelected));
            case 'types':
                return dispatch(filterPokemonsByType(valueSelected));
           default:break;     
        };
    //     if (nameSelect==='source') {
    //         return dispatch(filterPokemonsBySource(valueSelected));
    //     }
    //     if (nameSelect==='types'){
    //     dispatch(filterPokemonsByType(valueSelected));
    //     };
    };   

    return (
        <div className={style.filtersBar}>
            <label>Filter by:     </label>
            <label>Source</label>
            <select name="source" id="source" onChange={changeHandler}>
                <option value="">-------</option>
                <option value="BBDD">BBDD</option>
                <option value="API">API</option>
            </select>
            <label >Type  </label>
            <select name="types" id="types" onChange={changeHandler}>
                <option value='all'>All</option>
                {types.map(type=>
                <option key = {type.id} value={type.name}>{type.name}</option>)}
            </select>
            <select name="property" id="property" onChange={changeHandler}>
               <option value='name'>name</option>     
               <option value='attack'>attack</option>     
            </select>        
            <select name="direction" id="direction" onChange={changeHandler}>
               <option value='ascending'>Ascending</option>
               <option value='descending'>Descending</option>
            </select>        
        </div>
    );
};

export default Filters;