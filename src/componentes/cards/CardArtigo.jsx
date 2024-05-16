import style from './CardArtigo.module.css'





function CardArtigo({img, alt, nome, descricao}){
    return (
        <div>
                <div className={style.card}>
                    <div>
                        <img src={img} alt={alt}/>
                        <h2>{nome}</h2>
                        <p>{descricao}</p>
                    </div>
                </div>
        </div>
    )
}

export default CardArtigo