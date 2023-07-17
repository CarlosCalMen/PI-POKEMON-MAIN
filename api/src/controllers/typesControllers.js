const axios = require('axios');
const {Type} = require ('../db.js');
const URL= 'https://pokeapi.co/api/v2/type/';

const getAllTypes= async()=>{
    const data = (await axios(URL)).data.results;
    const types =data.map((type)=>{
        return {name:type.name};
    });
    const allTypes=await Type.findAll();//verificar si ya existe datos en la BBDD
    if (!allTypes.length){
        const typesCreated = await Type.bulkCreate(types);
        if (!typesCreated.length) throw new Error ("An error occurred");
        return typesCreated;
    } 
    return allTypes;   
}; 

module.exports = getAllTypes;