import express from 'express';
import cors from 'cors';
import conexao from './db.js';

const app = express();
const PORT = 3001;

app.use(cors())
app.use(express.json());

//endpoint para obter dados da tabela
app.get('./api/futurocerto_usuario', (req, res) => {
  const sql = 'SELECT * FROM futurocerto_usuario';

  conexao.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
    });

});

app.listen(PORT, () => {
  console.log (`Server rodando na porta ${PORT} `);
  console.log (`consulta ${results}`)
});