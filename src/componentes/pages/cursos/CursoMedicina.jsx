import './CursosMedicina.css'

import Medicinamini from './imgscursos/Medicinamini.jpg'

export default function CursoMedicina() {
  return (
    <div>
      <section class="section-direito">
        <h1>Medicina</h1>
    </section>
    <section className="conteudo">
        <div className="sobre-direito">
            <h1 id="title-sobre">Sobre </h1>
            <p>O curso de Medicina prepara profissionais para atuar no campo da saúde, abrangendo áreas como clínica médica, cirurgia, pesquisa, ensino, gestão em saúde e saúde pública.

Ao longo do curso, os estudantes aprendem sobre anatomia, fisiologia, bioquímica, microbiologia, farmacologia, além de ética médica e princípios humanitários que norteiam a profissão.

A formação em Medicina envolve o estudo aprofundado do corpo humano, sua fisiologia, patologias e tratamentos, visando a prevenção, diagnóstico e tratamento de doenças, com foco na saúde integral do paciente.

Durante a graduação, os alunos têm contato com casos clínicos reais, participam de estágios em hospitais e unidades de saúde, realizam simulações de procedimentos médicos e debatem sobre questões éticas e de responsabilidade profissional, o que contribui para sua formação prática e para o desenvolvimento de habilidades essenciais para o exercício da medicina.

Ao concluir o curso, o médico estará apto a desempenhar diversas atividades, como diagnóstico de doenças, prescrição de tratamentos, realização de cirurgias, orientação preventiva, pesquisa científica, gestão em saúde, entre outras, sempre pautado pela ética médica e pelo compromisso com a saúde e o bem-estar dos pacientes.</p>
        </div>

        <div className="card">
            <div className="card-title">Salário de um Médico</div>
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
            <div><img src={Medicinamini}/></div>

            <div><h2 id="title-sobre">Para quem é o curso de Medicina?</h2>
            <p>O curso de Medicina é ideal para estudantes interessados em compreender a estrutura do sistema de saúde, as ciências médicas, as práticas clínicas e os princípios éticos que regem a profissão. É indicado para quem deseja atuar como médico, cirurgião, pesquisador, docente, gestor em saúde, entre outras carreiras na área da saúde.

Além disso, o curso também é indicado para quem tem interesse em áreas relacionadas, como prevenção de doenças, promoção da saúde, pesquisa científica e gestão de serviços de saúde, buscando uma formação sólida para exercer atividades que contribuam para a melhoria da qualidade de vida e o bem-estar da sociedade.</p>
            </div>
        </div>
    </section>

    <a href="https://www.unisuam.edu.br/graduacao/enfermagem/" className="button--cursos" target='_blank'>Matricule-se</a>
    </div>
  )
}
