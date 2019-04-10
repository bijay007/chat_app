import url from './endpoints';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Apollo client constructor needs two required parameters - link and cache.
const apolloClientOptions = {
  link: createHttpLink({ uri: `https://${url.ip.http}:${url.port.http}`}),
  cache: new InMemoryCache(),

  name: 'Read from package.json',
  version: 'Read from package.json',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all'
    },
    language: window.navigator.language || 'en-EN'
  }
}

export default apolloClientOptions;
