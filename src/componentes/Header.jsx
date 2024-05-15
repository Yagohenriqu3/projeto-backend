import {Link} from 'react-router-dom'
import Style from './Header.module.css'
import { FaUser } from 'react-icons/fa';


import Logo from './img/logo.png'

function Header (){
    return(
        <div className={Style.container}>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link
                            to='/'> <img src={Logo} alt='Logo do site'/>
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
            </div>
            <div className={Style.divLogin}>
                <FaUser className={Style.iconUsuario} />
                <h2>Login</h2>
            </div>
        </div>
    )
    
}

export default Header
