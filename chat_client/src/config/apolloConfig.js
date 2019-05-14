import url from './endpoints';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { split } from 'apollo-link'
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'

const httpLink = new HttpLink({
  uri: `http://${url.ip.http}:${url.port.http}`,
  credentials: 'same-origin',
})

const wsLink = new WebSocketLink({
	uri: `ws://${url.ip.ws}:${url.port.ws}`,
	options: {
		reconnect: true,
	},
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)


// Apollo client constructor needs two required parameters - link and cache.
const apolloClientOptions = {
  link: link,
  cache: new InMemoryCache(),

  // Optional data below
  name: 'Read from package.json',
  version: 'Read from package.json',
  connectToDevTools: true,
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
