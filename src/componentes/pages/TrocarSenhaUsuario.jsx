import './Login.css';
import { Link } from 'react-router-dom'


function TrocarSenhaUsuario() {
  return (
    
<div className='container--login'>
<form method="post" action="" class="form"> 
        <h1 className="form-title">Recuperar senha</h1> 
        <p> 
          <label for="nome-login" className="form-label">Nova senha</label>
          <input id="nome-login" name="nome-login" required="required" type="password" placeholder="Nova senha" className="form-input"/>
        </p>
         
        <p> 
          <label for="email-login" className="form-label">Repita a senha</label>
          <input id="email-login" name="email-login" required="required" type="password" placeholder="Repita sua senha" className="form-input"/> 
        </p>
         
        
         
        <p> 
          <Link to='/usuario'><button className="form-input"type='submit'>Enviar</button></Link>
        </p>
         
        <p className="form-link">
          Ainda não tem conta?
          <Link to='/login/cadastro'> Cadastre-se</Link>
          
        </p>
        <p className="form-link">
          Ir para: 
          <Link to='/login'> Login</Link>
          
        </p>
        
      </form>
</div>

  

  )
}

export default TrocarSenhaUsuario;
