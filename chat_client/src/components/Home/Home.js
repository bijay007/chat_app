import React, { Component } from 'react';
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
  width: 80%;
`
class Home extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Body>
          <Form />
        </Body>
      </Wrapper>
    )
  }
}

export default Home;
