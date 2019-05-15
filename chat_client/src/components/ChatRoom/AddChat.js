import React, { useState } from 'react';
import { ApolloConsumer } from 'react-apollo';
import styled from 'styled-components';
import icon from 'assests/send-icon.svg';
import { SEND_MESSAGE_MUTATION } from 'data/mutations';

const MessageBox = styled.footer`
  display: flex;
  border-radius: 0.5rem;
  margin-top: 2rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
`
const Button = styled.button`
  padding: 0.25rem;
  width: 20%;
  display: flex;
  justify-content: center;
  &:hover, &:focus {
    outline: none;
    background: transparent;
  }
`
const Icon = styled.img`
  width: inherit;
`

const AddChat = props => {
  const { currentUser } = props;
  const [message, extractMessage] = useState('');
  const sendMessage =  async function (message, apolloClient) {
    console.log('Message by user ', currentUser, ' was ', message);
    await apolloClient.mutate({
      mutation: SEND_MESSAGE_MUTATION,
      variables: {
        sender: currentUser,
        message: message
      }
    })
  }
  return (
    <ApolloConsumer>
      {
        apolloClient => (
          <MessageBox>
            <Input
              placeholder={'Press Enter or Send to publish message..'}
              onChange={e => extractMessage(e.target.value)}
            />
            <Button onClick={() => sendMessage(message, apolloClient)}>
              <Icon src={icon} /> {/* Icon made by Freepik from www.flaticon.com */}
            </Button>
          </MessageBox>     
        )
      }
    </ApolloConsumer>
  )
}

export default AddChat;
