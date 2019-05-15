import { useEffect } from 'react';
import { GET_CHATS_QUERY } from 'data/queries';
import { GET_MESSAGE_SUBSCRIPTION } from 'data/subscriptions';

import { graphql, compose, withApollo } from 'react-apollo';

const subscriptionOptions = {
  name: 'chatStream',
  options: {
    fetchPolicy: "cache-and-network",
    errorPolicy: "all"
  }
}
const withChatSubscriptionHOC = graphql(GET_CHATS_QUERY, subscriptionOptions);

const Subscription = (props) => {
  const subscribeToMoreChats = () => {
    props.chatStream.subscribeToMore({
      document: GET_MESSAGE_SUBSCRIPTION,
      updateQuery: (previousData, { subscriptionData }) => {
        return {
          getChats: [...previousData.getChats, subscriptionData.data.getMessage]
        }
      }
    });
  };

  useEffect(() => {
    subscribeToMoreChats();
  }, []);

  return null;
}

const EnhancedSubscription = compose(withApollo, withChatSubscriptionHOC)(Subscription);

export default EnhancedSubscription;
