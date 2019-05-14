import React from 'react';

const ChatBlock = props => {
  const styleName = string => string.charAt(0).toUpperCase() + string.slice(1)
  return (
    <div style={{paddingBottom: '0.5rem'}}>
      {`${styleName(props.chat.sender)}: ${props.chat.message}`}
    </div>
  )
}

export default ChatBlock;