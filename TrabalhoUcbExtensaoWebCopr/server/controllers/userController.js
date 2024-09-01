const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

exports.register = async (req, res) => {
  const { nome, sobrenome, email, senha, tipo } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(senha, 10);
    const newUser = { nome, sobrenome, email, senha: hashedPassword, tipo };
    await User.create(newUser);
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findByEmail(email);
    if (!user) return res.status(401).json({ error: 'Usuário não encontrado' });

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) return res.status(401).json({ error: 'Senha incorreta' });

    const token = jwt.sign({ id: user.id, tipo: user.tipo }, 'your_jwt_secret', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getUser = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  const userId = req.user.id;
  const { nome, sobrenome, email, telefone, senha } = req.body;
  const updateData = { nome, sobrenome, email, telefone };

  try {
    if (senha) {
      const hashedPassword = await bcrypt.hash(senha, 10);
      updateData.senha = hashedPassword;
    }
    await User.update(userId, updateData);
    res.json({ message: 'User updated successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
