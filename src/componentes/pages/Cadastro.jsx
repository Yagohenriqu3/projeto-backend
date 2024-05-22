import './Login.css'
import { Link } from 'react-router-dom'

function Cadastro (){
    return(
        <div className="container--cadastro container--login">
        <div id="cadastro-form" className="content">
      <form method="post" action="" onsubmit="return validarSenha()" className="form"> 
        <h1 className="form-title">Cadastro</h1> 
         
        <p> 
          <label for="nome-cad" clasNames="form-label">Seu nome</label>
          <input id="nome-cad" name="nome-cad" required="required" type="text" placeholder="Seu Nome" className="form-input"/>
        </p>
         
        <p> 
          <label for="email-cad" className="form-label">Seu e-mail</label>
          <input id="email-cad" name="email-cad" required="required" type="email" placeholder="seuemail@hotmail.com" className="form-input"/> 
        </p>

        <p> 
          <label for="cpf-cad" className="form-label">Seu CPF</label>
          <input id="cpf-cad" name="cpf-cad" required="required" type="text" placeholder="CPF" className="form-input"/>
        </p>
         
        <p> 
          <label for="senha-cad" className="form-label">Sua senha</label>
          <input id="senha-cad" name="senha-cad" required="required" type="password" placeholder="ex. 1234" class="form-input"/>
        </p>

        <p> 
          <label for="confirmar-senha-cad" className="form-label">Confirme sua senha</label>
          <input id="confirmar-senha-cad" name="confirmar-senha-cad" required="required" type="password" placeholder="ex. 1234" className="form-input"/>
        </p>

        <p> 
          <label for="genero-cad" className="form-label">Gênero</label>
          <input id="genero-cad" name="genero-cad" required="required" type="text" placeholder="Cis, trans, não binário, etc.." class="form-input"/>
        </p>

        <p> 
          <label for="nome-mae-cad" className="form-label">Nome da Mãe</label>
          <input id="nome-mae-cad" name="nome-mae-cad" required="required" type="text" placeholder="Nome da Mãe" className="form-input"/>
        </p>

        <p> 
          <label for="cel-cad" className="form-label">Seu telefone</label>
          <input id="cel-cad" name="cel-cad" required="required" type="text" placeholder="DDD (XX) X-XXXXXXXX" className="form-input"/>
        </p>
        
        <p> 
          <input type="submit" value="Cadastrar" className="form-input"/> 
        </p>
         
        <p className="form-link">  
          Já tem conta?
          <Link to='/login'>Ir para login</Link>
        </p>
      </form>
    </div> 
        </div>
    )
}

export default Cadastro