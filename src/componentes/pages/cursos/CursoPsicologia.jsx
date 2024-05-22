import './CursosPsicologia.css'

import Psicologiamini from './imgscursos/pscicologiamini.jpg'

export default function CursoPsicologia() {
  return (
    <div>
      <section class="section-direito">
        <h1>Psicologia</h1>
    </section>
    <section className="conteudo">
        <div className="sobre-direito">
            <h1 id="title-sobre">Sobre </h1>
            <p>A formação em Psicologia prepara profissionais para atuar no campo da saúde mental e do comportamento humano, abrangendo áreas como psicoterapia, avaliação psicológica, orientação profissional, pesquisa e ensino.

Ao longo do curso, os estudantes aprendem sobre as teorias psicológicas, métodos de avaliação psicológica, técnicas de intervenção, ética profissional e princípios que regem a prática psicológica.

A formação em Psicologia envolve o estudo aprofundado do funcionamento da mente humana, sua influência sobre o comportamento e a interação social, visando sempre o bem-estar e o desenvolvimento integral do indivíduo.

Durante a graduação, os alunos têm contato com casos clínicos reais, participam de estágios supervisionados e de discussões em grupo, o que contribui para sua formação prática e para o desenvolvimento de habilidades essenciais para o exercício da profissão.

Ao concluir o curso, o psicólogo estará apto a realizar avaliações psicológicas, oferecer intervenções terapêuticas, realizar pesquisas na área da psicologia, orientar indivíduos em suas escolhas profissionais e contribuir para a promoção da saúde mental e do bem-estar psicológico, sempre respeitando os princípios éticos e o compromisso com o cuidado e a responsabilidade social.</p>
        </div>

        <div className="card">
            <div className="card-title">Salário de um Advogado</div>
            <div className="card-item">
                <span className="card-icon">&#128176;</span>
                <div className="card-text">Salário Inicial: R$ 3.000,00 - R$ 5.000,00</div>
            </div>
            <div clasNames="card-item">
                <span className="card-icon">&#128200;</span>
                <div className="card-text">Salário Intermediário: R$ 8.000,00 - R$ 15.000,00</div>
            </div>
            <div className="card-item">
                <span className="card-icon">&#127942;</span>
                <div className="card-text">Salário Nível Sênior: R$ 20.000,00 - R$ 35.000,00+</div>
            </div>
        </div>
    </section>

    <section className="conteudo">
        <div className="card-para-quem">
            <div><img src={Psicologiamini} /></div>

            <div><h2 id="title-sobre">Para quem é o curso de Direito?</h2>
            <p>O curso de Psicologia é ideal para estudantes interessados em compreender o funcionamento da mente humana, os processos mentais, o comportamento individual e coletivo, bem como os princípios éticos que orientam a prática profissional. É indicado para quem deseja atuar como psicólogo clínico, psicoterapeuta, pesquisador, orientador educacional, consultor em empresas, entre outras carreiras ligadas à área da saúde mental e do comportamento humano.

Além disso, o curso também é indicado para quem tem interesse em áreas relacionadas, como psicologia organizacional, psicologia social e comunitária, psicologia da saúde, e busca uma formação sólida para exercer atividades que promovam o bem-estar psicológico, a resolução de conflitos, a melhoria da qualidade de vida e a promoção da saúde mental na sociedade.






</p>
            </div>
        </div>
    </section>

    <a href="https://www.unisuam.edu.br/graduacao/psicologia/" className="button--cursos" target='_blank'>Matricule-se</a>
    </div>
  )
}
