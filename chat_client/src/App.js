import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';
import './App.css';

const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local state and query manipulations
  return (
    <ApolloProvider client={apolloClient}>
      <div className={'App'}>Hello</div>
    </ApolloProvider>
  )
}

export default App;
