import React from 'react';
import styled from 'styled-components';
import icon from 'assests/send-icon.svg'

const MessageBox = styled.footer`
  display: flex;
  border-radius: 0.5rem;
  margin-top: 2rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`
const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 0.5rem;
  padding: 1rem;
  width: 80%;
`
const Button = styled.button`
  padding: 0.25rem;
  width: 20%;
  display: flex;
  justify-content: center;
  &:hover, &:focus {
    outline: none;
    background: transparent;
  }
`
const Icon = styled.img`
  width: inherit;
`

class NewMessage extends React.Component {
  render() {
    console.log(icon)
    return (
      <MessageBox>
        <Input placeholder={'Press Enter or Send to publish message..'} />
        <Button>
          <Icon src={icon} /> {/* Icon made by Freepik from www.flaticon.com */}
        </Button>
      </MessageBox>
    )
  }
}

export default NewMessage;
