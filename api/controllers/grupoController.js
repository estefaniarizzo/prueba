const { Grupo } = require('../models');

const getGrupo = async (req, res) => {
  try {
    const grupos = await Grupo.findAll();
    res.json(grupos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createGrupo = async (req, res) => {
  try {
    const grupo = await Grupo.create(req.body);
    res.json(grupo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getGrupoById = async (req, res) => {
  try {
    const grupo = await Grupo.findByPk(req.params.id);
    if (!grupo) {
      res.status(404).json({ error: 'Grupo no encontrado' });
    } else {
      res.json(calificacion);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateGrupo = async (req, res) => {
  try {
    const grupo = await Grupo.findByPk(req.params.id);
    if (!grupo) {
      res.status(404).json({ error: 'Grupo no encontrado' });
    } else {
      await grupo.update(req.body);
      res.json(grupo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteGrupo = async (req, res) => {
  try {
    const grupo = await Grupo.findByPk(req.params.id);
    if (!grupo) {
      res.status(404).json({ error: 'Grupo no encontrado' });
    } else {
      await grupo.destroy();
      res.json({ message: 'Grupo eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getGrupo,
    createGrupo,
    getGrupoById,
    updateGrupo,
    deleteGrupo,
};