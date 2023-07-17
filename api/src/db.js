const { Sequelize } = require('sequelize');
const pokemonModel=require('./models/Pokemon.js');
const typeModel=require('./models/Type.js');
require('dotenv').config();
const { DB_DIALECT,DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
   `${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false, // set to console.log to see the raw SQL queries
      native: false, // lets Sequelize know we can use pg-native for ~30% more speed
   }
   );
//inyectamos seuelize a los modelos
pokemonModel(sequelize);
typeModel(sequelize);
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon,Type } = sequelize.models;

// Aca vendrian las relaciones
Pokemon.belongsToMany(Type,{through:'pokemon_types',timestamps:false});//relación muchos a muchos
Type.belongsToMany(Pokemon,{through:'pokemon_types',timestamps:false});//relación muchos a muchos

module.exports = {
   ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
   conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
