import './styles.css'
import {Link} from 'react-router-dom'

function ModalDepart() {
  
    return (
      <div className = "containerModal">
      <ul className = "departamento">
         <li>Alimentos</li>
         <li>Higiene </li>
         <li>Limpeza</li>
         <li>Remédios</li>
         <li>Petz</li>
         <li>Brinquedos</li>
         <li><Link to = "/tudo">Tudo </Link></li>
       </ul>
      </div>
    );
  }
  
  export default ModalDepart;