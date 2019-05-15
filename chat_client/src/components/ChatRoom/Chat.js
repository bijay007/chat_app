import React from 'react';
import styled from 'styled-components';

const ChatBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 0.75rem;
  h4 {
    margin: 0.25rem 0;
  }
  p {
    margin: 0;
    padding-left: 1rem;
  }
`

const Chat = props => {
  const styleName = string => string.charAt(0).toUpperCase() + string.slice(1)
  return (
    <ChatBlock>
      <h4>{styleName(props.chat.sender)} :</h4>
      <p>{props.chat.message}</p>
    </ChatBlock>
  )
}

export default Chat;