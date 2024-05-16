import React, { useState, useEffect } from 'react'

const CarouselWithAutoPlay = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000); // Intervalo de mudança de imagem em milissegundos (3 segundos)

    return () => clearInterval(interval);
  }, [images.length]);

  const styles = `
    .carousel-container {
      position: relative;
      width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }

    .carousel-img {
      width: 100%;
      height: 35rem;
      object-fit: cover;
      object-position: 50% 20%;
      transition: transform 0.5s ease-in-out;
    }
  `;

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.appendChild(document.createTextNode(styles));
    document.head.appendChild(styleTag);
  }, [styles]);

  return (
    <div className="carousel-container">
      <img className="carousel-img" src={images[currentImageIndex]} alt="Carousel Image" />
    </div>
  );
};

export default CarouselWithAutoPlay;
