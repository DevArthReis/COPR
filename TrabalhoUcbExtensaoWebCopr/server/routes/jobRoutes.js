const express = require('express');
const router = express.Router();
const db = require('../db/db');

// Rota para criar um novo trabalho
router.post('/', async (req, res) => {
  const { titulo, tipo, inicio, termino, salario, horario, requisitos, beneficios, localizacao, descricao, id_produtores } = req.body;

  console.log('Recebido:', req.body);

  const sqlCheckProducer = `SELECT * FROM Produtores WHERE id = ?`;
  const sqlInsertJob = `
    INSERT INTO Vagas (titulo, tipo, inicio, termino, salario, horario, requisitos, beneficios, localizacao, descricao, id_produtores) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    const [producer] = await db.query(sqlCheckProducer, [id_produtores]);
    if (producer.length === 0) {
      console.error('Produtor não encontrado:', id_produtores);
      return res.status(400).send('Produtor não encontrado');
    }

    const [result] = await db.query(sqlInsertJob, [titulo, tipo, inicio, termino, salario, horario, requisitos, beneficios, localizacao, descricao, id_produtores]);
    console.log('Vaga criada com sucesso:', result);
    res.status(201).send('Vaga criada com sucesso');
  } catch (err) {
    console.error('Erro ao inserir a vaga:', err);
    res.status(500).send('Erro ao publicar a vaga');
  }
});

module.exports = router;
