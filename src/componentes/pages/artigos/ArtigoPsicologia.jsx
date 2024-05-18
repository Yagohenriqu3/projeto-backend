import './ArtigoPage.css'
import Imagem1 from './imgs/mathieu-stern-nDDVQzkc_fc-unsplash.jpg'
import Imagem2 from './imgs/unseen-studio-s9CC2SKySJM-unsplash.jpg'
import Imagem3 from './imgs/e83584365b58_justica.jpg'
import Imagem4 from './imgs/original-d3d65a2a9398200fd2c0f7872fd85689-1-1024x683.jpg'

import { Link } from 'react-router-dom'


export default function ArtigoPsicologia() {
  return (
      <>
      <section className="main-content-artigo">
        <div className="container-artigo">
        <div className="main-content-artigo">
            <article>
                <h1>Curso de Psicologia</h1>
                <img src={Imagem1} alt="Imagem do curso de Psicologia"/>
                <h2>Por Que Estudar Psicologia?</h2>
                <p>A Psicologia oferece a oportunidade de trabalhar em várias áreas, como clínica, escolar, organizacional, esportiva e mais. Psicólogos podem atuar em consultórios, hospitais, empresas, escolas ou em pesquisa acadêmica. Estudar Psicologia não é apenas entender a mente humana, mas também ajudar as pessoas a melhorar sua qualidade de vida e bem-estar mental.

Se você se vê nesse perfil, considere o curso de Psicologia como uma escolha para sua carreira. Pode ser o primeiro passo para uma vida profissional cheia de significado e impacto positivo.</p>
                <img src={Imagem2} alt="Imagem Descrição"/>
                <h2>Será que Psicologia é a Carreira Ideal para Você?</h2> 
                <ul>
                    <li>Você é uma pessoa empática, curiosa sobre o comportamento humano e gosta de ajudar os outros a resolverem seus problemas? Tem habilidade para escutar, analisar e se comunicar de maneira clara? Então, o curso de Psicologia pode ser a escolha certa para você.</li>
                    <h2>Perfil Ideal para Estudantes de Psicologia:
                    </h2>

                    <li><strong>Empatia e Compaixão:</strong> Se você tem facilidade para entender e se colocar no lugar dos outros, a Psicologia valoriza essa habilidade para ajudar pacientes a enfrentarem seus desafios emocionais e mentais.</li>

                    <li><strong>Interesse pelo Comportamento Humano:</strong> Psicólogos estudam como e por que as pessoas pensam, sentem e agem. Se você é curioso sobre os processos mentais e comportamentais, vai se encontrar nesse campo.</li>

                    <li><strong>Habilidade de Escuta e Comunicação</strong>: Ser um bom ouvinte e se comunicar de maneira clara e eficaz é essencial para entender e ajudar os pacientes. Se você tem essas habilidades, a Psicologia pode ser ideal para você.</li>

                    
                        <li><strong>Análise Crítica:</strong> Psicólogos frequentemente analisam casos complexos e desenvolvem planos de tratamento. Se você gosta de resolver problemas e analisar situações de maneira crítica, essa é uma habilidade importante.</li>
                    
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
