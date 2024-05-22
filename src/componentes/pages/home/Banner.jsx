import AsMaioresFaculs from '../../../assets/asmaioresfaculdadedobrasil.gif'
import AsMaioresFaculsMobile from '../../../assets/asmaioresfaculdadesdobrsilMobile.gif'
import FaculDeGraca from '../../../assets/faculdegraca.gif'
import FaculDeGracaMobile from '../../../assets/faculdegracaMobile.gif'
import InicioImediato from '../../../assets/comecoimediato.gif'
import InicioImediatoMobile from '../../../assets/comecoimediatoMobile.gif'

import { useInView } from 'react-intersection-observer';

import './Banner.css'
import { Link } from 'react-router-dom'


export default function Banner() {
  
   
  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
    
  });

  return (

    <div className={`container--banner ${inView ? 'active' : ''}`} ref={ref}>
      <section className={`container--banner--home`}>
          <Link className='banner--img--grande' to={'/cursos'}><img  src={AsMaioresFaculs} alt='banner 1'/>
          </Link>
          <Link className='banner--img--pequeno' to={'/cursos'}><img  src={AsMaioresFaculsMobile} alt='banner 1'/>
          </Link>
          <Link className='banner--img--grande' to={'/cursos'}><img src={FaculDeGraca} alt='banner 2'/>
          </Link>
          <Link className='banner--img--pequeno' to={'/cursos'}><img src={FaculDeGracaMobile} alt='banner 2'/>
          </Link>
          <Link className='banner--img--grande' to={'/cursos'}><img src={InicioImediato} alt='banner 3'/>
          </Link>
      
          <Link className='banner--img--pequeno' to={'/cursos'}><img src={InicioImediatoMobile} alt='banner 3'/>
          </Link>
      </section>
    </div>
  )
}
