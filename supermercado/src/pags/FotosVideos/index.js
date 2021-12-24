import './styles.css'
import Header from '../../compHome/header/Header';
import insta from '../../assets/insta.jpeg'
import wpp from '../../assets/wpp.jpeg'
import face from '../../assets/face.jpeg'
import oip from '../../assets/OIP.jpg'


function FotosVideos(){
      
    return (
        <>
        <Header/>
        <nav className = "organizar">
           <div className = "containerFotos">
          <img src = {oip}/>
          <h3>Doações e vendas de 17/08/2020</h3>
        </div>
        <div className = "containerFotos">
          <img src = "https://th.bing.com/th/id/OIP.Nrc7eNjszKHdxokF2HBHIQHaE9?pid=ImgDet&w=1920&h=1285&rs=1"/>
          <h3>Doações e vendas de 11/09/2020</h3>
        </div>
        <div className = "containerFotos">
          <img src = "https://larsaovicente.org.br/wp-content/uploads/2020/10/121108897_3591148190935823_3628974494876686560_o-780x675.jpg"/>
          <h3>Doações e vendas de 24/11/2020</h3>
        </div>
        </nav>
        <nav className = "organizar">
           <div className = "containerFotos">
          <img src = {oip}/>
          <h3>Doações e vendas de 17/08/2020</h3>
        </div>
        <div className = "containerFotos">
          <img src = "https://th.bing.com/th/id/OIP.Nrc7eNjszKHdxokF2HBHIQHaE9?pid=ImgDet&w=1920&h=1285&rs=1"/>
          <h3>Doações e vendas de 11/09/2020</h3>
        </div>
        <div className = "containerFotos">
          <img src = "https://larsaovicente.org.br/wp-content/uploads/2020/10/121108897_3591148190935823_3628974494876686560_o-780x675.jpg"/>
          <h3>Doações e vendas de 24/11/2020</h3>
        </div>
        </nav>
        </>

      );
    }
    
    export default FotosVideos;
    

