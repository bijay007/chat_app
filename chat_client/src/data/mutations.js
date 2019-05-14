import gql from 'graphql-tag';

export const SEND_MESSAGE_MUTATION = gql`
  mutation SendMessageMutation($sender: String!, $message: String!) {
    sendMessage(
      sender: $sender,
      message: $message
    ) {
      sender
      message
    }
  }
`;
