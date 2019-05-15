import React from 'react';
import styled from 'styled-components';
// Apollo
import { ApolloConsumer } from 'react-apollo';
import { GET_CHATS_QUERY } from 'data/queries';
// Components
import Chat from './Chat';
import AddChat from './AddChat';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`

const ChatList = props => (
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
                id: '_' + Date.now(),
                sender: 'Admin',
                message: 'Welcome to the chatroom...',
                created: new Date().toLocaleString()
              }]
            }
          });
        }
        console.log('Apollo client: ', apolloClient);
        let chatlist = apolloClient.readQuery({query: GET_CHATS_QUERY})
        return (
          <Wrapper>
            {
              chatlist.getChats.map((chat, index) => <Chat key={index + Math.random()} chat={chat} />)
            }
            <AddChat currentUser={currentUser}/>
          </Wrapper>
        )
      }
    }
  </ApolloConsumer>
)

export default ChatList;
