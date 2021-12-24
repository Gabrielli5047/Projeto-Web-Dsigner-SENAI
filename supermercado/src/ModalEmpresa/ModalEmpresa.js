import './styles.css'

function ModalEmpresa({modalE, setModalE}){

  return (
    modalE &&
        <div className = "containerModalC">
        <div className = "modal">
          <header className = "cadHead" onClick = {()=> setModalE(false)}>
            <h2>Empresa</h2>
          </header>

          <section>
            <div className = "cad" >
              <label for="nome" >Nome da empresa</label>
              <input type="text" id="nome" name="nome" />
            </div>
            <div className = "cad" >
              <label for="email" >E-mail</label>
              <input type="text" id="email" name="email" />
            </div>
            <div className = "cad">
              <label for="emailC" >Confirme o E-mail</label>
              <input type="text" id="emailC" name="email" />
            </div>
            <div className = "cad">
              <label for="senha" >Senha</label>
              <input type="password" id="senha" name="email" />
            </div>
            <div className = "cad">
              <label for="senhaC" >Confirme a senha</label>
              <input type="password" id="senhaC" name="email" />
            </div>
            <nav>
              <h4>Confirma querer fazer a diferença com a gente??</h4>
              <div>
              <input type="checkbox" id="sim" name="sim" />
              <label for="sim" >Sim</label>
              <h4 for="sim" >Se sim, enviar: CNPJ e endereço.</h4>
              <input type="file" id="fileSim" name="fileSim"/>
            </div>
            <div>
              <input type="checkbox" id="nao" name="nao" onClick = {()=> setModalE(false)}/>
              <label for="nao" >Não, voltar a pagina de cadastro</label>
            </div>
            </nav>
          <button className = "btn-login"><a>Confirmar</a></button>
          </section>
        </div>
        </div>
      );
    }
    
    export default ModalEmpresa;
    

