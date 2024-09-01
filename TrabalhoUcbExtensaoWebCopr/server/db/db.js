const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "copr",
});

module.exports = db;


// const express = require("express");
// const app = express();
// const mysql = require('mysql2');//isso pegara a versão mais atual do mysql que instalamos
// const cors = require("cors")

// const db = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"Ana81149073@.",
//     database:"copr",

// })

// app.use(cors());
// app.use(express.json());

// app.post("/register",(req, res)=>{
//    const {tiulo} = req.body;
//    const {descrisao} = req.body;

//    let SQL = "INSERT INTO vagas(tiulo,descrisao) VALUES (?,?)";

//    db.query(SQL,[tiulo,descrisao],(err, result)=>{
//         console.log(err);

//    })
// });
// app.get("/listar", (req, res) => {
//     let SQL = "SELECT * FROM vagas";

//     db.query(SQL, (err, result) => {
//         if (err) {
//             console.error(err);
//             res.status(500).json({ error: "Erro ao listar vagas" });
//         } else {
//             res.json(result); // Enviar os dados dos vagas como resposta
//         }
//     });
// });
// app.delete("/excluir/:id", (req, res) => {
//     const alunoId = req.params.id;
  
//     // Execute uma consulta SQL para excluir o aluno com base no ID
//     const SQL = "DELETE FROM vagas WHERE id = ?";
//     db.query(SQL, [alunoId], (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: "Erro ao excluir aluno" });
//       } else {
//         res.json({ message: "Aluno excluído com sucesso" });
//       }
//     });
//   });
//   app.put("/editar/:id", (req, res) => {
//     const alunoId = req.params.id;
//     const { tiulo, descrisao } = req.body;
  
//     // Execute uma consulta SQL para atualizar os dados do aluno com base no ID
//     const SQL = "UPDATE vagas SET tiulo = ?, descrisao = ? WHERE id = ?";
//     db.query(SQL, [tiulo, descrisao, alunoId], (err, result) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: "Erro ao editar aluno" });
//       } else {
//         res.json({ message: "Aluno editado com sucesso" });
//       }
//     });
//   });  
// app.listen(3001,()=>{
//     console.log("rodando servidor");
// });
