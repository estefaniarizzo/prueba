const { Permiso } = require('../models');

const getPermiso = async (req, res) => {
  try {
    const permisos = await Permiso.findAll();
    res.json(permisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createPermiso = async (req, res) => {
  try {
    const permisos = await Permiso.create(req.body);
    res.json(permisos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPermisoById = async (req, res) => {
  try {
    const permisos = await Permiso.findByPk(req.params.id);
    if (!permisos) {
      res.status(404).json({ error: 'Permiso no encontrado' });
    } else {
      res.json(permisos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePermiso = async (req, res) => {
  try {
    const permisos = await Permiso.findByPk(req.params.id);
    if (!permisos) {
      res.status(404).json({ error: 'Permiso no encontrado' });
    } else {
      await permisos.update(req.body);
      res.json(permisos);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePermiso = async (req, res) => {
  try {
    const permiso = await Permiso.findByPk(req.params.id);
    if (!permiso) {
      res.status(404).json({ error: 'Permiso no encontrado' });
    } else {
      await permiso.destroy();
      res.json({ message: 'Permiso eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getPermiso,
    createPermiso,
    getPermisoById,
    updatePermiso,
    deletePermiso,
};