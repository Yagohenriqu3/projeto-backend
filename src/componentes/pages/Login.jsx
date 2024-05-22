import './Login.css';
import { Link } from 'react-router-dom'


function Login() {
  return (
    
<div className='container--login'>
<form method="post" action="" class="form"> 
        <h1 className="form-title">Login</h1> 
        <p> 
          <label for="nome-login" className="form-label">Seu nome</label>
          <input id="nome-login" name="nome-login" required="required" type="text" placeholder="Digite seu nome" className="form-input"/>
        </p>
         
        <p> 
          <label for="email-login" className="form-label">Seu e-mail</label>
          <input id="email-login" name="email-login" required="required" type="password" placeholder="Digite sua senha" className="form-input"/> 
        </p>
         
        <p> 
          <input type="checkbox" name="manter-logado" id="manter-logado" value="" className="form-input"/> 
          <label for="manter-logado" className="form-label">Manter-me logado</label>
        </p>
         
        <p> 
          <Link to='/login/autenticacao2fa'><button className="form-input"type='submit'>Entrar</button></Link>
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

export default Login;
