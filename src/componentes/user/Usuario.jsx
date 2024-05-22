import React from 'react'
import './Usuario.css'
import { Link } from 'react-router-dom'

export default function Usuario() {
  return (
    <div className='container--usuario--global'>
    <div className='container--usuario--menu'>
        <h2>Perfil administrador</h2>
        <div className='menu--navegacao--usuario'>
            <Link to='/usuario' className='button--usuario--menu'><button>Perfil</button></Link>
            <Link to='/usuario/buscarusuario' className='button--usuario--menu'><button>Consulta de cadastros</button></Link>
            <Link to='/usuario/telalog'  className='button--usuario--menu'><button>Tela de log</button></Link><Link to='/usuario/listarusuario'  className='button--usuario--menu'><button>Listar Usuários</button></Link>
        </div>
    </div>
        <div className='container--usuario'>
    <div className="header">
      <h1>Meus dados</h1>
      <p>Confira e atualize seus dados para que você não fique de fora do seu futuro certo.</p>
    </div>
    <div class="profile-section">
      <h2>Dados pessoais</h2>
      <div class="form-group">
        <img src="https://via.placeholder.com/100" alt="Foto de Perfil"/>
        
      </div>
      <div class="form-group">
        <label for="nome">Nome completo</label>
        <input type="text" id="nome" name="nome"/>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" placeholder="Ex: 000.000.000-00"/>
        </div>
        <div class="form-group">
          <label for="rg">RG</label>
          <input type="text" id="rg" name="rg" placeholder="Ex: 12345678901"/>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label for="nome-mae">Nome da mãe</label>
          <input type="text" id="nome-mae" name="nome-mae" placeholder="Ex: Maria do Nascimento"/>
        </div>
        <div class="form-group">
          <label for="nascimento">Data de nascimento</label>
          <input type="text" id="nascimento" name="nascimento" placeholder="Ex: 24/02/1995"/>
        </div>
      </div>
    </div>
    <div class="profile-section">
      <h2>Informações de contato</h2>
      <div class="form-row">
        <div class="form-group">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" placeholder="Ex: futurocerto@gmail.com"/>
        </div>
        <div class="form-group">
          <label for="celular">Celular</label>
          <input type="text" id="celular" name="celular" placeholder="Ex.: (21) 90000-0000"/>
        </div>
      </div>
    </div>
    <Link to='/login' className="button">Logout</Link>
  </div>
    </div>
  )
}
