import './styles.css'

function ModalVoluntario({modalV, setModalV}){

  return (
        <div className = "containerModalC">
        <div className = "modal">
          <header className = "cadHead"  onClick = {()=> setModalV(false)}>
            <h2>Voluntário</h2>
          </header>

          <section>
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
              <h4>Confirma querer fazer o bem sem olhar a quem??</h4>
              <div>
              <input type="checkbox" id="sim" name="sim" />
              <label for="sim" >Sim</label>
              <h4 for="sim" >Se sim, enviar: RG, CPF e endereço.</h4>
              <input type="file" id="fileSim" name="fileSim"/>
            </div>
            <div>
              <input type="checkbox" id="nao" name="nao"  onClick = {()=> setModalV(false)}/>
              <label for="nao" >Não, voltar para tela de Cadastro</label>
            </div>
            </nav>
          <button className = "btn-login"><a>Confirmar</a></button>
          </section>
        </div>
        </div>
      );
    }
    
    export default ModalVoluntario;
    

