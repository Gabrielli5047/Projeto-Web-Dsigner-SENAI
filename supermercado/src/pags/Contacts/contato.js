import './styles.css'
import {useState} from 'react';
import Header from '../../compHome/header/Header';
import insta from '../../assets/insta.jpeg'
import wpp from '../../assets/wpp.jpeg'
import face from '../../assets/face.jpeg'
import { Link } from 'react-router-dom';


function Contato(){
      
    return (
        <>
        <Header/>
        <div className = "containerC">
          <div>
             <h1 className = "h1C">Para saber mais, entre em contato </h1>
          <div className = "redes">
            <a href = "https://www.instagram.com/gabrielli.meloo/" target = "_blank">
            <img src = {insta}/>
            </a>
            <a href = "#" >
            <img src = {wpp}/>
            </a>
            <a href = "https://www.facebook.com/gabrielli.melo.5/" target = "_blank" >
            <img src = {face}/>
            </a>
          </div>
          </div>
          <div className = "sobreC">
            <h4>Endereço para correspondência</h4>
            <span>Rua Jocimar Bandeira, salvador/BA, Graça - 151</span>
            <h4>E-mail</h4>
            <span>gabrielli.meloo@hotmail.com</span>
            <h4>Telefone</h4>
            <span>(71)3548-6687</span>
          </div>
        </div>
        </>

      );
    }
    
    export default Contato;
    

