import { FaGraduationCap, FaPercentage, FaClipboardCheck } from 'react-icons/fa'

import './VamosEstudar.css'

import { useInView } from 'react-intersection-observer';

export default function VamosEstudar() {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.5,
        
      });

  return (
    <div className={`container--vamosestudar--efeito ${inView ? 'active' : ''}`} ref={ref}>
       <section className="container--vamosestudar">
            <h1 className='container--vamosestudar--h1'>Vamos começar a estudar?</h1>
            <div className="container--cards">
                <div className='card--vamosestudar'>
                    <FaGraduationCap className='icon--card'/>
                    <h1>Bolsas de até 75%!</h1>
                    <p>Mais de 1000 faculdades para você com bolsas de até 75% de desconto!</p>
                
                </div>
                <div className='card--vamosestudar'>
                    <FaPercentage className='icon--card'/>
                    <h1>Desconto garantido</h1>
                    <p>Seu percentual de desconto é garantido até o fim do curso, legal né?</p>
                
                </div>
                <div className='card--vamosestudar'>
                    <FaClipboardCheck className='icon--card'/>
                    <h1>Use a sua nota do Enem</h1>
                    <p>Use sua nota do Enem e garanta as melhores bolsas de estudo em nosso site!</p>
                
                </div>
            </div>
        </section>
    </div>
  )
}
