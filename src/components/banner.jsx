import React from 'react'
import styled from 'styled-components'
import InputRegister from './butonRegister'
import ButonStart from './butonStart'

const height = '33.1rem'
const Bann = styled.div`

  padding: 3.5rem 1.5rem 1.5rem 1.5rem;
  text-align:center; 
  color: #fff;
  border-bottom: .5rem solid gray;
    

  
 .container-image-banner {
   position: absolute;
   top: 0;
   left: 0;
   height: ${height};
   z-index: -1;
   width:100%;
   overflow: hidden;
    
   
 }

 .image-banner {
     height: ${height};
    display: block;
    
 }

 .dark {
  position: absolute;
  width: 100%;
  height: ${height};
  top: 0;
	left: 0;
  background-color: rgba(0,0,0,0.7);
  z-index: -1;
    display: block;
    
 }

 h1{
   font-size: 1.8rem;
   margin-bottom: 1rem;
 }

 h2 {
   font-size: 1.2rem;
   font-weight: 400;
   margin-bottom: 1rem;
 }

 .text {
   font-size: 1.2rem;
   font-weight: 400;
   margin-bottom: 1rem;
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
        <h2 className="subtitle"> Disfruta donde quieras. Cancela donde quieras. </h2>
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