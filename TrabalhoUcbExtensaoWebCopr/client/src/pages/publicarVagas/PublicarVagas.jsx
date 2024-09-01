import React, { useState } from 'react';
import axios from 'axios';
import './PublicarVagas.css'; 

function PublicarVagas() {
  const [formData, setFormData] = useState({
    titulo: '',
    tipo: '',
    inicio: '',
    termino: '',
    salario: '',
    horario: '',
    requisitos: '',
    beneficios: '',
    localizacao: '',
    descricao: '',
    id_produtores: 1 // Assumindo um ID de produtor fixo por enquanto
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', formData);
      if (response.status === 201) {
        alert('Vaga publicada com sucesso!');
      } else {
        alert('Erro ao publicar a vaga.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao publicar a vaga.');
    }
  };

  return (
    <div className="publicarvagas">
      <div className="card">
        <div className="left">
          <h1>Publique Sua Vaga</h1>
          <br/>
          <br/>
          <hr/>
          <p>
            Conecte-se com trabalhadores qualificados de forma rápida e
            eficiente, <br />
            publicando sua vaga na plataforma COPR!  
          </p>
        </div>
        <div className="right">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Título da Vaga:</label>
              <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Tipo de Trabalho:</label>
              <input type="text" name="tipo" value={formData.tipo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Data de Início:</label>
              <input type="date" name="inicio" value={formData.inicio} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Data de Término:</label>
              <input type="date" name="termino" value={formData.termino} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Salário:</label>
              <input type="text" name="salario" value={formData.salario} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Horário de Trabalho:</label>
              <input type="text" name="horario" value={formData.horario} onChange={handleChange} />
            </div>          
            <div className="form-group">
              <label>Requisitos:</label>
              <input type="text" name="requisitos" value={formData.requisitos} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Benefícios:</label>
              <input type="text" name="beneficios" value={formData.beneficios} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Localização:</label>
              <input type="text" name="localizacao" value={formData.localizacao} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Descrição da Vaga:</label>
              <input type="text" name="descricao" value={formData.descricao} onChange={handleChange} />
            </div>
            <button type="submit">Publicar Vaga</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PublicarVagas;
