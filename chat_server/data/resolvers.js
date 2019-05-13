// Contains function that resolve the graph queries, mutations and subscriptions

import chalk from 'chalk';
import pubsub from './pubsub';

// defaults
const chatsArr = [];
const CHAT_SUBSCRIPTION_CHANNEL = 'CHAT_CHANNEL';

const resolvers = {
  Query: {
    getChats: () => {
      const date = new Date();
      const mockChat = {
        id: date.toLocaleString(),
        sender: 'Bijay',
        message: 'Hope this works :D'
      }
      console.log(`${chalk.green.bold('QUERY : getChats')} : TRIGGERED`)
      return [mockChat]
    }
  },

  Mutation: {
    sendMessage(parent, {sender, message}, { pubsub }) {
      const date = new Date();
      const newChatMsg = {
        id: date.toLocaleString(),
        sender, message
      }
      chatsArr.push(newChatMsg);
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
