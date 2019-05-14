import React, { useState } from 'react';
import styled from 'styled-components';
import ChatScreen from 'components/ChatRoom/ChatScreen';

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`
const UserData = styled.input`
  padding: 0.5rem;
  width: 40%;
  margin: 1rem auto;
  line-height: 2;
  border-radius: 0.5rem;
  border: 1.5px solid rgba(65, 184, 131, 0.8);
  &:focus {
    outline: none;
  }
`
const GoToChat = styled.button`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem auto;
  text-shadow: 2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3);
  &:hover {
    background: none;
    color: rgba(0,0,0,0.6);
  }
  &:focus {
    background: none;
    outline: none;
  }
`

const Form = () => {
  const [userName, addUser] = useState('');
  const [userLogged, setLogged] = useState(false)
  const enterChatroom = userName => {
    setLogged(userName !== '');
    console.log('Open chatroom with user: ', userName)
  }
  const handleSumbit = e => e.preventDefault();
  return (
    <Wrapper onSubmit={handleSumbit}>
    {
      userLogged
      ? <ChatScreen />
      : (
        <>
          <UserData
            value={userName}
            onChange={e => addUser(e.target.value)}
            placeholder={'Enter your name to join...'}>
          </UserData>
          <GoToChat onClick={e => enterChatroom(userName)}>Join chatroom</GoToChat>
        </>
      )
    }
    </Wrapper>
  )
}

export default Form;
