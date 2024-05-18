import './ArtigoPage.css'
import Imagem1 from '../../../assets/imgcursos/direito-2.jpeg'
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
                <h1>Curso de Direito</h1>
                <img src={Imagem1} alt="Imagem do curso de Psicologia"/>
                <h2>Por Que Estudar Direito?</h2>
                <p>Além de desenvolver todas essas habilidades, o curso de Direito oferece uma vasta gama de oportunidades profissionais. Advogados podem atuar em diversas áreas, como Direito Civil, Penal, Trabalhista, Ambiental, entre outras. Além disso, há carreiras no setor público, como juízes, promotores e defensores públicos, e no setor privado, em empresas, ONGs e consultorias.

Estudar Direito é mais do que aprender sobre leis; é uma oportunidade de se tornar um agente de mudança na sociedade. Se você se vê nessas características, não hesite em explorar o curso de Direito. Pode ser o primeiro passo para uma carreira emocionante e impactante.</p>
                <img src={Imagem2} alt="Imagem Descrição"/>
                <h2>Será que Direito é a Carreira Ideal para Você?</h2> 
                <ul>
                    <li>Você é curioso, gosta de entender como as coisas funcionam e busca justiça? Tem facilidade para argumentar, gosta de ler e se interessa por questões sociais? Então, o curso de Direito pode ser ideal para você.</li>
                    <h2>Perfil Ideal para Estudantes de Direito:</h2>
                    <li><strong>Interesse por Leitura:</strong> O Direito exige muita leitura. Se você gosta de se aprofundar em textos complexos, vai se encaixar bem.</li>

                    <li><strong>Senso de Justiça:</strong> Se você tem um forte senso de justiça e deseja fazer a diferença na sociedade, o Direito pode ser uma carreira gratificante.</li>

                    <li><strong>Análise Crítica:</strong> Resolver problemas complexos e interpretar leis exige uma mente analítica. Se você gosta desse tipo de desafio, o Direito é uma boa opção.</li>

                   
                        <li><strong>Resiliência:</strong> O caminho no Direito é desafiador e exige determinação e persistência. Se você é resiliente, essa carreira pode ser ideal.</li>
                  
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
