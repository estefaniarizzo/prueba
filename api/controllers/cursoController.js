const { Curso } = require('../models');

const getCursos = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};

const getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      res.status(404).json({ error: 'Curso no encontrado' });
    } else {
      res.json(curso);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      res.status(404).json({ error: 'Curso no encontrado' });
    } else {
      await curso.update(req.body);
      res.json(curso);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCurso = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      res.status(404).json({ error: 'Curso no encontrado' });
    } else {
      await curso.destroy();
      res.json({ message: 'Curso eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getCursos,
  createCurso,
  getCursoById,
  updateCurso,
  deleteCurso,
};
