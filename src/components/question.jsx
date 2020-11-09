import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'


const QuestionStyled = styled.div`

  position: relative;
  margin-bottom: .3rem;

.buton {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
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
    z-index: 5;
    border-top: 1px solid #000;
    font-size: 1.2rem;
    height: 0;
    transform: translate(0) scaleY(0);
    transform-origin: center top;
    transition: transform .1s cubic-bezier(0.25, 0.1, 0.26, 1.04);
    
}

.show-tooltip {
    display: block;
    transform: translateY(0) scaleY(1);
    transition: transform .5s cubic-bezier(.17,.67,.62,1.6);
    height: max-content;
    padding: 1.5rem 1rem;
}

.active {
    transform: rotateX(180deg);
    transition: .5s;
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
        <p className="description-item" >
          {text}
        </p>
      </div>
    </QuestionStyled>
  )
}

export default Question