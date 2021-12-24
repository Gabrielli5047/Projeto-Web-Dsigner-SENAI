import './styles.css'
import img1 from '../../assets/1.jpeg'
import img2 from '../../assets/2.jpeg'
import img3 from '../../assets/3.jpeg'
import img4 from '../../assets/4.jpeg'
import img5 from '../../assets/5.jpeg'
import img6 from '../../assets/6.jpeg'
import img7 from '../../assets/7.jpeg'
import img8 from '../../assets/8.jpeg'
import img9 from '../../assets/9.jpeg'
import img10 from '../../assets/10.jpeg'
import img11 from '../../assets/11.jpeg'
import img12 from '../../assets/12.jpeg'
import img13 from '../../assets/13.jpeg'
import img14 from '../../assets/14.jpeg'
import img16 from '../../assets/16.jpeg'
import img17 from '../../assets/17.jpeg'
import Header from '../../compHome/header/Header'

function DepTudo(){
      
    return (
        <div>
          <Header/>
          <div className = "imagens">
            <img src = {img1}/>
            <img src = {img2}/>
            <img src = {img3}/>
            <img src = {img4}/>
          </div>
          <div className = "imagens">
            <img src = {img5}/>
            <img src = {img10}/>
            <img src = {img16}/>
            <img src = {img17}/>
          </div>
          <div className = "imagens" >
            <img src = {img6}/>
            <img src = {img7}/>
            <img src = {img8}/>
            <img src = {img9}/>
          </div>
          <div className = "imagens">
            <img src = {img11}/>
            <img src = {img12}/>
            <img src = {img13}/>
            <img src = {img14}/>
            
          </div>
        </div>
      );
    }
    
    export default DepTudo;
    

