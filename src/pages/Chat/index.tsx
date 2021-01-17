import React from 'react';
import ChatListItem from '../../components/ChatListItem';

import { Container } from './styles';

import ChatRooms from '../../data/ChatRooms';


const Chat: React.FC = () => {
  return (
    <Container>
      <ChatListItem  chatRoom={ChatRooms[0]} />
    </Container>
  );  
}

export default Chat;