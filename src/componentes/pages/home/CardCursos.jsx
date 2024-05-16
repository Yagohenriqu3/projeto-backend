import CardArtigo from "../../cards/CardArtigo"
import Enfermagem from '../../../assets/imgcursos/enfermagem.jpeg'
import EducacaoFisica from '../../../assets/imgcursos/educaçlãofisicabacharelado.jpg'
import Ads from '../../../assets/imgcursos/ads.jpg'

import style from './Artigo.module.css'

import { Link } from 'react-router-dom'

function Artigos (){
    return(
    <div className={style.container}>
    
        <h1>Cursos com bolsas de estudo</h1>
        
        <div className={style.containerArtigos}>
            <Link to={'/cursos'}>
                <CardArtigo
                img={Enfermagem}
                alt='Enfermagem'
                nome='Enfermagem'
                descricao='Escolha enfermagem e descubra a arte de cuidar, o poder de curar e a gratidão de transformar vidas todos os dias.'
                className={style.cardArtigo}
                />
            </Link>
            
            <Link to={'/cursos'}>
                <CardArtigo
                img={EducacaoFisica}
                alt='Educação Física'
                nome='Educação Física'
                descricao='transforme movimento em paixão, saúde em estilo de vida e inspiração em resultados duradouros.'
                className={style.cardArtigo}
                />
            </Link>

            <Link to={'/cursos'}>
                <CardArtigo
                img={Ads}
                alt='Análise e Desenvolvimento de Sistemas'
                nome='ADS'
                descricao='Análise e Desenvolvimento de Sistemas e mergulhe no universo da tecnologia, onde cada linha de código é uma oportunidade de inovação.'
                className={style.cardArtigo}
                />
            </Link>
            
        </div>
    
    </div>)

}

export default Artigos