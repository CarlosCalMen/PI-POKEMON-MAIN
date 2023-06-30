const {
        getPokemonsByName,
        getAllPokemons,
        getPokemonById,
        createPokemon
    } = require ('../controllers/pokemonsControllers.js');

const getPokemonHandler = async(req,res)=>{
    try {
        const {name} = req.query;
        if (name) 
            res.status(200).json(await getPokemonsByName(name));
        else     
            res.status(200).json(await getAllPokemons());
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getPokemonByIdHandler = async(req,res)=>{
    try {
        const {id} = req.params;
        res.status(200).json(await getPokemonById(id));
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const createPokemonHandler = async(req,res)=>{
    try {
        const newPokemon = req.body;
        res.status(200).json(await createPokemon(newPokemon));
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}
module.exports = {getPokemonHandler,getPokemonByIdHandler,createPokemonHandler}