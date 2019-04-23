import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';

// Components
import Home from './components/Home';

const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local state and query manipulations
  return (
    <ApolloProvider client={apolloClient}>
      <Home />
    </ApolloProvider>
  )
}

export default App;
