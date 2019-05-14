import React from 'react';
const ChatBlock = props => (
  <div>{`${props.chat.sender}: ${props.chat.message}`}</div>
)

export default ChatBlock;