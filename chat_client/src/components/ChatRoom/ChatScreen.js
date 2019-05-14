import React from 'react';
import styled from 'styled-components';
// Apollo
import { ApolloConsumer } from 'react-apollo';
import { GET_CHATS_QUERY } from 'data/queries';
// Components
import ChatBlock from './ChatBlock';
import NewMessage from './NewMessage';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`

const ChatScreen = props => (
  <ApolloConsumer>
    {
      apolloClient => {
        const { currentUser } = props;
        try {
          apolloClient.readQuery({ query: GET_CHATS_QUERY });
        } catch (e) {
          apolloClient.writeQuery({
            query: GET_CHATS_QUERY,
            data: {
              getChats: [{
                __typename: 'Chat',
                id: Date.now(),
                sender: 'Admin',
                message: 'Welcome to the chatroom...'
              }]
            }
          });
        }
        console.log('Apollo client: ', apolloClient);
        let chatlist = apolloClient.readQuery({query: GET_CHATS_QUERY})
        return (
          <Wrapper>
            {
              chatlist.getChats.map((chat, index) => <ChatBlock key={index + Math.random()} chat={chat} />)
            }
            <NewMessage currentUser={currentUser}/>
          </Wrapper>
        )
      }
    }
  </ApolloConsumer>
)

export default ChatScreen;
