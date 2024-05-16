import CardArtigos from './home/Artigos'
import Cadastre from './home/Cadastre'
import Carousel from './home/Carousel'
import VamosEstudar from './home/VamosEstudar'
import CardCursos from './home/CardCursos'
import Banner from './home/Banner'
import Depoimento from './home/Depoimento'


function Home(){
    return(
        <div>
            <Carousel />
            <Banner/>
            <VamosEstudar/>
            <CardCursos/>
            <Cadastre/>
            <CardArtigos/>
            <Depoimento/>
        </div>
    )
}

export default Home