'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calificacion extends Model {
    static associate(models) {
      // Una calificación pertenece a una pregunta
      Calificacion.belongsTo(models.Pregunta, {
        foreignKey: 'preguntaId', // Asegúrate de cambiar 'preguntaId' si tu clave foránea tiene un nombre diferente
        as: 'pregunta', // Opcional, pero te permite acceder a la pregunta asociada usando calificacion.pregunta
      });
    }
  }
  Calificacion.init(
    {
      quiz: DataTypes.STRING,
      alumno: DataTypes.STRING,
      puntaje: DataTypes.INTEGER,
      preguntaId: DataTypes.INTEGER, // Nueva columna para la clave foránea a Pregunta
    },
    {
      sequelize,
      modelName: 'Calificacion',
    }
  );
  return Calificacion;
};

