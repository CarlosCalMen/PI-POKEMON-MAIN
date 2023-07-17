const axios = require('axios');
const {Pokemon,Type} = require ('../db.js');
const {Op} = require('sequelize');
const URL_BASE= 'https://pokeapi.co/api/v2/pokemon/';

//auxiliar function to know how many pokemos are into API 
const getCountPokemons = async()=>{
    const {data} = await axios(URL_BASE);
    return(data.count);
};

const returnPokemonInfo = (pokemonObject) => {
    return ({
        id: pokemonObject.id,
        name: pokemonObject.name,
        image: pokemonObject.sprites.other['official-artwork'].front_default,
        life: pokemonObject.stats[0].base_stat,
        attack: pokemonObject.stats[1].base_stat,
        defense: pokemonObject.stats[2].base_stat,
        speed: pokemonObject.stats[5].base_stat,
        height: pokemonObject.height,
        weight: pokemonObject.weight,
        created:false,        
        types:pokemonObject.types.map(element=>element.type.name),
    });
};
    
const getApiPokemonsByName = async(name)=>{
    const limit = await getCountPokemons();
    let pokemonsApi = [];
    const pokemonList = (await axios(`${URL_BASE}?limit=${limit}`)).data.results;
    pokemonList.forEach((pokemon)=>{
        if (pokemon.name.toUpperCase().includes(name.toUpperCase()))
            pokemonsApi.push(pokemon);
    });
    return await Promise.all (
        pokemonsApi.map(async (pokemon) => {
            const pokemonData = (await axios(pokemon.url)).data;
            return (returnPokemonInfo(pokemonData));
        })    
    );
};

const getBBDDpokemonsByName = async(name) => {
    let pokemonsDataBase = [];
    pokemonsDataBase = await Pokemon.findAll({
        where:{
            name:{[Op.iLike]:`%${name}%`}
        },
        include:{
            model:Type,
            attributes:['name'],
            through:{
                attributes:[],
            },
        }
    });
    return pokemonsDataBase.map((pokemon) => {
    //uniformizar formatos en types
    const { Types, ...rest } = pokemon.toJSON();
    const types = Types.map((type) => type.name);
    return { ...rest, types };
    });
};

const getPokemonsByName = async(name)=>{
    const pokemonsApi = await getApiPokemonsByName(name);
    const pokemonsBBDD = await getBBDDpokemonsByName (name);
    if ((pokemonsApi.length + pokemonsBBDD.length)>0)     
        return [...pokemonsBBDD,...pokemonsApi];
    throw new Error ('No existe ese pokemon');    
};

const getAllApiPokemons = async ()=> {
    // obtener el máximo número de pokemones
    const limit = 250;//await getCountPokemons();
    const pokemonList = (await axios(`${URL_BASE}?limit=${limit}`)).data.results;
    return await Promise.all (
        pokemonList.map(async (pokemon) => {
            const pokemonDetail = (await axios(pokemon.url)).data;
            return returnPokemonInfo(pokemonDetail);
        })
    );
//     let limit = 200//await getCountPokemons();
//     let finalList=[];
//     let i=0;
//     const totalPokemons=1281;
//     while (i<totalPokemons){
//         let section=[];
//         (i+limit>1281)?limit=1281-i:limit=200;
//         let pokemonList = (await axios(`${URL_BASE}?offset=i&limit=${limit}`)).data.results;
//         section= await Promise.all (
//             pokemonList.map(async (pokemon) => {
//                 const pokemonDetail = (await axios(pokemon.url)).data;
//                 return returnPokemonInfo(pokemonDetail);
//             })
//         );
//         finalList=[...finalList,...section];
//         i+=limit;
//     };
//     return finalList;
 };

const getAllBBDDPokemons = async () => {
    const pokemonList = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ['name'],
        through: {
          attributes: [],
        },
      },
    });
    return pokemonList.map((pokemon) => {
        //uniformizar formatos en types
        const { Types, ...rest } = pokemon.toJSON();
        const types = Types.map((type) => type.name);
        return { ...rest, types };
    });

  };
  
const getAllPokemons = async()=>{
    const apiPokemons = await getAllApiPokemons();
    const bbddPokemons = await getAllBBDDPokemons();
    return [...bbddPokemons,...apiPokemons];
};

const getPokemonById = async(id)=>{
    //ver el tipo de id para buscar en la Api o en la BBDD
    if (!isNaN(id)){
        const pokemonDetail = (await axios(`${URL_BASE}${id}`)).data;
        return returnPokemonInfo(pokemonDetail);
    }
    else {
        const pokemon= await Pokemon.findByPk(id,
            {
                include:{
                    model:Type,
                    attributes:['name'],
                    through:{attributes:[]}
                }
            }); 
        return ({...pokemon.toJSON(),
                Types: pokemon.Types.map((type) => type.name),
              });    
    };
};

const createPokemon = async({name,image,life,attack,defense,speed,height,weight,types})=>{
    try {
        const newPokemon = await Pokemon.create({
                                                name,
                                                image,
                                                life,
                                                attack,
                                                defense,
                                                speed,
                                                height,
                                                weight
                                                });
        await newPokemon.addType(types);
        return newPokemon;
    }
    catch (error) {
        throw new Error (error.message);
    }
};

module.exports = {
    getCountPokemons,
    getApiPokemonsByName,
    getBBDDpokemonsByName,
    getPokemonsByName,
    getAllApiPokemons,
    getAllBBDDPokemons,
    getAllPokemons,
    getPokemonById,
    createPokemon
};