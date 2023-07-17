import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';

const URL_BASE = 'http://localhost:3001/pokemons';

const Detail = () => {
  const {id} = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setPokemon(data);
        } else {
          alert(`No existe el pokemon con el id ${id}`);
        }
      })
      .catch((error) => {
        alert('Ocurrió un error al obtener los datos del pokemon');
      });
  }, [id]);
  return (
    <>
      <h1>Esta es la vista de Detail</h1>
      <div className={style.detailContainer}>
        <div className={style.imageContainer}>
          <img className ={style.image} src={pokemon.image} alt={pokemon.name} />
        </div>
        <div className={style.dataContainer}>
          <h2>Pokemon Id: {pokemon.id}</h2>
          <h2>Name: {pokemon.name}</h2>
          <h2>Life: {pokemon.life}</h2>
          <h2>Attack: {pokemon.attack}</h2>
          <h2>Defense: {pokemon.defense}</h2>
          {pokemon.speed && <h2>Speed: {pokemon.speed}</h2>}
          {pokemon.weight && <h2>Weight: {pokemon.weight}</h2>}
          {pokemon.height && <h2>Height: {pokemon.height}</h2>}
          <h2>Types:</h2>
          <ul>
            {pokemon.types && 
              pokemon.types.map((type, index) => (
                <li key={index}>{type}</li>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Detail;

