import './Login.css';
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="container-login">
        
        <form method="post" action="">
          <h1>Login</h1>
            <div className='input-login'>
              <input  name="nome_login" required="required" type="text" placeholder="Usuário" />
            </div>
            
            <div className='input-login'>
              <input name="email_login" required="required" type="password" placeholder="Senha" />
            </div>
            
            <div className='input-login'>
              <label htmlFor="manterlogado">
              <input type="checkbox" name="manterlogado"  value="" />
               Manter-me logado</label>
            </div>

            <div className='button-login'>
            <input type="submit" value="Entrar" />
            
            </div>

          <div className='cadastro-login'>
            <p>
              Ainda não tem conta?
              <Link to='/cadastro'> Cadastre-se</Link>
            </p>
          </div>
        </form>
  </div>
  

  );
}

export default Login;
