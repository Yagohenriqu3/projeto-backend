import './Login.css';
import { Link } from 'react-router-dom'


function Autenticacao2FA() {
  return (
    
<div className='container--login'>
<form method="post" action="" class="form"> 
        <h1 className="form-title">Autenticação 2 fatores</h1> 
        <p> 
          <label for="nome-login" className="form-label">Nome da mãe</label>
          <input id="nome-login" name="nome-login" required="required" type="text" placeholder="Nome" className="form-input"/>
        </p>
         <h2>
          ou
         </h2>
        <p> 
          <label for="email-login" className="form-label">Data de nascimento</label>
          <input id="email-login" name="email-login" required="required" type="date" placeholder="Digite sua senha" className="form-input"/> 
        </p>
         
        
         
        <p> 
          <Link to='/usuario'><button className="form-input"type='submit'>Confirmar</button></Link>
        </p>
         
        <p className="form-link">
          Ainda não tem conta?
          <Link to='/login/cadastro'>Cadastre-se</Link>
        </p> <p className="form-link">
          Esqueceu a senha?
          <Link to='/login/trocarsenhausuario'> Recuperar senha</Link>
        </p>
      </form>
</div>

  

  )
}

export default Autenticacao2FA;
