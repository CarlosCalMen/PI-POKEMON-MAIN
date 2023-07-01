import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css'

const CardsContainer = ()=>{
    const pokemons = [{
      "id": "22164ee0-17b9-11ee-a986-678f9f24040d",
      "name": "chelisaur",
      "image": "http://imagen3.png",
      "life": 3,
      "attack": 15,
      "defense": 1,
      "speed": 12,
      "height": 8,
      "weight": 10,
      "Types": [
        "poison",
        "ghost"
      ]
    },
    {
      "id": 1,
      "name": "bulbasaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      "life": 45,
      "attack": 49,
      "defense": 49,
      "speed": 45,
      "height": 7,
      "weight": 69,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 2,
      "name": "ivysaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
      "life": 60,
      "attack": 62,
      "defense": 63,
      "speed": 60,
      "height": 10,
      "weight": 130,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 3,
      "name": "venusaur",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
      "life": 80,
      "attack": 82,
      "defense": 83,
      "speed": 80,
      "height": 20,
      "weight": 1000,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 10033,
      "name": "venusaur-mega",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png",
      "life": 80,
      "attack": 100,
      "defense": 123,
      "speed": 80,
      "height": 24,
      "weight": 1555,
      "types": [
        "grass",
        "poison"
      ]
    },
    {
      "id": 10195,
      "name": "venusaur-gmax",
      "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png",
      "life": 80,
      "attack": 82,
      "defense": 83,
      "speed": 80,
      "height": 240,
      "weight": 10000,
      "types": [
        "grass",
        "poison"
      ]
    }];
    return (
        <div className ={style.mainContainer}>
            {pokemons.map((pokemon)=>{
                return <Card
                        id={pokemon.id}
                        key={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.image}
                        types={pokemon.types||pokemon.Types}
                />
            })};
        </div>
    );
};

export default CardsContainer;
// // import Card from '../Card/Card.jsx';
// // import style from './CardsContainer.module.css'

// import Card from '../Card/Card.jsx';
// import style from './CardsContainer.module.css'
// const CardsContainer = ()=>{
//     const pokemons = [{
//         "id": "f3203040-17b0-11ee-a44b-83b17103efcc",
//         "name": "chelisaur",
//         "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
//         "life": 3,
//         "attack": 15,
//         "defense": 1,
//         "speed": 12,
//         "height": 8,
//         "weight": 10,
//         "Types": [
//           "poison",
//           "ghost"
//         ]
//       },
//     ]  
//     return (
//         <div className ={style.mainContainer}>
//             {pokemons.map((pokemon)=>{
//                 return <Card
//                         id={pokemon.id}
//                         key={pokemon.id}
//                         name={pokemon.name}
//                         types={pokemon.types||pokemon.Types}
//                 />
//             })};
//         </div>
//     );
// };

// export default CardsContainer;