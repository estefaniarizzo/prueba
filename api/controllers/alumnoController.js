const { Alumno } = require('../models');

const getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAlumno = async (req, res) => {
  try {
    console.log(req.body);
    const alumno = await Alumno.create(req.body);
    res.json(alumno);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAlumnoById = async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (!alumno) {
      res.status(404).json({ error: 'Alumno no encontrado' });
    } else {
      res.json(alumno);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (!alumno) {
      res.status(404).json({ error: 'alumno no encontrado' });
    } else {
      await alumno.update(req.body);
      res.json(alumno);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAlumno = async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (!alumno) {
      res.status(404).json({ error: 'Alumno no encontrado' });
    } else {
      await alumno.destroy();
      res.json({ message: 'Alumno eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAlumnos,
  createAlumno,
  getAlumnoById,
  updateAlumno,
  deleteAlumno,
};
