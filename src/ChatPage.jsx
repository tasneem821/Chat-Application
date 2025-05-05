import React from 'react';
import List from './components/List/List';
import Chat from './components/chats/Chat';
import Profile from './components/profile/Profile';

const ChatPage = () => {
  return (
    <div className='container' style={{ display: 'flex' }}>
      <List />
      <Chat />
      <Profile />
    </div>
  );
};

export default ChatPage;
