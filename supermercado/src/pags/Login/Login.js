import './styles.css';
import Header from '../../compHome/header/Header'
import insta from '../../assets/insta.jpeg'
import wpp from '../../assets/wpp.jpeg'
import face from '../../assets/face.jpeg'
import {Link} from 'react-router-dom'
  
function Login() {
  return (
    <>
    <Header/>
    <div className="Login">
      <div className = "imgLeft">
      </div>
      <form>
        <div className = "formulario">
          <h2>Faça o login com a sua conta</h2>
          <input type = "email" placeholder = "E-mail" className = "inputLogin"/>
          <input type = "password" placeholder = "Senha" className = "inputLogin"/>
          <Link to="/home">
          <button className = "btn-login"><a>Continuar</a></button>
          </Link>
          <Link to="/cadastro">
          <div className = "cadastrar">Não tem cadastro?<a href = "/cadastro"> Clique Aqui!</a></div>
          </Link>
          <div className = "redes">
          <img src = {insta}/>
          <img src = {wpp}/>
          <img src = {face}/>
          </div>
          
        </div>
      </form>
    </div>
    </>
  );
}

export default Login;
