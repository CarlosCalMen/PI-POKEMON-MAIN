const {Router} = require('express');
const {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonHandler
    } = require ('../handlers/pokemonHandlers.js');

const pokemonsRouter = Router();

pokemonsRouter.get('/',getPokemonHandler);

pokemonsRouter.get('/:id',getPokemonByIdHandler);

pokemonsRouter.post('/',createPokemonHandler);

module.exports = pokemonsRouter;