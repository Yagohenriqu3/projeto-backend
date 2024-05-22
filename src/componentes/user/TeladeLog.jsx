import React, { useState } from 'react';
import './TeladeLog.css'
import { Link } from 'react-router-dom'

const LogsTabela = () => {
  const [logsData, setLogsData] = useState([
    { id: 1, diaHora: '2024-05-20 14:30:00', nome: 'Alice Macedo', segundoFator: 'Nome da mãe' },
    { id: 2, diaHora: '2024-05-19 10:45:00', nome: 'Bob Wilson', segundoFator: 'Data de nascimento' },
    { id: 3, diaHora: '2024-05-18 08:20:00', nome: 'Charlie Jackson', segundoFator: 'Nome da mãe' },
    { id: 4, diaHora: '2024-05-17 16:50:00', nome: 'David Johnson', segundoFator: 'Nome da mãe' },
    { id: 5, diaHora: '2024-05-16 12:15:00', nome: 'Emma Smith', segundoFator: 'Data de nascimento' },
    { id: 6, diaHora: '2024-05-15 09:40:00', nome: 'Michael Williams', segundoFator: 'Nome da mãe' },
    { id: 7, diaHora: '2024-05-14 11:25:00', nome: 'Olivia Brown', segundoFator: 'Data de nascimento' },
    { id: 8, diaHora: '2024-05-13 15:35:00', nome: 'James Jones', segundoFator: 'Nome da mãe' },
    { id: 9, diaHora: '2024-05-12 07:55:00', nome: 'Sophia Miller', segundoFator: 'Data de nascimento' },
    { id: 10, diaHora: '2024-05-11 18:10:00', nome: 'Benjamin Davis', segundoFator: 'Nome da mãe' }
    
    // Adicione mais dados conforme necessário
  ]);
  const [filtro, setFiltro] = useState('todos');

  const handleChangeFiltro = (event) => {
    setFiltro(event.target.value);
  };

  const logsFiltrados = filtro === 'todos' ? logsData : logsData.filter(log => log.nome === filtro);

  return (
    <div className="logs-tabela container--usuario--global container--usuario--menu"> {/* Adicionando a classe logs-tabela */}
    <h2>Perfil administrador</h2>
    <div className='menu--navegacao--usuario'>
            <Link to='/usuario' className='button--usuario--menu'><button>Perfil</button></Link>
            <Link to='/usuario/buscarusuario' className='button--usuario--menu'><button>Consulta de cadastros</button></Link>
            <Link to='/usuario/telalog'  className='button--usuario--menu'><button>Tela de log</button></Link><Link to='/usuario/listarusuario'  className='button--usuario--menu'><button>Listar Usuários</button></Link>
        </div>

      <div className='container--usuario'>
        <label htmlFor="filtro">Filtrar por usuário:</label>
        <select id="filtro" value={filtro} onChange={handleChangeFiltro}>
          <option value="todos">Todos</option>
          <option value="Alice Macedo">Alice Macedo</option>
          <option value="Bob Wilson">Bob Wilson</option>
          <option value="Charlie Jackson">Charlie Jackson</option>
          <option value="David Johnson">David Johnson</option>
          <option value="Emma Smith">Emma Smith</option>
          <option value="Michael Wiliams">Michael Wiliams</option>
          <option value="Olivia Brown">Olivia Brown</option>
          <option value="James Jones">James Jones</option>
          <option value="Sophia Miller">Sophia Miller</option>
          <option value="Benjamin Davis">Benjamin Davis</option>
          
          {/* Adicione mais opções conforme necessário */}
        </select>
        <table className='teladelog-tabela'>
          <thead>
            <tr>
              <th>Dia e Hora</th>
              <th>Nome</th>
              <th>Segundo Fator de Autenticação</th>
            </tr>
          </thead>
          <tbody>
            {logsFiltrados.map(log => (
              <tr key={log.id}>
                <td>{log.diaHora}</td>
                <td>{log.nome}</td>
                <td>{log.segundoFator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LogsTabela;
