// Contains the schema for the Chat object as well as the 3 major graphql operations on this Chat data
const typeDefs = `
  type Chat {
    id: String!
    sender: String!
    message: String!
  }
  type Query {
    getChats: [Chat]
  }
  type Mutation {
    sendMessage(sender: String!, message: String!): Chat
  }
  type Subscription {
    newMessage: Chat
  }
`
export default typeDefs;
