import React from 'react'
import styled from 'styled-components'

const ContainerCardsStyled = styled.div`


.container-card{
  background: #000;
  color: #fff;
  padding: 3rem 1rem;
  text-align: center;
  border-bottom: 10px solid gray;
}

.title-card {
  margin-bottom:1rem;
}

.description-card {
  font-weight: 400;

}
.card-image {
  width: 100%;
  z-index: 100;
}

.container-media {
  position: relative;

}

.video {
  position: absolute;
  top: 20.5%;
  left: 13.5%;
  width: 75.2%;
  display: inline-block;
  z-index: -1;
} 
`
const FirstSection = () => {
  return (
    <ContainerCardsStyled className="container-cards">
      <div className="container-card">
        <h2 className="title-card">  Disfruta en tu TV. </h2>
        <h3 className="description-card"> Ve en smart TV, PlayStation, Xbox,
        Chromecast, Apple TV, reproductores de Blue-ray y más </h3>
        <div className="container-media">
          <div className="container-image">
            <img className="card-image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="i" />
          </div>
          <div className="container-video">
            <video className="video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" autoPlay loop playsInline muted> </video>
          </div>
        </div>
      </div>
      <div className="container-card">
        <h2 className="title-card">  Descarga tus series para verlas offline. </h2>
        <h3 className="description-card"> Guarda tu contenido favorito y ten siempre algo para ver. </h3>
        <div className="container-image">
          <img className="card-image"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="i" />
        </div>
      </div>
      <div className="container-card">
        <h2 className="title-card">  Disfruta donde quieras. </h2>
        <h3 className="description-card"> Peliculas y series ilimitadas en tu telefono,
        tablet, computadora y TV sin costo extra. </h3>
        <div className="container-media">
          <div className="container-image">
            <img className="card-image last-image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="i" />
          </div>
          <div className="container-video">
            <video className="video" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" autoPlay loop playsInline muted> </video>
          </div>
        </div>
      </div>
    </ContainerCardsStyled>
  )
}

export default FirstSection