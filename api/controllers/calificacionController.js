const { Nota } = require('../models');
const { Op } = require('sequelize');
const { Examen } = require('../models');

const getNotas = async (req, res) => {
  try {
    const notas = await Nota.findAll();
    res.json(notas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createNota = async (req, res) => {
  try {
    if (!req.body.examenId) {
      return res.status(400).json({ error: 'La examenId es obligatoria para crear una nota' });
    }

    const examenEncontrado = await Examen.findByPk(req.body.examenId);
    if (!examenEncontrado) {
      return res.status(404).json({ error: 'La examen asociada no fue encontrada' });
    }

    const nota = await Nota.create(req.body);
    res.json(nota);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNotaById = async (req, res) => {
  try {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota) {
      res.status(404).json({ error: 'Nota no encontrada' });
    } else {
      res.json(nota);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateNota = async (req, res) => {
  try {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota) {
      res.status(404).json({ error: 'Nota no encontrada' });
    } else {
      await nota.update(req.body);
      res.json(nota);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteNota = async (req, res) => {
  try {
    const nota = await Nota.findByPk(req.params.id);
    if (!nota) {
      res.status(404).json({ error: 'Nota no encontrada' });
    } else {
      await nota.destroy();
      res.json({ message: 'Nota eliminada exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNotasPorAlumno = async (req, res) => {
  try {
    const alumnoId = req.params.id;

    const notas = await Nota.findAll({
      where: {
        alumno: alumnoId,
      },
    });

    res.json(notas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getNotasPorGrupoPorFecha = async (req, res) => {
  try {
    const { grupo, fecha, filtro } = req.params;

    let fechaFiltro;
    switch (filtro) {
      case 'dia':
        fechaFiltro = {
          [Op.gte]: new Date(fecha),
          [Op.lt]: new Date(new Date(fecha).setDate(new Date(fecha).getDate() + 1)),
        };
        break;
      case 'semana':
        fechaFiltro = {
          [Op.gte]: new Date(fecha),
          [Op.lt]: new Date(new Date(fecha).setDate(new Date(fecha).getDate() + 7)),
        };
        break;
      case 'mes':
        fechaFiltro = {
          [Op.gte]: new Date(fecha),
          [Op.lt]: new Date(new Date(fecha).setMonth(new Date(fecha).getMonth() + 1)),
        };
        break;
      default:
        res.status(400).json({ error: 'Filtro no válido' });
        return;
    }

    const notas = await Nota.findAll({
      where: {
        grupo,
        createdAt: fechaFiltro,
      },
    });

    res.json(notas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getNotas,
  createNota,
  getNotaById,
  updateNota,
  deleteNota,
  getNotasPorAlumno,
  getNotasPorGrupoPorFecha,
};
