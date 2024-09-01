import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Container.js";
import "./Navbar.css";
import Logo from "../../img/pgComponentes/logo.png";
import Pessoa from "../../img/pgComponentes/pessoa.png";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <Container>
        <div className='navbar-links'>
          <Link to="/">
            <img src={Logo} alt="Logo" className='logo' />
          </Link>
          <ul className='list'>
            <li className='item'>
              <Link to="/SobreNos">Sobre Nós</Link>
            </li>
            <li className='item'>
              <Link to="/Vagas">Buscar Vagas</Link>
            </li>
            <li className='item'>
              <Link to="/PublicarVagas">Publicar Vagas</Link>
            </li>
            <li className='item'>
              <Link to="/Contato">Contato</Link>
            </li>
          </ul>
          <div className='profile-menu'>
            {isLoggedIn ? (
              <div className='loggedin-menu'>
                <img src={Pessoa} alt="Pessoa" className='pessoaImg' />
                <div className='dropdown-content'>
                  <Link to="/Perfil">Ver Perfil</Link>
                  <button onClick={handleLogout}>Sair</button>
                </div>
              </div>
            ) : (
              <Link to="/Login" className='pessoaLink'>
                <img src={Pessoa} alt="Pessoa" className='pessoaImg' />
              </Link>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
