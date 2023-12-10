'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Examen extends Model {
    static associate(models) {
      // define association here
      Examen.hasMany(models.Nota, { foreignKey: 'examenId', as: 'notas' });
    }
  }

  Examen.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Examen',
  });

  return Examen;
};
