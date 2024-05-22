import CardArtigo from "../../cards/CardArtigo"
import Medicina from '../../img/graduacao/enfermagem.jpg'
import Direito from '../../../assets/imgcursos/direito.jpeg'
import Psicologia from '../../../assets/imgcursos/pscicologia.jpeg'

import { Link } from 'react-router-dom'


import style from './Artigo.module.css'

function Artigos (){
    return(
    <div className={style.container}>
    
        <h1>Saiba mais sobre os cursos</h1>
        
        <div className={style.containerArtigos}>
            <Link to='/artigos/medicina'>
                <CardArtigo
                img={Medicina}
                alt='Medicina'
                nome='Medicina'
                descricao='Explore os mistérios do corpo humano e a arte de curar na fascinante jornada da medicina, onde o aprendizado constante leva a salvar vidas e promover o bem-estar.'
                className={style.cardArtigo}
                />
            </Link>
            
            <Link to='/artigos/direito'>
                <CardArtigo
                img={Direito}
                alt='direito'
                nome='Direito'
                descricao='Desvende os segredos da mente humana e mergulhe no mundo da psicologia, onde a compreensão profunda das emoções e do comportamento leva a uma vida mais plena e saudável.'
                className={style.cardArtigo}
                />
            </Link>

            <Link to='/artigos/psicologia'>
                <CardArtigo
                img={Psicologia}
                alt='Psicologia'
                nome='Psicologia'
                descricao='Explore o vasto universo do Direito e descubra como o conhecimento dessa profissão pode abrir portas para um entendimento mais profundo da justiça e da sociedade."'
                className={style.cardArtigo}
                />
            </Link>
            
        </div>
    
    </div>)

}

export default Artigos