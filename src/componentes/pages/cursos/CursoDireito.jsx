import './Cursos.css'

import Direitomini from './imgscursos/direitomini.jpg'

export default function CursoDireito() {
  return (
    <div>
      <section class="section-direito">
        <h1>Direito</h1>
    </section>
    <section className="conteudo">
        <div className="sobre-direito">
            <h1 id="title-sobre">Sobre </h1>
            <p>O curso de Direito prepara profissionais para atuar no campo jurídico, abrangendo áreas como advocacia, magistratura, consultoria, conciliação e mediação.</p>
            <p>Ao longo do curso, os estudantes aprendem sobre a estrutura do sistema jurídico, legislação, jurisprudência, doutrina e princípios éticos que regem a profissão.</p>
            <p>A formação em Direito envolve o estudo aprofundado das leis, sua aplicação prática e a resolução de conflitos, buscando sempre a justiça e a equidade.</p>
            <p>Durante a graduação, os alunos têm contato com casos reais, participam de simulações de julgamentos e debates, o que contribui para sua formação prática e para o desenvolvimento de habilidades essenciais para o exercício da profissão.</p>
            <p>Ao concluir o curso, o bacharel em Direito estará apto a exercer diversas atividades, como elaboração de pareceres jurídicos, representação em juízo, mediação de conflitos, consultoria jurídica, entre outras, sempre pautado pela ética e pela responsabilidade social.</p>
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
            <div><img src={Direitomini}/></div>

            <div><h2 id="title-sobre">Para quem é o curso de Direito?</h2>
            <p>O curso de Direito é ideal para estudantes interessados em compreender a estrutura do sistema jurídico, as leis, a jurisprudência e os princípios éticos que regem a profissão. É indicado para quem deseja atuar como advogado, juiz, promotor, defensor público, consultor jurídico, entre outras carreiras do campo jurídico.</p>
            <p>Além disso, o curso também é indicado para quem tem interesse em áreas relacionadas, como conciliação, mediação e arbitragem, e busca uma formação sólida para exercer atividades que promovam a justiça e a equidade na sociedade.</p>
            </div>
        </div>
    </section>

    <a href="https://www.unisuam.edu.br/graduacao/direito/" className="button--cursos" target='_blank'>Matricule-se</a>
    </div>
  )
}
