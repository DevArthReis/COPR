import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate(); // Usar useNavigate para redirecionamento

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, senha });
      localStorage.setItem('token', res.data.token);
      alert('Login bem-sucedido');
      navigate('/perfil'); // Redirecionar para a tela de perfil
    } catch (err) {
      alert('Erro ao fazer login');
    }
  };

  return (
    <div className="login">
      <div className="estoy">
        <h1>Login</h1>
        <form className="loko" onSubmit={handleSubmit}>
          <input placeholder="E-mail*" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha*" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <div className="button-container">
            <button type="submit">ENTRAR</button>
          </div>
          <agreement>
            <a className='link-privacidade' href="/registro">Não tem uma conta? Cadastra-se</a>
          </agreement>
        </form>
      </div>
    </div>
  );
}

export default Login;
