import './styles.css'
import {useState} from 'react';
import Header from '../../compHome/header/Header';

import mulher from '../../assets/mulher.jpeg'
import ModalVoluntario from '../../ModalVoluntario/ModalVoluntario';
import ModalFamilia from '../../ModalFamilia/ModalFamilia';
import ModalEmpresa from '../../ModalEmpresa/ModalEmpresa';



function Cadastro(){
  const [modalF, setModalF] = useState(false);
  const [modalV, setModalV] = useState(false);
  const [modalE, setModalE] = useState(false);

  return (
        <>
        <Header/>
        <div className = "containerCD">
            <img src = {mulher} className = "mulher"/>
            <nav>
            <div>
              <button onClick = {()=> setModalF(true)}/>
              <span for="scales" >Familia carente</span>
            </div>
            <div>
              <button onClick = {()=> setModalE(true)} />
              <span for="scales" >Empresas parceiras</span>
            </div>
            <div>
              <button onClick = {()=> setModalV(true)} />
              <span for="scales" >Voluntarios</span>
            </div>
            </nav>
        </div>
        {modalV && <ModalVoluntario modalV = {modalV} setModalV = {setModalV}/> }
        {modalF && <ModalFamilia modalF = {modalF} setModalF = {setModalF}/>}
        {modalE && <ModalEmpresa modalE = {modalE} setModalE = {setModalE}/> }
        </>

      );
    }
    
    export default Cadastro;
    

