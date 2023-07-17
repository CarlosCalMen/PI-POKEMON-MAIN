const { DataTypes } = require('sequelize');
const top=20;
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
          msg: `Life value must be an integer`,
        },
        max:top,
        min:1,
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg:  `Attack value must be an integer`,
        },
        max:top,
        min:1,
      },
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: {
          msg: `Defense value must be an integer`,
        },
        max:top,
        min:1,
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: {
          msg: `Speed value must be an integer`,
        },
        max:top,
        min:0,
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: {
          msg: `Height value must be an integer`,
        },
        max:top,
        min:0,
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: {
          msg: `Weight value must be an integer`,
        },
        max:top,
        min:0,
      },
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    }
  }, { timestamps: false });
};
