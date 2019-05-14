import React from 'react';
import styled from 'styled-components';
import logo from 'assests/logo.svg';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem;
  max-height: 20vh;
`
const Title = styled.h1`
  font-weight: 500;
  padding-right: 1rem;
  text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
`
const Logo = styled.img`
  width: 2.5em;
  height: 2.5rem;
`

const Header = () => (
  <Wrapper>
    <Title>Chatter</Title>
    <Logo src={logo} />  {/* Icon made by Good Ware from www.flaticon.com */}
  </Wrapper>
)

export default Header;
