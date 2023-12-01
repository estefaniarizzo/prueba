const { Calificacion } = require('../models');

const getCalificacion = async (req, res) => {
  try {
    const calificacions = await Calificacion.findAll();
    res.json(calificacions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCalificacion = async (req, res) => {
  try {
    // Verifica si la preguntaId está presente en el cuerpo de la solicitud
    if (!req.body.preguntaId) {
      return res.status(400).json({ error: 'La preguntaId es obligatoria para crear una calificación' });
    }

    // Verifica si la pregunta asociada existe
    const preguntaExistente = await Pregunta.findByPk(req.body.preguntaId);
    if (!preguntaExistente) {
      return res.status(404).json({ error: 'La pregunta asociada no fue encontrada' });
    }

    // Crea la calificación
    const calificacion = await Calificacion.create(req.body);
    res.json(calificacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCalificacionById = async (req, res) => {
  try {
    const calificacion = await Calificacion.findByPk(req.params.id);
    if (!calificacion) {
      res.status(404).json({ error: 'Nota no encontrado' });
    } else {
      res.json(calificacion);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCalificacion = async (req, res) => {
  try {
    const calificacion = await Calificacion.findByPk(req.params.id);
    if (!calificacion) {
      res.status(404).json({ error: 'Nota no encontrado' });
    } else {
      await calificacion.update(req.body);
      res.json(calificacion);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCalificacion = async (req, res) => {
  try {
    const calificacion = await Calificacion.findByPk(req.params.id);
    if (!calificacion) {
      res.status(404).json({ error: 'Nota no encontrado' });
    } else {
      await calificacion.destroy();
      res.json({ message: 'Nota eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCalificacionesPorAlumno = async (req, res) => {
  try {
    const alumnoId = req.params.id;

    // Obtener calificaciones por alumno
    const calificaciones = await Calificacion.findAll({
      where: {
        alumno: alumnoId,
      },
    });

    res.json(calificaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
    getCalificacion,
    getCalificacionesPorAlumno,
    createCalificacion,
    getCalificacionById,
    updateCalificacion,
    deleteCalificacion,
};
