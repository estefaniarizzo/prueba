const { Administrador } = require('../models');

const getAdministrador = async (req, res) => {
  try {
    const administradors = await Administrador.findAll();
    res.json(administradors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createAdministrador = async (req, res) => {
  try {
    const administrador = await Administrador.create(req.body);
    res.json(administrador);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAdministradorById = async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) {
      res.status(404).json({ error: 'Admin no encontrado' });
    } else {
      res.json(administrador);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateAdministrador = async (req, res) => {
  try {
    const administrador = await Alumno.findByPk(req.params.id);
    if (!administrador) {
      res.status(404).json({ error: 'admin no encontrado' });
    } else {
      await administrador.update(req.body);
      res.json(administrador);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAdministrador = async (req, res) => {
  try {
    const administrador = await Administrador.findByPk(req.params.id);
    if (!administrador) {
      res.status(404).json({ error: 'Admin no encontrado' });
    } else {
      await administrador.destroy();
      res.json({ message: 'Admin eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getAdministrador,
    createAdministrador,
    getAdministradorById,
    updateAdministrador,
    deleteAdministrador,
};
