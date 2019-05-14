import React, { useState } from 'react';
import styled from 'styled-components';
import ChatBlock from './ChatBlock';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid red;
`

const ChatScreen = () => {
    let chats = [
      {id: '1', sender: 'Bijay', message: 'Hello'},
      {id: '2', sender: 'Marta', message: 'Hey, how it\'s goin?'},
    ]
    return (
      <Wrapper>
        {
          chats.map((chat, index) => <ChatBlock id={index} chat={chat} />)
        }
      </Wrapper>
    )
}

export default ChatScreen;
