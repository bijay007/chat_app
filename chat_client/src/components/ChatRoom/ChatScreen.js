import React from 'react';
import styled from 'styled-components';
// Apollo
import { ApolloConsumer } from 'react-apollo';
import {GET_CHATS_QUERY} from 'data/queries';
// Components
import ChatBlock from './ChatBlock';
import NewMessage from './NewMessage';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
`

const ChatScreen = () => (
  <ApolloConsumer>
    {
      apolloClient => {
/*         try {
          apolloClient.readQuery({ query: GET_CHATS_QUERY });
        } catch (e) {
          console.log(e)
          apolloClient.writeQuery({
            query: GET_CHATS_QUERY,
            data: {
              getChats: [{
                __typename: 'Chat',
                id: '',
                sender: '',
                message: ''
              }]
            }
          });
        } */
        console.log('Apollo client: ', apolloClient);
        //console.log('chatlist', apolloClient.readQuery({query: GET_CHATS_QUERY}));
        let chatlist = [
          {id: '1', sender: 'bijay', message: 'Hello'},
          {id: '2', sender: 'marta', message: 'Hey, how it\'s goin?'},
        ]
        return (
          <Wrapper>
            {
              chatlist.map((chat, index) => <ChatBlock id={index} chat={chat} />)
            }
            <NewMessage />
          </Wrapper>
        )
      }
    }
  </ApolloConsumer>
)

export default ChatScreen;
