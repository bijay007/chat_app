import React from 'react';
import { View, Text } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import apolloClientOptions from '../config/apolloConfig';

export default () => {
  const apolloClient = new ApolloClient({...apolloClientOptions});
  // Apollo provider as top level wrapper to manage local state and query manipulations
  return (
    <ApolloProvider client={apolloClient}>
      <View>
        <Text>Check react dev tools to see what the client object provides ;)</Text>
      </View>
    </ApolloProvider>
  )
}
