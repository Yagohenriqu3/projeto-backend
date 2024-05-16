import './Cursos.css'


import Ads from '../../assets/imgcursos/ads.jpg'
import Direito from '../../assets/imgcursos/direito.jpeg'
import  Educacaofisica from '../../assets/imgcursos/educaçlãofisicabacharelado.jpg'
import Farmacia from '../../assets/imgcursos/farmacia.jpg'
import Enfermagem from '../../assets/imgcursos/enfermagem.jpeg'
import Engenhariacivil from '../../assets/imgcursos/engenharia.jpg'
import Engenhariamecanica from '../../assets/imgcursos/engenhariamec.png'
import Medicina from '../../assets/imgcursos/medicina.png'
import Psicologia from '../../assets/imgcursos/pscicologia.jpeg'
import Administracao from '../../assets/imgcursos/administração.jpeg'
import Odontologia from '../../assets/imgcursos/ondontologia.jpeg'
import Designgrafico from '../../assets/imgcursos/Designer.jpeg'



function Cursos (){
    return(
        <>    
<div className="orange-line"></div>

<div className="vitrine-title">Cursos em Destaque</div>


<div className="vitrine-container">
<div className="product">
<img src={Direito} alt="produto"/>
<h3>Direito</h3>
<a href="https://www.unisuam.edu.br/graduacao/direito/" class="button"  onclick="abrirInformacoes('link_para_mais_informacoes2')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/direito.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Ads} alt="Produto 2" />
<h3>Anlise e desenvolvimento de sistemas</h3>
<a href="https://www.unisuam.edu.br/graduacao/analise-e-desenvolvimento-de-sistemas/" class="button" id="btn-ads" onclick="abrirInformacoes('link_para_mais_informacoes2')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/ads.html" class="button" id="btn-ads" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Educacaofisica} alt="Produto 3"/>
<h3>Educacao física </h3>
<a href="https://www.unisuam.edu.br/graduacao/educacao-fisica-bacharelado/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/educacaofisica.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Farmacia} alt="Produto 4"/>
<h3>Farmacia</h3>
<a href="https://www.unisuam.edu.br/graduacao/farmacia/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/farmacia.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Enfermagem} alt="Produto 5"/>
<h3>Enfermagem</h3>
<a href="https://www.unisuam.edu.br/graduacao/enfermagem/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/enfermagem.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Engenhariacivil} alt="Produto 5"/>
<h3>Engenharia civil</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/engenharia.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Engenhariamecanica} alt="Produto 5"/>
<h3>Engenharia Mecânica</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/engenhariamec.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Medicina} alt="Produto 5"/>
<h3>Medicina</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/medicina.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Psicologia} alt="Produto 5"/>
<h3>Pscicologia</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/engenharia.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Administracao} alt="Produto 5"/>
<h3>Administração</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/engenharia.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Odontologia} alt="Produto 5"/>
<h3>Odontologia</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/engenharia.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

<div className="product">
<img src={Designgrafico} alt="Produto 5"/>
<h3>Design Grafico</h3>
<a href="https://www.unisuam.edu.br/graduacao/engenharia-civil/" class="button" onclick="abrirInformacoes('link_para_mais_informacoes')" target='_blank'>Matricule-se</a>
<a href="pages/cursos/engenharia.html" class="button" onclick="abrirInformacoes('link_para_mais_informacoes2')">Saiba Mais</a>
</div>

</div>

        </>
    )
}

export default Cursos