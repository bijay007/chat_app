import React from 'react';
import styled from 'styled-components';
import logo from 'assests/logo.svg';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 2rem 1rem;
`
const Title = styled.h1`
  font-weight: 500;
  padding-right: 1rem;
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
