const { Quiz } = require('../models');

const getQuiz = async (req, res) => {
  try {
    const quizz = await Quiz.findAll();
    res.json(quizz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.create(req.body);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    if (!quiz) {
      res.status(404).json({ error: 'Quiz no encontrado' });
    } else {
      res.json(quiz);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    if (!quiz) {
      res.status(404).json({ error: 'Quiz no encontrado' });
    } else {
      await quiz.update(req.body);
      res.json(grupo);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);
    if (!quiz) {
      res.status(404).json({ error: 'Quiz no encontrado' });
    } else {
      await quiz.destroy();
      res.json({ message: 'Quiz eliminado exitosamente' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getQuiz,
    createQuiz,
    getQuizById,
    updateQuiz,
    deleteQuiz,
};