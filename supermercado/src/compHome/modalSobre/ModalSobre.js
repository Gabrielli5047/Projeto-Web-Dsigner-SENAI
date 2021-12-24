import './styles.css'

function ModalSobre({modalSob ,setModalSob}) {
  
    return (
      modalSob &&
        <div className = "containerSobre" onClick = {()=> setModalSob(false)}>
        <div className = "containerSob">
          <h3 className = "h3">Quem somos</h3>   
          <p> 
           Somos uma instituição sem fins lucrativos, buscando promover inclusão social de pessoas vulneraveis 
           através de doações e incentivos à vida, educação, saúde e segurança.
          </p>
          <h3>Como surgiu a ideia</h3>   
          <p> 
            iniciamos o projeto em nov/2021, incentivados em aula a desenvolver ideias para criação de algum 
            site. Como futuros desenvolvedores não pudemos deixar a oportunidade programar o nosso primeiro 
            site proprio agarrando uma causa contra a fome e desigualdade social.
          </p>
          <h3>Metas e objetivos</h3>   
          <p> 
            -Tornar o mundo um lugar mais igualitario, assegurando que todos da sociedade tenham direitos atendidos.
            <br/> - Reduzir as taxas de pobreza no Brasil.  
            <br/> - Evitar que mais pessoas morram de fome. 
          </p>
          <h3>Valores</h3>   
          <p> 
            Solidariedade, Humanização, Inovação, Trabalho voluntário.
          </p>
        </div>
        </div>
    );
  }
  
  export default ModalSobre;