import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from './config/apolloConfig';
import './App.css';

// Data
import dummyData from './utils/_dummy';

// Components
import NestedList from "./components/nestedList/NestedList";

const App = () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local state and query manipulations
  return (
    <ApolloProvider client={apolloClient}>
      <NestedList list={dummyData} />
    </ApolloProvider>
  )
}

export default App;
