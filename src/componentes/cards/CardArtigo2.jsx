import './CardArtigo2.css'

import { Link } from 'react-router-dom'

import imagemartigo from '../../assets/imgcursos/engenharia.jpg'

function CardArtigos2 ({ImagemArtigo, Titulo, Descricao, LinkArtigo}){
    return(
        <div className='container-cardartigos2'>
            <div className='imagem-div-cardartigos2'>
                <img src={ImagemArtigo} alt='imagem artigo'/>
            </div>
            <div className='descricao-div-cardartigos2'>
                <h1>{Titulo}</h1>
                <p>{Descricao}</p>
                <Link to={LinkArtigo}><button className='botao-div-cardartigos2'>Ver mais</button></Link>
            </div>
        </div>
    )
}

export default CardArtigos2