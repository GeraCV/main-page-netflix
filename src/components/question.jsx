import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'


const QuestionStyled = styled.div`

  position: relative;
  margin-bottom: .4rem;

  .buton {
    width: 100%;
    padding: 1rem;
    font-size: 1.1em;
    text-align: left;
    color: #fff;
    background: #303030;
    border-style: none;
    cursor: pointer;
    position:relative; 
  }

  .fa-chevron-down {
    position: absolute;
    right: 1rem;
    top: calc(50% - 8px);
  }

  .container-description {
    background: #303030;
    border-top: 1px solid #000;
    font-size: 1.2rem;
    height: 0;
    transform: translate(0) scaleY(0);
    transform-origin: top center;
    transition: transform 0 cubic-bezier(0.25, 0.1, 0.26, 1.04);
  }

  .description-question {
    text-align: left;
    font-size: 1em;
  }

  .show-tooltip {
    display: block;
    transform: translateY(0) scaleY(1);
    transition: transform .3s cubic-bezier(.17,.67,.62,1.6);
    height: max-content;
    padding: 1.5rem 1rem;
  }

  .active {
    transform: rotateX(180deg);
    transition: .5s;
  }

@media screen and (min-width: 550px) {

  padding: 0 1.2rem;

  .buton {
    font-size: 1.3em;
  }

  .description-question {
      font-size: 1.1em;
  }
}

 @media screen and (min-width: 950px) {

  .buton {
    width: 80%;
    font-size: 1.6em;
    padding: 1.5rem;
  }

  .description-question {
    font-size: 1.35em;
  }

  .container-description {
    width: 80%;
    margin: auto;
  }
}

@media screen and (min-width: 950px) {

  .buton {
    width: 65%;
  }

  .container-description {
    width: 65%;
  }
}
`

const Question = ({ title, text }) => {

  const referencia = useRef();
  const icon = useRef();
  const [state, setState] = useState(false);

  const changeValue = () => {
    setState(!state)
  }

  useEffect(() => {
    if (state === true) {
      referencia.current.classList.add("show-tooltip")
      icon.current.classList.add("active")
    }
    else {
      if (referencia.current.classList.contains("show-tooltip")) {
        referencia.current.classList.remove("show-tooltip")
        icon.current.classList.remove("active")
      }
    }
  })


  return (
    <QuestionStyled>
      <button className="buton" onClick={changeValue}> {title}
        <i className="fas fa-chevron-down" ref={icon}> </i>
      </button>
      <div className="container-description" ref={referencia}>
        <p className="description-question" >
          {text}
        </p>
      </div>
    </QuestionStyled>
  )
}

export default Question