import './styles.css'
import carrinho from'../../assets/carrinho.jpeg'
import login from'../../assets/login.jpeg'
import ModalDepart from '../modalDepartamento/ModalDep';
import ModalSobre from '../modalSobre/ModalSobre';
import { useState } from 'react';
import {NavLink} from 'react-router-dom'

function Header() {
    const [modalDep, setModalDep] = useState(false);
    const [modalSob, setModalSob] = useState(false);

    return (
      <div className = "containerH">
         <div className="header">
        <h1 className = "h1">Super Solidário</h1>
        <input placeholder = "Buscar produtos / parceiros / famílias" type = "text" className = "inputhome"/>
          <div className = "carLog">
          <NavLink to  = "/cadastro">
          <div className = "carrinhoo">
            <img src = {carrinho} className = "carrinho"/>
            <b>Bem vindo, <br/>cadastre-se</b>
          </div>
          </NavLink>
          <NavLink to  = "/login">
            <div className = "login">
              <img src = {login}/>
              <b>Bem vindo, <br/> Faça Login</b>
            </div>
            </NavLink>
          </div>
         </div> 
         <nav>
         <ul className = "sessoes">
           <li onClick = {()=> setModalDep(modalDep ? false: true)}>DEPARTAMENTOS</li>
           <li onClick = {()=> setModalSob(true)} >SOBRE </li>
           <li>PARCEIROS</li>
           <li><NavLink to = "/contato">CONTATO</NavLink></li>
           <li><NavLink to = "/fotosVideos">FOTOS E VIDEOS</NavLink></li>
           <li>DOAÇÕES</li>
         </ul>
        </nav>   
        {modalDep && <ModalDepart/>}
        {modalSob && <ModalSobre modalSob = {modalSob} setModalSob = {setModalSob}/>}
      </div>
    );
  }
  
  export default Header;