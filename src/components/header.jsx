import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  
  img {
    width: 6rem;
  }

  a {
    text-decoration: none;
    background: #e50914;
    color: white;
    padding: .3rem .8rem;
    border-radius: .3rem;
    margin-right: .5rem;
  }
  
`
const Header = () => {
  return (
    <HeaderStyled className="main-header">
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" alt="brand" />
      <a href="/"> Inicia sesión </a>
    </HeaderStyled>
  )

}
export default Header

