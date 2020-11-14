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
  font-size: 1.6em;
  margin-bottom:1rem;
}

.description-card {
  font-size: 1.2em;
  font-weight: 400;
}

.card-image {
  width: 100%;

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

@media screen and (min-width: 550px) {
  .container-card { 
  padding: 5rem 3rem;
}

  .title-card {
    font-size: 2.5em;
  }
}

@media screen and (min-width: 950px) {
  .container-card { 
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 3rem;
    text-align: left;
  }

  .title-card {
    font-size: 3em;
  }

  .description-card {
    font-size: 1.6em;
  }

  .container-image {
    width: 100%;
  }

  .container-card:nth-child(even) {
    flex-direction: row-reverse;
  }
}

@media screen and (min-width: 1350px) {
   .container-card { 
    padding-left: 7rem;
    padding-right: 7rem;
  }

}

`
const FirstSection = () => {
  return (
    <ContainerCardsStyled className="container-cards">
      <div className="container-card">
        <div className="container-description-first-section">
          <h2 className="title-card">  Disfruta en tu TV. </h2>
          <h3 className="description-card"> Ve en smart TV, PlayStation, Xbox,
        Chromecast, Apple TV, reproductores de Blue-ray y más </h3>
        </div>
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
        <div className="container-description-first-section">
          <h2 className="title-card">  Descarga tus series para verlas offline. </h2>
          <h3 className="description-card"> Guarda tu contenido favorito y ten siempre algo para ver. </h3>
        </div>
        <div className="container-media">
          <div className="container-image">
            <img className="card-image"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="i" />
          </div>
        </div>
      </div>
      <div className="container-card">
        <div className="container-description-first-section">
          <h2 className="title-card">  Disfruta donde quieras. </h2>
          <h3 className="description-card"> Peliculas y series ilimitadas en tu telefono,
        tablet, computadora y TV sin costo extra. </h3>
        </div>
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