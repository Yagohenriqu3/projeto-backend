import CardArtigos from './home/Artigos'
import Cadastre from './home/Cadastre'
import Carousel from './home/Carousel'
import VamosEstudar from './home/VamosEstudar'
import CardCursos from './home/CardCursos'


function Home(){
    return(
        <div>
            <Carousel />
            <VamosEstudar/>
            <CardCursos/>
            <Cadastre/>
            <CardArtigos/>
        </div>
    )
}

export default Home