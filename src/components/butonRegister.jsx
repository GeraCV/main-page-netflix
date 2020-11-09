import React from 'react'
import styled from 'styled-components'

const InptRegister = styled.input`

  padding: 1rem .5rem;
  width: 100%;
`


const InputRegister = () => {

  return (
    <InptRegister type="email" placeholder="Email" />
  )

}

export default InputRegister