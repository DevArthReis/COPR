import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Perfil.css';

function Perfil() {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    senha: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        const res = await axios.get('http://localhost:5000/api/users/me', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(res.data);
        setFormData({
          nome: res.data.nome,
          sobrenome: res.data.sobrenome,
          email: res.data.email,
          senha: ''
        });
      } catch (err) {
        console.error('Error fetching user data:', err);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.put('http://localhost:5000/api/users/me', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert('Informações atualizadas com sucesso!');
      setEditMode(false);
    } catch (err) {
      console.error('Error updating user data:', err);
      alert('Erro ao atualizar informações');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="perfil-container">
      <h1>Perfil do Usuário</h1>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} />
          </label>
          <label>
            Sobrenome:
            <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            Nova Senha:
            <input type="password" name="senha" value={formData.senha} onChange={handleChange} />
          </label>
          <button type="submit">Salvar</button>
          <button type="button" onClick={() => setEditMode(false)}>Cancelar</button>
        </form>
      ) : (
        <div>
          <p>Nome: {user.nome}</p>
          <p>Sobrenome: {user.sobrenome}</p>
          <p>Email: {user.email}</p>
          <button onClick={() => setEditMode(true)}>Editar</button>
        </div>
      )}
    </div>
  );
}

export default Perfil;
