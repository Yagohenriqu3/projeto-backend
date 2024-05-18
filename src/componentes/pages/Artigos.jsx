import CardArtigos2 from "../cards/CardArtigo2"
import './Artigos.css'

import Destaque1 from '../../assets/imgcursos/engenhariamec.png'
import Destaque2 from '../../assets/imgcursos/enfermagem.jpeg'
import Direito from '../../assets/imgcursos/direito.jpeg'
import Psicologia from '../pages/artigos/imgs/mathieu-stern-nDDVQzkc_fc-unsplash.jpg'

import { Link } from 'react-router-dom'

function Artigos (){
    return(
        <div className="container--artigos">
        <div className="titulo--artigos">
            <h1 className="titulo-artigos">Artigos</h1>
        </div>
            <div className="container-divisao-artigos">
                 <div className="divisa-artigos">
                    <CardArtigos2
                    ImagemArtigo={Psicologia}
                        Titulo={'Psicologia'}
                        Descricao={'Escolher a psicologia é embarcar em uma jornada de compreensão da mente humana, promovendo o bem-estar emocional e ajudando as pessoas a superarem desafios internos. Seja a diferença na vida dos outros, oferecendo apoio, empatia e ferramentas para a transformação pessoal. Junte-se a nós nessa missão de promover a saúde mental e o autoconhecimento! '}
                        LinkArtigo={'/artigos/psicologia'}
                    />

                    <CardArtigos2
                    ImagemArtigo={Direito}
                        Titulo={'Direito'}
                        Descricao={'Estudar direito é mais do que aprender leis; é se tornar um agente de mudança, defendendo a justiça, promovendo a igualdade e construindo uma sociedade mais justa e ética. Junte-se a nós nessa jornada transformadora e faça a diferença no mundo!'}
                        LinkArtigo={'/artigos/direito'}
                    />

                    <CardArtigos2
                    ImagemArtigo={Destaque2}
                        Titulo={'Medicina'}
                        Descricao={'Escolher a medicina é escolher dedicar-se à arte de salvar vidas, combinando ciência, empatia e compromisso com o bem-estar humano. Seja a diferença na vida das pessoas, transformando cuidado e conhecimento em saúde e esperança. Junte-se a nós nessa nobre missão e faça a diferença no mundo! '}
                        LinkArtigo={'/artigos/medicina'}
                    />


                   
                </div>
                <div className="divisa-saibamais-artigos">
                
                <div className="vejatambem-artigos">
                <h2>Veja também</h2>
                    <Link to='/artigos/medicina'>
                        <div>
                            <img src={Destaque2} alt='teste'/>
                            <h3>Tudo sobre Medicina</h3>
                        </div>
                    </Link>
                    <Link to='/artigos/direito'>
                        <div>
                            <img src={Direito} alt='teste'/>
                            <h3>Aprenda direito</h3>
                        </div>
                    </Link>
                </div>

                <div className="lista--artigos">
                <h4>Artigos em destaque</h4>
                    <Link to='/artigos/psicologia'>Psicologia</Link>
                    <Link to='/artigos/direito'>Direito</Link>
                    <Link to='/artigos/medicina'>Medicina</Link>
                    
                </div>

                </div>
            </div>
        </div>
    )
}

export default Artigos