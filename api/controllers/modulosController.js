const { Nota, Modulos } = require('../models');
const { Sequelize } = require('sequelize');

const getModulo = async (req, res) => {
  try {
    const modulos = await Modulos.findAll();
    res.json(modulos);
  } catch (error) {
    console.error('Error al obtener los módulos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const getMejoresPeoresModulos = async (req, res) => {
  try {
    // Obtener las calificaciones agrupadas por módulo y calcular el promedio
    const calificaciones = await Nota.findAll({
      include: [{
        model: Modulo,
        attributes: ['nombre'],
      }],
      attributes: [
        [Sequelize.fn('AVG', Sequelize.col('puntaje')), 'promedio'],
      ],
      group: ['Nota.moduloId'],
    });

    // Ordenar por promedio (de mejor a peor)
    const mejoresModulos = calificaciones.sort((a, b) => b.dataValues.promedio - a.dataValues.promedio);

    // Obtener solo los nombres de los módulos
    const nombresMejoresModulos = mejoresModulos.map((calificacion) => calificacion.Modulo.nombre);

    res.json({ mejoresModulos: nombresMejoresModulos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createModulo = async (req, res) => {
  try {
    const modulos = await Modulos.create(req.body);
    res.json(modulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getModuloById = async (req, res) => {
  try {
    const modulos = await Modulos.findByPk(req.params.id);
    if (!modulos) {
      res.status(404).json({ error: 'Modulo no encontrado' });
    } else {
      res.json(modulos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateModulo = async (req, res) => {
  try {
    const modulos = await Modulos.findByPk(req.params.id);
    if (!modulos) {
      res.status(404).json({ error: 'Modulo no encontrado' });
    } else {
      await modulos.update(req.body);
      res.json(modulos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteModulo = async (req, res) => {
  try {
    const modulos = await Modulos.findByPk(req.params.id);
    if (!modulos) {
      res.status(404).json({ error: 'Modulo no encontrado' });
    } else {
      await modulos.destroy();
      res.json({ message: 'Modulo eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getModulo,
  getMejoresPeoresModulos,
  createModulo,
  getModuloById,
  updateModulo,
  deleteModulo,
};
