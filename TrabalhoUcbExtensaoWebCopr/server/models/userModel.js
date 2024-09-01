const db = require('../db/db');

const User = {
  create: async (data) => {
    const sql = 'INSERT INTO users (nome, sobrenome, email, senha, tipo) VALUES (?, ?, ?, ?, ?)';
    const [result] = await db.query(sql, [data.nome, data.sobrenome, data.email, data.senha, data.tipo]);
    return result;
  },

  findByEmail: async (email) => {
    const sql = 'SELECT * FROM users WHERE email = ?';
    const [result] = await db.query(sql, [email]);
    return result[0];
  },

  findById: async (id) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    const [result] = await db.query(sql, [id]);
    return result[0];
  },

  update: async (id, data) => {
    let sql = 'UPDATE users SET nome = ?, sobrenome = ?, email = ?';
    const params = [data.nome, data.sobrenome, data.email];
    if (data.senha) {
      sql += ', senha = ? WHERE id = ?';
      params.push(data.senha, id);
    } else {
      sql += ' WHERE id = ?';
      params.push(id);
    }
    const [result] = await db.query(sql, params);
    return result;
  }
};

module.exports = User;
