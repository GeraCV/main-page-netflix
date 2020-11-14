import React from 'react'
import styled from 'styled-components'
import InputRegister from './butonRegister'
import ButonStart from './butonStart'


const Bann = styled.div`

  padding: 3.5rem 1.5rem 1.5rem 1.5rem;
  text-align:center; 
  color: #fff;
  border-bottom: .5rem solid gray;
  height: 30em;
    

  .container-image-banner {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width:100%;
    overflow: hidden;
  }

  .image-banner {
      display: block; 
  }

  .dark {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
    z-index: -1;
    display: block;
  }

  .title {
    font-size: 1.8em;
    margin-bottom: 1rem;
  }

  .subtitle {
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 1rem;
  }

  .text {
    font-size: 1.2em;
    font-weight: 400;
    margin-bottom: 1rem;
  }

@media screen and (min-width: 500px) {
  .text {
    padding: 0 2rem;
  }
}

@media screen and (min-width: 550px) {

  height: 45em;
  padding:  3rem 3.5rem 0 3.5rem;

  .title {
    font-size: 3em;
    padding-top: 4rem;
  }

  .subtitle {
    font-size: 1.7em;
    padding: 0 1rem;
  }

}

@media screen and (min-width: 950px) {

  padding:  8rem 4.5rem;

  .title {
    margin-left: 5rem;
    margin-right: 5rem;
    padding-top: 0;
  }

  .subtitle { 
    margin-bottom: 2rem;
  }

  .start-right {
    padding: 0 3rem;
    display: grid;
    grid-template-columns: 1fr max-content; 
  }
  
}

@media screen and (min-width: 1350px) {

 .title {
    margin-left: 18rem;
    margin-right: 18rem;
  }

  .start-right {
    width: 65%;
    margin: auto;
  }
}

`

const Banner = () => {
  return (
    <Bann className="container-banner">
      <div className="container-image-banner">
        <img className="image-banner" src="https://assets.nflxext.com/ffe/siteui/vlv3/bcd713c9-291e-4186-a275-117b387eaaf2/5a0f5262-a009-47c5-a056-4bfc46ee49b5/MX-es-20201019-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
      </div>
      <div className="dark"></div>
      <div className="information-principal">
        <h1 className="title"> Peliculas y series ilimitadas y mucho más. </h1>
        <h2 className="subtitle"> Disfruta donde quieras. Cancela cuando quieras. </h2>
        <p className="text"> ¿Quieres ver Netflix ya?
        Ingresa tu email para crear una cuenta
        o reiniciar tu membresía de Netflix.
      </p>
      </div>
      <div className="start-right">
        <InputRegister />
        <ButonStart />
      </div>
    </Bann>
  )
}

export default Banner