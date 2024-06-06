import mysql from 'mysql';

const conexao = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'futurocerto'
});

conexao.connect((err) => {
  if (err) throw err;
  console.log('Conexão feita com sucesso!');
});

export default conexao;
