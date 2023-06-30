const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  //   // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: 'Name could not be empty',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          args: true,
          msg: 'Image must be a valid URL string',
        },
      },
    },
    life: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'Life value must be an integer',
        },
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'Attack value must be an integer',
        },
      },
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: 'Defense value must be an integer',
        },
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
      validate: {
        isInt: {
          msg: 'Speed value must be an integer',
        },
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
      validate: {
        isInt: {
          msg: 'Height value must be an integer',
        },
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
      validate: {
        isInt: {
          msg: 'Weight value must be an integer',
        },
      },
    },
  }, { timestamps: false });
};

// module.exports = (sequelize) => {
//   sequelize.define('Pokemon', {
//     id:{
//       type: DataTypes.UUID,
//       primaryKey: true,
//       defaultValue:DataTypes.UUIDV1,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate:{
//         notEmpty: {
//           msg:'Name could not be empty',
//         }
//       }
//     },
//     image: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate:{
//         isUrl : true,
//         msg:'Image must be an URL string'
//       }  
//     },
//     life: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate : {
//         isInt : true,
//         msg: 'life value must be an integer'
//       }
      
//     },
//     attack: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate : {
//         isInt : true,
//         msg: 'attack value must be an integer'
//       }
//     },
//     defense: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       validate : {
//         isInt : true,
//         msg: 'defense value must be an integer'
//       }
//     },
//     speed: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: -1, //default value for non value property
//       validate : {
//         isInt : true,
//         msg: 'speed value must be an integer'
//       } 
//     },
//     height: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: -1, //default value for non value property
//       validate : {
//         isInt : true,
//         msg: 'height value must be an integer'
//       } 
//     },
//     weight: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: -1, //default value for non value property
//       validate : {
//         isInt : true,
//         msg: 'weight value must be an integer'
//       } 
//     },
//   },{timestamps:false});
// };
