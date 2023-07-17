import style from './Landing.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {getTypes,getAllPokemons} from '../../redux/actions.js';
import {useHistory} from 'react-router-dom'

const Landing=()=>{
    const dispatch = useDispatch();
    const history = useHistory();
    
    useEffect(()=>{
        dispatch(getTypes());
        return dispatch(getAllPokemons());
    },[dispatch]);

    const clickHandler = ()=>{
        history.push('/home');
    };
    return (
        <div className={style.container}>
          <div className={style.form}>
            <div className={style.imagen}></div>
            <h1>Welcome to POKEMON API</h1>
            <button onClick={clickHandler}>Get in....</button>
          </div>
        </div>
      );
};

export default Landing;