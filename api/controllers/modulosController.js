const { Modulo } = require('../models');

const getModulo = async (req, res) => {
  try {
    const modulos = await Modulo.findAll();
    res.json(modulos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createModulo = async (req, res) => {
  try {
    const modulo = await Modulo.create(req.body);
    res.json(modulo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getModuloById = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) {
      res.status(404).json({ error: 'Modulo no encontrado' });
    } else {
      res.json(modulo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateModulo = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) {
      res.status(404).json({ error: 'Modulo no encontrado' });
    } else {
      await modulo.update(req.body);
      res.json(modulo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteModulo = async (req, res) => {
  try {
    const modulo = await Modulo.findByPk(req.params.id);
    if (!modulo) {
      res.status(404).json({ error: 'Modulo no encontrado' });
    } else {
      await modulo.destroy();
      res.json({ message: 'Modulo eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getModulo,
    createModulo,
    getModuloById,
    updateModulo,
    deleteModulo,
};