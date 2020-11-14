import React from 'react'
import styled from 'styled-components'


const FooterStyled = styled.footer`
  background: #000;
  color: gray;
  padding: 1rem;


  .text-principal-footer {
    margin: 2.5rem 1rem;
    text-align: left;
    font-size: 1em;
  }

  .about-us {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 0;
  }


  .a-footer {
    color: gray;
    text-decoration: none;
    font-weight: 300;
    font-size: .8em;
    padding: .5rem 1rem;
  }

  .select-footer {
    padding: 1rem;
    background: #000;
    color: gray;
    font-size: 1.1rem;
    margin: 1rem;
    border-radius: .2rem;
  }

@media screen and (min-width: 500px) {
  .about-us { 
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 550px) {
  padding: 3rem;
}

@media screen and (min-width: 950px) {
  .about-us { 
    grid-template-columns: repeat(4, 1fr);
  }
}

@media screen and (min-width: 1350px) {
  padding-left: 13rem;
  padding-right: 13rem;
}
`
const Footer = () => {
  return (
    <FooterStyled className="container-footer">
      <p className="text-principal-footer">
        ¿Preguntas? Llama al 800-283-3301
      </p>
      <div className="about-us">
        <a href="/" className="a-footer"> Preguntas frecuentes </a>
        <a href="/" className="a-footer"> Centro de ayuda </a>
        <a href="/" className="a-footer"> Cuenta </a>
        <a href="/" className="a-footer"> Prensa </a>
        <a href="/" className="a-footer"> Relaciones con inversionistas </a>
        <a href="/" className="a-footer"> Empleo </a>
        <a href="/" className="a-footer"> Canjear tarjetas de regalo </a>
        <a href="/" className="a-footer"> Comprar tarjetas de regalo </a>
        <a href="/" className="a-footer"> Formas de ver </a>
        <a href="/" className="a-footer"> Términos de uso </a>
        <a href="/" className="a-footer"> Privacidad </a>
        <a href="/" className="a-footer"> Preferencias de Cookies </a>
        <a href="/" className="a-footer"> Información corporativa </a>
        <a href="/" className="a-footer"> Contactanos </a>
        <a href="/" className="a-footer"> Prueba de velocidad </a>
        <a href="/" className="a-footer"> Avisos legales </a>
        <a href="/" className="a-footer"> Originales de Netflix </a>
      </div>
      <div className="container-languages">
        <select className="select-footer" name="language" id="language">
          <option value="Spanish"> Español </option>
          <option value="English"> Inglés </option>
        </select>

        <p className="a-footer"> Netflix México </p>
      </div>
    </FooterStyled>
  )
}

export default Footer