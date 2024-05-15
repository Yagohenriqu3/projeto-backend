import Style from './Footer.module.css'
import Logo from './img/logopb.png'

function Footer (){
    return(
        
        <div className={Style.footer}>
        <img src={Logo} alt='logo futuro certo'/>
        

            <p>Projeto de desenvolvido em Front-End</p>
            <h2>Unisuam</h2>
            </div>
    )
}

export default Footer