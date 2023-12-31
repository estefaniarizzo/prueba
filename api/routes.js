const express = require('express');
const router = express.Router();
const cursoController = require('./controllers/cursoController');
const alumnoController = require('./controllers/alumnoController');
const administradorController = require('./controllers/administradorController');
const calificacionController = require('./controllers/calificacionController');
const grupoController = require('./controllers/grupoController');
const modulosController = require('./controllers/modulosController');
const permisosController = require('./controllers/permisosController');
const quizController = require('./controllers/quizController');
// Rutas para Curso
router.get('/cursos', cursoController.getCursos);
router.post('/cursos', cursoController.createCurso);
router.get('/cursos/:id', cursoController.getCursoById);
router.put('/cursos/:id', cursoController.updateCurso);
router.delete('/cursos/:id', cursoController.deleteCurso);
// Rutas para Alumno
router.get('/alumnos', alumnoController.getAlumnos);
router.post('/alumnos', alumnoController.createAlumno);
router.get('/alumnos/:id', alumnoController.getAlumnoById);
router.put('/alumnos/:id', alumnoController.updateAlumno);
router.delete('/alumnos/:id', alumnoController.deleteAlumno);
//Rutas para Administrador
router.get('/admins', administradorController.getAdministrador);
router.post('/admins', administradorController.createAdministrador);
router.get('/admins/:id', administradorController.getAdministradorById);
router.put('/admins/:id', administradorController.updateAdministrador);
router.delete('/admins/:id', administradorController.deleteAdministrador);
//Rutas para Calificacion
router.get('/nota', calificacionController.getNotas);
router.get('/nota/alumno/:id', calificacionController.getNotasPorAlumno);
router.post('/nota', calificacionController.createNota);
router.get('/nota/:id', calificacionController.getNotaById);
router.put('/nota/:id', calificacionController.updateNota);
router.delete('/nota/:id', calificacionController.deleteNota);
router.get('/nota/fecha', calificacionController.getNotasPorGrupoPorFecha);
//Rutas para Grupo
router.get('/grupo', grupoController. getGrupo);
router.post('/grupo', grupoController.createGrupo);
router.get('/grupo/:id', grupoController.getGrupoById);
router.put('/grupo/:id', grupoController.updateGrupo);
router.delete('/grupo/:id', grupoController.deleteGrupo);
//Rutas para Modulos
router.get('/modulo', modulosController. getModulo);
router.post('/modulo', modulosController.createModulo);
router.get('/modulo/:id', modulosController.getModuloById);
router.put('/modulo/:id', modulosController.updateModulo);
router.delete('/modulo/:id', modulosController.deleteModulo);
router.get('/modulopromedio', modulosController. getMejoresPeoresModulos);
//Rutas para Permisos
router.get('/permisos', permisosController. getPermiso);
router.post('/permisos', permisosController.createPermiso);
router.get('/permisos/:id', permisosController.getPermisoById);
router.put('/permisos/:id', permisosController.updatePermiso);
router.delete('/permisos/:id', permisosController.deletePermiso);
//Rutas para Quiz
router.get('/quiz', quizController.getExamenes);
router.post('/quiz', quizController.createExamen);
router.get('/quiz/:id', quizController.getExamenById);
router.put('/quiz/:id', quizController.updateExamen);
router.delete('/quiz/:id', quizController.deleteExamen);
router.get('/quizpendiente', quizController.getExamenesNoRespondidosPorAlumno);
module.exports = router;
