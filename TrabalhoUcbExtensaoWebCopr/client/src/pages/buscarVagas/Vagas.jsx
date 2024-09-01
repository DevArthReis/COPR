import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ListaVagas() {
  // Defina o estado para armazenar a lista de vagas.
  const [vagas, setVagas] = useState([]);
  
  // Adicione o estado 'editingVaga' para rastrear a vaga atualmente em edição.
  const [editingVaga, setEditingVaga] = useState(null);

  // Adicione o estado 'editedData' para rastrear os dados editados.
  const [editedData, setEditedData] = useState({ titulo: '', descricao: '' });

  // Use o useEffect para fazer uma solicitação GET e obter a lista de vagas.
  useEffect(() => {
    Axios.get("http://localhost:3001/listar")
      .then((response) => {
        setVagas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Função para lidar com a exclusão de uma vaga.
  const handleExcluirVaga = (vagaId) => {
    Axios.delete(`http://localhost:3001/excluir/${vagaId}`)
      .then((response) => {
        // Atualize a lista de vagas após a exclusão bem-sucedida.
        setVagas((prevVagas) => prevVagas.filter((vaga) => vaga.id !== vagaId));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Função para lidar com o clique no botão "Editar".
  const handleEditClick = (vaga) => {
    // Defina a vaga atualmente em edição e seus dados atuais.
    setEditingVaga(vaga);
    setEditedData({ titulo: vaga.titulo, descricao: vaga.descricao });
  };

  // Função para lidar com o clique no botão "Salvar".
  const handleSaveClick = () => {
    // Envie uma solicitação PUT para a rota de edição com os novos dados.
    Axios.put(`http://localhost:3001/editar/${editingVaga.id}`, editedData)
      .then((response) => {
        console.log(response.data);
        // Atualize a lista de vagas após a edição bem-sucedida.
        setVagas((prevVagas) =>
          prevVagas.map((vaga) =>
            vaga.id === editingVaga.id ? { ...vaga, ...editedData } : vaga
          )
        );
        // Limpe os estados de edição.
        setEditingVaga(null);
        setEditedData({ titulo: '', descricao: '' });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Renderize a lista de vagas e os botões de edição/exclusão.
  return (
    <div className="mt-4">
      <h2>Lista de Vagas de Emprego</h2>
      <ul className="list-group">
        {vagas.map((vaga, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
            <div>
              <strong>Título:</strong> {vaga.titulo}
              <br />
              <strong>Descrição:</strong> {vaga.descricao}
            </div>
            {editingVaga && editingVaga.id === vaga.id ? (
              // Renderize os campos de edição quando a vaga estiver em edição.
              <div>
                <input
                  type="text"
                  value={editedData.titulo}
                  onChange={(e) => setEditedData({ ...editedData, titulo: e.target.value })}
                />
                <input
                  type="text"
                  value={editedData.descricao}
                  onChange={(e) => setEditedData({ ...editedData, descricao: e.target.value })}
                />
                <button className="btn btn-success btn-sm" onClick={handleSaveClick}>
                  Salvar
                </button>
              </div>
            ) : (
              // Renderize os botões de edição/exclusão quando a vaga não estiver em edição.
              <div>
                <button className="btn btn-primary btn-sm" onClick={() => handleEditClick(vaga)}>
                  Editar
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => handleExcluirVaga(vaga.id)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaVagas;
