import React from 'react'
import CarouselWithAutoPlay from './CarouselWithAutoPlay'
import img1 from '../../img/carousel/estudantesgrande.jpg'
import img2 from '../../img/carousel/estudargrande.jpg'
import img3 from '../../img/carousel/formandosgrande.jpg'
import img4 from '../../img/carousel/professoragrande.jpg'


const App = () => {
  const images = [
    img1,img2,img3,img4
  ]

  return (
    <div>
      <CarouselWithAutoPlay images={images} />
    </div>
  )
}

export default App;
