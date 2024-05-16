
import CardDepoimento from '../../cards/CardDepoimento'

function Depoimento() {
  return (
    <div className="container">
      <h1 style={{textAlign: 'center', fontFamily: 'monospace', fontSize: '2rem', marginTop: '2rem'}}>Depoimentos</h1>
      <CardDepoimento
        autor="João Silva"
        cargo="Médico"
        depoimento="Receber uma bolsa de estudos do Futuro Certo foi um divisor de águas na minha vida profissional. Sou imensamente grato por essa oportunidade que não apenas abriu portas, mas também ampliou meus horizontes e possibilitou meu crescimento acadêmico e profissional. Hoje, olho para trás e vejo como essa bolsa foi crucial para alcançar o sucesso que tenho hoje. Obrigado, Futuro Certo, por acreditar no meu potencial e investir no meu futuro."
      />
      <CardDepoimento
        autor="Maria Souza"
        cargo="Diretora de Marketing"
        depoimento="Agradeço de coração à equipe do Futuro Certo por conceder-me uma bolsa de estudos que transformou minha trajetória. Essa oportunidade não só me proporcionou conhecimento acadêmico, mas também me deu confiança e habilidades valiosas para conquistar o sucesso profissional que tanto almejava. Sem dúvida, essa bolsa foi um grande impulso na minha carreira, e serei eternamente grato por isso."
      />
      <CardDepoimento
        autor="Carlos Jose"
        cargo="Engenheiro de Software"
        depoimento="Não tenho palavras para expressar minha gratidão pela bolsa de estudos que recebi do Futuro Certo. Foi um presente que mudou minha vida, abrindo caminhos que antes pareciam inacessíveis. A educação que obtive graças a essa oportunidade foi fundamental para minha ascensão profissional, permitindo-me alcançar metas que antes eram apenas sonhos. Obrigado por acreditarem em mim e investirem no meu futuro."
      />
    </div>
  )
}

export default Depoimento
