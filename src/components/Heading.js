import React from 'react'
import styled from 'styled-components'


const Header = styled.header`
max-width: 70rem;
margin : 2rem auto;
text-align:center;
`;

const H1 = styled.h1`
font-family : 'oswald' , sans-serif;
margin:bottom:1rem ; 
`

export const Heading = () => {
  return (
    <Header>
    <H1>Image App</H1>
    <p>See the Amazing Images and Feel Positive all Time</p>
      <p>Made By Mukesh Kumar</p>
    </Header>
  )
}
