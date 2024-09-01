import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/Contato';
import Home from './pages/home/Home';
import PublicarVagas from './pages/publicarVagas/PublicarVagas';
import SobreNos from './pages/sobre/SobreNos';
import Vagas from './pages/buscarVagas/Vagas';
import Perfil from './pages/perfil/Perfil';
import Login from './pages/login/Login';
import Registro from './pages/registro/Registro';
import Container from '../src/components/container/Container';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/publicarvagas" element={<PublicarVagas />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
