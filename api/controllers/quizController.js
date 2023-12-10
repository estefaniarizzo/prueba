const { Examen, Nota } = require('../models');

const getExamenes = async (req, res) => {
  try {
    const examenes = await Examen.findAll();
    res.json(examenes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createExamen = async (req, res) => {
  try {
    const examen = await Examen.create(req.body);
    res.json(examen);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExamenById = async (req, res) => {
  try {
    const examen = await Examen.findByPk(req.params.id);
    if (!examen) {
      res.status(404).json({ error: 'Examen no encontrado' });
    } else {
      res.json(examen);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateExamen = async (req, res) => {
  try {
    const examen = await Examen.findByPk(req.params.id);
    if (!examen) {
      res.status(404).json({ error: 'Examen no encontrado' });
    } else {
      await examen.update(req.body);
      res.json(examen);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteExamen = async (req, res) => {
  try {
    const examen = await Examen.findByPk(req.params.id);
    if (!examen) {
      res.status(404).json({ error: 'Examen no encontrado' });
    } else {
      await examen.destroy();
      res.json({ message: 'Examen eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getExamenesNoRespondidosPorAlumno = async (req, res) => {
  try {
    const alumnoId = req.params.id;

    // Obtener todos los exámenes
    const todosExamenes = await Examen.findAll();

    // Obtener los exámenes respondidos por el alumno
    const examenesRespondidos = await Nota.findAll({
      where: {
        alumno: alumnoId,
      },
      attributes: ['examenId'], // Obtener solo los IDs de los exámenes respondidos
    });

    // Filtrar los exámenes no respondidos
    const examenesNoRespondidos = todosExamenes.filter(
      (examen) => !examenesRespondidos.some((nota) => nota.examenId === examen.id)
    );

    res.json(examenesNoRespondidos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getExamenes,
  createExamen,
  getExamenById,
  updateExamen,
  deleteExamen,
  getExamenesNoRespondidosPorAlumno,
};
