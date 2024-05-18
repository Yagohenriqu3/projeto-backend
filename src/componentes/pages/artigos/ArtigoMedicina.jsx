import './ArtigoPage.css'

import Imagem2 from './imgs/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import Imagem3 from './imgs/e83584365b58_justica.jpg'
import Imagem4 from './imgs/original-d3d65a2a9398200fd2c0f7872fd85689-1-1024x683.jpg'

import { Link } from 'react-router-dom'

export default function ArtigoDireito() {
  return (
      <>
      <section className="main-content-artigo">
        <div className="container-artigo">
        <div className="main-content-artigo">
            <article>
                <h1>Curso de Medicina</h1>
                <img src={Imagem4} alt="Imagem do curso de Psicologia"/>
                <h2>Por Que Estudar Medicina?</h2>
                <p>Medicina é uma das profissões mais respeitadas e recompensadoras. Oferece diversas especialidades, como cardiologia, pediatria, cirurgia, entre outras, e a chance de trabalhar em hospitais, clínicas, pesquisa ou ensino. Estudar Medicina não é apenas aprender sobre doenças e tratamentos; é uma oportunidade de fazer a diferença na vida das pessoas e contribuir para a saúde pública.</p>
                <img src={Imagem2} alt="Imagem Descrição"/>
                <h2>Será que Medicina é a Carreira Ideal para Você?</h2> 
                <ul>
                    <li>Você tem paixão por ajudar os outros, se interessa pelo corpo humano e gosta de resolver problemas complexos? Tem paciência, empatia e resiliência? Então, o curso de Medicina pode ser a escolha certa para você.</li>

                    <h2>Perfil Ideal para Estudantes de Medicina:</h2>

                    <li><strong>Vocação para Cuidar das Pessoas:</strong> Se você tem um forte desejo de ajudar os outros e fazer a diferença na vida das pessoas, a Medicina oferece a oportunidade de transformar vidas diariamente.</li>

                    <li><strong>Habilidade de Resolver Problemas:</strong> Diagnosticar e tratar doenças exige uma mente analítica e capacidade de resolver problemas. Se você gosta de desafios intelectuais, a Medicina é um campo estimulante.</li>

                    <li><strong>Empatia e Comunicação: </strong>Médicos precisam se comunicar bem e ter empatia para entender e apoiar seus pacientes. Se você tem facilidade em se conectar com as pessoas, essa é uma habilidade crucial.</li>

                    <li><strong>Resiliência e Dedicação:</strong> A formação médica é longa e desafiadora, exigindo muita dedicação, paciência e resiliência. Se você é persistente e não desiste facilmente, a Medicina pode ser uma carreira gratificante.</li>
                </ul>
            </article>
        </div>

        <div className="courses-container-artigo">
            <h2>Outros Artigos</h2>
            <Link to='/artigos/direito'
             className="course-link-artigo">Direito</Link>
             <Link to='/artigos/medicina'
             className="course-link-artigo">Medicina</Link>
             <Link to='/artigos/psicologia'
             className="course-link-artigo">Psicologia</Link>

            <div className="recomendados-container-artigo">
                <h2>Cursos em Promoção</h2>
                <a href="https://www.unisuam.edu.br/graduacao/direito" class="course-link-artigo" target='_blank'>Direito</a>
                <img src={Imagem3} />
                <a href="https://www.unisuam.edu.br/graduacao/enfermagem" className="course-link-artigo" target='_blank'>Enfermagem</a>
                <img src={Imagem4} alt="Imagem de medicina"/>
            </div>
        </div>
    </div>
    
</section>
</>
  )
}
