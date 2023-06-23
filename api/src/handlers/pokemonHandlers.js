const getPokemonHandler = (req,res)=>{
    const {name} = req.query;
    if (name) 
        res.status(200).send(`Voy a traer todos los pokemon con nombre ${name}`);
    else     
        res.status(200).send(`Voy a traer todos los pokemones`);
}

const getPokemonByIdHandler = (req,res)=>{
    const {id} = req.params;
    res.status(200).send(`estoy en detalle pokemon con id ${id}`);
}

const createPokemonHandler = (req,res)=>{
    const newPokemon = req.body;
    res.status(200).send(`voy a crear un pokemon con los datos:
                        name: ${newPokemon.name}, 
                        hp:${newPokemon.hp}, 
                        attack:${newPokemon.attack}`);
}
module.exports = {getPokemonHandler,getPokemonByIdHandler,createPokemonHandler}