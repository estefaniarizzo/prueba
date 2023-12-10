import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Bienvenida from './components/Inicio';
import Quiz from './components/quiz';
import ModulosList from './components/modulos';
import AlumnoForm from './components/alumno/AlumnoForm';
import AlumnosList from './components/alumno/AlumnosList';
import AlumnoDetalle from './components/alumno/AlumnoDetalle';
import AlumnoEdicion from './components/alumno/AlumnoEdicion';
import ModuloDetalle from './components/modulos/ModuloDetalle';
import ModuloEdicion from './components/modulos/ModuloEdicion';
import ModuloForm from './components/modulos/ModuloForm';
function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/inicio' element={<Bienvenida/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/modulos' element={<ModulosList/>}/>
      <Route path='/alumnos' element={<AlumnosList/>}/>
      <Route path='/alumno' element={<AlumnoForm/>}/>
      <Route path="/alumnos/:id" element={<AlumnoDetalle />} />
      <Route path="/alumnos/:id/editar" element={<AlumnoEdicion />} />
      <Route path='/modulos/:id' element={<ModuloDetalle />} />
      <Route path='/modulos/:id/editar' element={<ModuloEdicion />} />
      <Route path='/modulo' element={<ModuloForm />} />
      </Routes>
    </Router>
  );
}

export default App;
