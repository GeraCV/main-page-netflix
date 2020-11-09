import React from 'react'
import styled from 'styled-components'
import Question from './question'
import ButonStart from './butonStart'
import InputRegister from './butonRegister'

const SecondSectionStyled = styled.section`
color: #fff;
background: #000;
padding-top: 3rem;
margin: 0;
text-align:center;
border-bottom: 10px solid gray;

.title-second-section {
  padding-bottom: 1.5rem;
  font-size: 1.7em;
}

.second-section-register {
  padding: 1rem .5rem;
}
.text-register {
  font-size: 1.2rem;
  font-weight: 400;
  margin:  1rem 0;
}

`

const SecondSection = () => {

  return (
    <SecondSectionStyled className="second-section">
      <h2 className="title-second-section"> Preguntas frecuentes </h2>
      <div className="section-questions">
        <Question
          title={`¿Qué es Netflix?`}
          text={`Netflix es un servicio de streaming que ofrece una gran variedad 
          de películas, series y documentales premiados en casi cualquier pantalla conectada a internet.
          Todo lo que quieras ver, sin límites ni comerciales, a un costo muy accesible. 
          Siempre hay algo nuevo por descubrir, ¡y todas las semanas se agregan más películas y series!`}
        />
        <Question
          title={`¿Cuánto cuesta Netflix?`}
          text={`Disfruta Netflix en tu smartphone, tablet, smart TV, laptop o dispositivo de streaming, 
          todo por una tarifa plana mensual. Planes desde $139 hasta $266 al mes. 
          Sin costos adicionales ni contratos.`}
        />
        <Question
          title={`¿Dónde puedo ver Netflix?`}
          text={`Ve donde quieras, cuando quieras y en todos los dispositivos que quieras. 
          Inicia sesión en tu cuenta de Netflix para ver contenido al instante a través de netflix.com 
          desde tu computadora personal o en cualquier dispositivo con conexión a internet 
          que cuente con la app de Netflix, como smart TV, smartphones, 
          tablets, reproductores multimedia y consolas de juegos.

          Además, puedes descargar tus series favoritas con iOS, Android o la app para Windows 10. 
          Con la función de descarga, puedes ver donde vayas y sin conexión a internet. 
          Lleva Netflix contigo adonde sea.`}
        />
        <Question
          title={`¿Cómo cancelo ?`}
          text={`Netflix es flexible. Sin contratos molestos ni compromisos. 
          Cancela la membresía online con solo dos clics. No hay cargos por cancelación. 
          Empieza y termina cuando quieras.`}
        />
        <Question
          title={`¿Qué puedo ver en Netflix?`}
          text={`Netflix tiene un amplio catálogo de películas, series, documentales, 
          animes, originales premiados y más. Todo lo que quieras ver, cuando quieras.`}
        />
        <div className="second-section-register">
          <p className="text-register">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta
            o reiniciar tu membresía Netflix.
          </p>
          <InputRegister />
          <ButonStart />
        </div>

      </div>

    </SecondSectionStyled>
  )
}

export default SecondSection