import { Link } from 'react-router-dom'
import './Cadastre.css'

import { useInView } from 'react-intersection-observer';

export default function Cadastre() {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.5,
    
  });

  return (
        <div className={`container--cadastre--efeito ${inView ? 'active' : ''}`} ref={ref}>
          <Link to={'/cadastro'}>
            <div className="container--cadastre">
                            <div>
                              <h1>Cadastre-se agora</h1>
          
                                                  <p style={{color: 'white'}}>Para ficar por dentro de todas as oportunidades como estágio, emprego, bolsas, descontos. cadastre seu e-mail na nossa lista. </p>
                            </div>
                    </div>
          </Link>
        </div>
  )
} 
