import React from 'react'
import styled from 'styled-components'

const BtnStart = styled.button`
background: #e50914;
border-style: none;
color: #fff;
padding: .7rem 1rem;
font-size: 1rem;
font-weight: 400;
margin: 1rem 0;
cursor: pointer;

.fa-angle-right {
  margin-left: 1rem;
}
`

const ButonStart = () => {
  return (
    <BtnStart> COMIENZA YA
      <i className="fas fa-angle-right"></i>
    </BtnStart>
  )
}

export default ButonStart