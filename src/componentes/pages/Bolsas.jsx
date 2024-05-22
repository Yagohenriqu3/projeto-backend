import React, { useState } from 'react';
import styles from './Bolsas.module.css'; // Importe o arquivo CSS Module

const Bolsas = () => {
  const [course, setCourse] = useState('');
  const [discount, setDiscount] = useState('');

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleDiscountChange = (event) => {
    setDiscount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de envio do formulário
    console.log('Course:', course, 'Discount:', discount);
  };

  return (
    <>
      <section id="vestibular-bolsas">
        <div className={styles.containerBolsas}>
          <div className={styles.inscricoesBolsas}>
            <h3>INSCRIÇÕES ABERTAS</h3>
            <p>Inscreva-se agora e comece sua jornada rumo ao sucesso!</p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="cursos">Cursos</label>
              <select id="cursos" name="cursos" value={course} onChange={handleCourseChange}>
                {/* Opções do select */}
              </select>
              <br />
              <label htmlFor="Descontos">Descontos</label>
              <select id="Descontos" name="Descontos" value={discount} onChange={handleDiscountChange}>
                {/* Opções do select */}
              </select>
              <br />
              <button type="submit" className={styles.ctaBtnBolsas}>Avançar</button>
            </form>
          </div>
          <h2>Vestibular - Seu Futuro Certo!</h2>
          <h3>Odontologia com até 50% de desconto.</h3>
          <div>
            <img src="image/odontologia.jpeg" alt="Odontologia" width="300px" />
          </div>
        </div>
        <p>Informações sobre o nosso vestibular!!</p>
        <p>"Matricule-se agora e garanta o seu futuro! Aproveite nossas promoções exclusivas para o vestibular e dê o primeiro passo rumo ao sucesso. Descontos especiais, bolsas de estudo e benefícios incríveis esperam por você. Não perca tempo, inscreva-se já e comece a construir sua carreira com o Futuro Certo!"</p>
        <p>Próxima data: 18/07/2024</p>
        <a href="https://www.unisuam.edu.br/graduacao/odontologia" className={styles.ctaBtnBolsas}>Inscreva-se Agora</a>
      </section>
      <section className={styles.promocoesBolsas} id="promocoes-bolsas">
        <div className={styles.containerBolsas}>
          <h2>Promoções</h2>
          <p>Confira nossas promoções especiais.</p>
          <p>Descontos exclusivos para novos alunos.</p>
          <button className={styles.ctaBtnBolsas}>Saiba Mais</button>
        </div>
      </section>
    </>
  );
};

export default Bolsas;
