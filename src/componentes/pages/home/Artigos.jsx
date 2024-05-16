import CardArtigo from "../../cards/CardArtigo"
import Enfermagem from '../../img/graduacao/enfermagem.jpg'
import style from './Artigo.module.css'

function Artigos (){
    return(
    <div className={style.container}>
    
        <h1>Saiba mais sobre os cursos</h1>
        
        <div className={style.containerArtigos}>
            <CardArtigo
            img={Enfermagem}
            alt='direito'
            nome='Direito'
            descricao='aprenda direito'
            className={style.cardArtigo}
            />
            
            <CardArtigo
            img={Enfermagem}
            alt='direito'
            nome='Direito'
            descricao='aprenda direito'
            className={style.cardArtigo}
            />
            <CardArtigo
            img={Enfermagem}
            alt='direito'
            nome='Direito'
            descricao='aprenda direito'
            className={style.cardArtigo}
            />
            
        </div>
    
    </div>)

}

export default Artigos