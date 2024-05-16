function Cadastro (){
    return(
        <>
            <div className="module" id="cadastro">
        <form method="post" action="">
          <h1 className="module-title">Cadastro</h1>
  
          <p className="module-input">
            <label htmlFor="nome_cad">Seu nome</label>
            <input id="nome_cad" name="nome_cad" required="required" type="text" placeholder="Seu Nome" />
          </p>
  
          <p className="module-input">
            <label htmlFor="email_cad">Seu e-mail</label>
            <input id="email_cad" name="email_cad" required="required" type="email" placeholder="seuemail@hotmail.com" />
          </p>
  
          <p className="module-input">
            <label htmlFor="cpf_cad">Seu CPF</label>
            <input id="cpf_cad" name="cpf_cad" required="required" type="text" placeholder="CPF" />
          </p>
  
          <p className="module-input">
            <label htmlFor="senha_cad">Sua senha</label>
            <input id="senha_cad" name="senha_cad" required="required" type="password" placeholder="ex. 1234" />
          </p>
  
          <p className="module-input">
            <label htmlFor="confirmarsenha_cad">Confirme sua senha</label>
            <input id="confirmarsenha_cad" name="confirmarsenha_cad" required="required" type="password" placeholder="ex. 1234" />
          </p>
  
          <p className="module-input">
            <label htmlFor="genero_cad">Gênero</label>
            <input id="genero_cad" name="genero_cad" required="required" type="text" placeholder="Cis, trans, não binário, etc.." />
          </p>
  
          <p className="module-input">
            <label htmlFor="nomemae_cad">Nome da Mãe</label>
            <input id="nomemae_cad" name="nomemae_cad" required="required" type="text" placeholder="Nome da Mãe" />
          </p>
  
          <p className="module-input">
            <label htmlFor="cel_cad">Seu nome</label>
            <input id="cel_cad" name="cel_cad" required="required" type="text" placeholder="DDD (XX) X-XXXXXXXX" />
          </p>
  
          <p className="module-input">
            <input type="submit" value="Cadastrar" />
          </p>
  
          <p className="module-link">
            Já tem conta?
            <a href="#paralogin">Ir para Login</a>
          </p>
        </form>
      </div>
        </>
    )
}

export default Cadastro