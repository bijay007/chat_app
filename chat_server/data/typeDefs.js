const typeDefs = `
  type Query {
    getUser: User
  }
  type User {
    id: Int!
    name: String!
    message: String!
  }
`
export default typeDefs;
