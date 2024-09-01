import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registro.css';

function Register() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [tipo, setTipo] = useState('trabalhador');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (senha !== confSenha) {
      return alert('As senhas não coincidem');
    }
    try {
      await axios.post('http://localhost:5000/api/users/register', { nome, sobrenome, email, senha, tipo });
      alert('Registro bem-sucedido');
      navigate('/login'); 
    } catch (err) {
      alert('Erro ao registrar');
    }
  };

  return (
    <div className="registro">
      <div className="envoltura">
        <h1>Cadastrar-se</h1>
        <form onSubmit={handleSubmit}>
          <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
          <input placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
          <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
          <input type="password" placeholder="Confirme sua senha" value={confSenha} onChange={(e) => setConfSenha(e.target.value)} />
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="trabalhador">Trabalhador</option>
            <option value="produtor">Produtor</option>
          </select>
          <agreement>
            já é membro? faça o <a className='link-privacidade' href="/login">Login</a>
          </agreement>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
