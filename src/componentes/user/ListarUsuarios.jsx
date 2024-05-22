import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListarUsuario.css';

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Macedo', role: 'comum' },
    { id: 2, name: 'Bob Wilson', role: 'master' },
    { id: 3, name: 'Charlie Jackson', role: 'comum' },
    { id: 4, name: 'David Johnson', role: 'comum' },
  { id: 5, name: 'Emma Smith', role: 'comum' },
  { id: 6, name: 'Michael Williams', role: 'comum' },
  { id: 7, name: 'Olivia Brown', role: 'comum' },
  { id: 8, name: 'James Jones', role: 'comum' },
  { id: 9, name: 'Sophia Miller', role: 'comum' },
  { id: 10, name: 'Benjamin Davis', role: 'comum' },
  { id: 11, name: 'Isabella Wilson', role: 'comum' },
  { id: 12, name: 'William Anderson', role: 'comum' },
  { id: 13, name: 'Ava Martinez', role: 'comum' }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular a busca de usuários aqui
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setUsers(filteredUsers);
  };

  return (
    <div className='container--usuario--global container--usuario--menu '>
      <h2>Perfil administrador</h2>
      <div className='menu--navegacao--usuario'>
        <Link to='/usuario' className='button--usuario--menu'><button>Perfil</button></Link>
        <Link to='/usuario/buscarusuario' className='button--usuario--menu'><button>Consulta de cadastros</button></Link>
        <Link to='/usuario/telalog' className='button--usuario--menu'><button>Tela de log</button></Link>
        <Link to='/usuario/listarusuario' className='button--usuario--menu'><button>Listar Usuários</button></Link>
      </div>
      <div className='container--usuario-listarusuario'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Pesquisar por nome"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button type="submit">Pesquisar</button>
        </form>
        <table className='table--usuarios table--usuarios-listarusuario'>
  <thead>
    <tr className='thead--listarusuario'>
      <th className='th--listarusuario'>ID</th>
      <th className='th--listarusuario'>Nome</th>
      <th className='th--listarusuario'>Papel</th>
    </tr>
  </thead>
  <tbody className='tbody--listarusuario'>
    {users.map((user) => (
      <tr key={user.id} className='tr--listarusuario'>
        <td className='td--listarusuario'>{user.id}</td>
        <td className='td--listarusuario'>{user.name}</td>
        <td className='td--listarusuario'>{user.role === 'master' ? 'Master' : 'Comum'}</td>
      </tr>
    ))}
  </tbody>
</table>

      </div>
    </div>
  );
};

export default UserList;
