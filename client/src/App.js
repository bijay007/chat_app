import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from '../config/apolloConfig';

export default () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper that can manage state and query manipulations in apollo cache for our whole app
  return (
    <ApolloProvider client={apolloClient}>
      <div>Check react dev tools to see what the client object provides ;)</div>
    </ApolloProvider>
  )
}
