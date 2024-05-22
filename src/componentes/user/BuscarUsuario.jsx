import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './BuscarUsuario.css'
import { FaTimes } from 'react-icons/fa'

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 2, name: 'Bob Wilson', role: 'master' },
    { id: 1, name: 'Alice Macedo', role: 'comum' },
    { id: 3, name: 'Benjamin Davis', role: 'comum' },
    { id: 4, name: 'Charlie Jackson', role: 'comum' },
    { id: 5, name: 'David Johnson', role: 'comum' },
    { id: 6, name: 'Emma Smith', role: 'comum' },
    { id: 7, name: 'Michael Williams', role: 'comum' },
    { id: 8, name: 'Olivia Brown', role: 'comum' },
    { id: 9, name: 'James Jones', role: 'comum' },
    { id: 10, name: 'Sophia Miller', role: 'comum' }
  ]);

  const deleteUser = (id) => {
    if (users.find(user => user.id === id).role !== 'master') {
      alert('Somente o usuário master pode excluir outros usuários.');
      return;
    }

    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <div className=' container--usuario--global container--usuario--menu'>
    <h2>Perfil administrador</h2>
    <div className='menu--navegacao--usuario'>
            <Link to='/usuario' className='button--usuario--menu'><button>Perfil</button></Link>
            <Link to='/usuario/buscarusuario' className='button--usuario--menu'><button>Consulta de cadastros</button></Link>
            <Link to='/usuario/telalog'  className='button--usuario--menu'><button>Tela de log</button></Link><Link to='/usuario/listarusuario'  className='button--usuario--menu'><button>Listar Usuários</button></Link>
        </div>
      <div className='container--usuario listaDeUsuario'>
        <h1>Lista de Usuários</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.role === 'comum' && (
                <button  className='listaDeUsuario--button'
                onClick={() => deleteUser(user.id)}><FaTimes className='listaDeUsuario--icon--deletar' /></button>
              )}
              {user.name} - {user.role === 'master' ? 'Master' : 'Comum'}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;

