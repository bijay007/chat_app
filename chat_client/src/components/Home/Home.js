import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header/Header';
import Form from 'components/Form/Form';

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Body = styled.section`
  padding: 1rem;
  width: 80vw;
  max-height: 80vh;
`
const Home = () => (
  <Wrapper>
    <Header />
    <Body>
      <Form />
    </Body>
  </Wrapper>
)

export default Home;
