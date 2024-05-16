import './CardDepoimento.css'
const CardDepoimento = ({ autor, cargo, depoimento }) => {
  return (
    <div className="card--depoimento">
      
          <div className="card--body--depoimento">
            <h5>{autor}</h5>
            <h6>{cargo}</h6>
            <p>"{depoimento}"</p>
          </div>
    </div>
      
  );
};

export default CardDepoimento;
