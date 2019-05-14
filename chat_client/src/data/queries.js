import gql from 'graphql-tag';

export const GET_CHATS_QUERY = gql`
  query GetChatsQuery {
    getChats {
      id,
      sender,
      message
    }
  }
`
