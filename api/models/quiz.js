'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class QUIZ extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  QUIZ.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    pregunta: DataTypes.STRING,
    respuesta: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'QUIZ',
  });
  return QUIZ;
};