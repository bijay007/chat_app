import React, { useState } from 'react';
import styled from 'styled-components';
import ChatScreen from 'components/ChatRoom/ChatScreen';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`
const UserName = styled.input`
  padding: 0.5rem;
  width: 40%;
  margin: 1rem auto;
  line-height: 2;
  border-radius: 0.5rem;
  border: 1.5px solid rgba(65, 184, 131, 0.8);
  &:focus {
    outline: none;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  }
`
const Button = styled.button`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem auto;
  text-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    background: none;
    color: rgba(0,0,0,0.6);
    text-shadow: 0 7px 14px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
  &:focus {
    background: none;
    outline: none;
  }
`

const Form = () => {
  const [userName, addUser] = useState('');
  const [userLogged, setLogged] = useState(false)
  const enterChatroom = userName => setLogged(userName !== '')
  const handleSumbit = e => e.preventDefault();
  return (
    <Wrapper onSubmit={handleSumbit}>
    {
      userLogged
      ? <ChatScreen currentUser={userName}/>
      : (
        <>
          <UserName
            value={userName}
            onChange={e => addUser(e.target.value)}
            placeholder={'Enter your name to join...'}>
          </UserName>
          <Button onClick={e => enterChatroom(userName)}>Join chatroom</Button>
        </>
      )
    }
    </Wrapper>
  )
}

export default Form;
