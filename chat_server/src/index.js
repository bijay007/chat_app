import * as Websocket from 'ws';
import { ApolloServer } from 'apollo-server';

// utils
import pubsub from '../data/pubsub';
import chalk from 'chalk';
import config from '../config';

import resolvers from '../data/resolvers'
import typeDefs from '../data/typeDefs'

// Create apollo server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: { pubsub }
})

/* // Create websocket server and listeners
const websocketServer = new Websocket.Server({ port: config.wsExternalPort })

websocketServer.on('connection', (websocket, req) => {
  console.log(chalk.green(`Websocket connection established.`))
  websocket.on('message', msg => {
    console.log(chalk.blue(`Message received ${JSON.stringify(msg)}`))
  })
}) */
console.log(chalk.red.bold(`...... STARTING SERVER ...... `));
apolloServer.listen(process.env.PORT || config.port).then(({ url }) => {
  console.log(
		chalk.blue.bold(
			`🚀..Apollo server ready at ${url}`
		)
	)
})
