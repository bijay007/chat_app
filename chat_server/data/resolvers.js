// Contains function that resolve the graph queries, mutations and subscriptions

import chalk from 'chalk';
import pubsub from './pubsub';

// defaults
const chatsArr = [];
const CHAT_SUBSCRIPTION_CHANNEL = 'CHAT_CHANNEL';

const resolvers = {
  Query: {
    getChats: () => {
      const mockChat = {
        id: Math.round(Math.random() * 10),
        name: 'Bijay',
        message: 'Hope this works :D'
      }
      console.log(`${chalk.green.bold('QUERY : getChats')} : TRIGGERED`)
      return [mockChat]
    }
  },

  Mutation: {
    sendMessage(parent, {sender, message}, { pubsub }) {
      const newChatMsg = {
        id: chatsArr.length + 1,
        sender, message
      }
      chatsArr.push(newChat);
      pubsub.publish('CHAT_CHANNEL', { newMessage: newChatMsg });
      console.log(`${chalk.green.bold('MUTATION : sendMessage')} : TRIGGERED`)
      return newChatMsg;
    }
  },

  Subscription: {
    newMessage: {
      subscribe: (parent, args, { pubsub }) => {
        console.log(`${chalk.green.bold('SUBSCRIPTION : newMessage')} : TRIGGERED`)
        return pubsub.asyncIterator(CHAT_SUBSCRIPTION_CHANNEL)
      }
    }
  }
}

export default resolvers;
