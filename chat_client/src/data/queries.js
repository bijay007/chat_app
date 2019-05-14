import gql from 'graphql';

export const GET_CHATS = gql`
  query getChats {
    id,
    sender,
    message
  }
`
