const axios = require('axios');
const {Type} = require ('../db.js');
const URL= 'https://pokeapi.co/api/v2/type/';

const getAllTypes= async()=>{
    const {data} = (await axios(URL));
    const types = data.results.map((type)=>{
        return {name:type.name};
    });
   const typesCreated = await Type.bulkCreate(types);
   return typesCreated.length ? "Types saved successfully":(()=>{throw new Error ("An error occurred")})();
}; 

module.exports = getAllTypes;