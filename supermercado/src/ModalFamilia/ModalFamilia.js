import './styles.css'


function ModalFamilia({modalF, setModalF}){

  return (
    modalF &&
        <div className = "containerModalC" >
        <div className = "modal">
          <header className = "cadHead" onClick = {()=> setModalF(false)}>
            <h2>Familia carente</h2>
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
              <h4>Você confirma estar em situação de vulnerabilidade?</h4>
              <div>
              <input type="checkbox" id="sim" name="sim" />
              <label for="sim" >Sim</label>
              <h4 for="sim" >Se sim, enviar: RG, CPF, Comprovante de renda e endereço.</h4>
              <input type="file" id="fileSim" name="fileSim"/>
            </div>
            <div>
              <input type="checkbox" id="nao" name="nao" />
              <label for="nao" onClick = {()=> setModalF(false)}>Não</label>
            </div>
            </nav>
          <button className = "btn-login"><a>Confirmar</a></button>
          </section>
        </div>
        </div>
      );
    }
    
    export default ModalFamilia;
    

