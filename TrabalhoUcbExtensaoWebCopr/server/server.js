const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const jobRoutes = require('./routes/jobRoutes');
const loginRoutes = require('./routes/loginRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

// Serve static files from the "uploads" directory
app.use('/uploads', express.static('uploads'));

// Rotas
app.use('/api/jobs', jobRoutes);
app.use('/api/auth', loginRoutes); // Rotas de autenticação (login)
app.use('/api/users', userRoutes); // Rotas de usuários (registro e atualização)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
