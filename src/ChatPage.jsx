// src/components/ChatPage.js
import React from 'react';
import List from './components/List/List';
import Chat from './components/chats/Chat';

const ChatPage = () => {
  return (
    <div className='container'>
      <List />
      <Chat />
    </div>
  );
};

export default ChatPage;
