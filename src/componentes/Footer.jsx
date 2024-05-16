import Style from './Footer.module.css'
import Logo from './img/logopb.png'

import { Link } from 'react-router-dom'

function Footer (){
    return(
        
        <div className={Style.footer}>
        <Link to={'/'}><img src={Logo} alt='logo futuro certo'/></Link>
        <nav>
                    <ul>
                        <li>
                            <Link
                            to='/'>Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/cursos'>Cursos</Link>
                        </li>
                        <li>
                            <Link to='/Artigos'>Artigos</Link>
                        </li>
                        <li>
                            <Link to='/Login'>Login</Link>
                        </li>
                    </ul>
                </nav>

            <p style={{color: 'white'}}>Projeto back-end 2° Período</p>
            <h2>Unisuam</h2>
            </div>
    )
}

export default Footer