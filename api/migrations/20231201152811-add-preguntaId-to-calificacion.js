'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Calificacions', 'preguntaId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Pregunta', // Ajusta esto según el nombre de tu tabla de Preguntas
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Calificacions', 'preguntaId');
  }
};
