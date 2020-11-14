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
    font-size: 1em;
    text-decoration: none;
    background: #e50914;
    color: white;
    padding: .3rem .8rem;
    border-radius: .3rem;
  }

@media screen and (min-width: 500px) {
    padding: 1rem 1.5rem;
}

@media screen and (min-width: 550px) {
  padding: 1.5rem 3.5rem;

  img {
    width: 7rem;
  }

  a{
    font-size: 1.2em;
  }
}

 @media screen and (min-width: 950px) {
  img {
    width: 8rem;
  }
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

