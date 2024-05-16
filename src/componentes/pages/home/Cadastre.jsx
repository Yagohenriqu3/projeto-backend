import { Link } from 'react-router-dom'
import './Cadastre.css'


export default function Cadastre() {
  return (
        <Link to={'/cadastro'}>
          <div className="container--cadastre">
                          <div>
                            <h1>Cadastre-se agora</h1>
          
                                                <p style={{color: 'white'}}>Para ficar por dentro de todas as oportunidades como estágio, emprego, bolsas, descontos. cadastre seu e-mail na nossa lista. </p>
                          </div>
                  </div>
        </Link>
  )
} 
