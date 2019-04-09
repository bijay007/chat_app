import { ApolloServer } from 'apollo-server';

// Not yet fully defined
import resolvers from '../data/resolvers'
import typeDefs from '../data/typeDefs'

// Create server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

apolloServer.listen('4000').then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url} `);
});