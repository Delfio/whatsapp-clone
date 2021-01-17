import React from 'react';
import { Image, Text, View } from 'react-native';
import { IChatRoom } from '../../utils/types';

import { Container, Avatar, ContainerMessages } from './styles';

type IChatList = {
  chatRoom: IChatRoom
}

const ChatListItem: React.FC<IChatList> = ({
  chatRoom,
  children
}) => {
  const { users } = chatRoom;
  return (
    <Container>
      <Avatar 
        resizeMode="cover"
        resizeMethod="scale"
        source={{
          uri: users[0].imageUri
        }}
      />
      <ContainerMessages>
        <Text>{users[0].name}</Text>
        <Text>{chatRoom.lastMessage.content}</Text>
        <Text>{chatRoom.lastMessage.createdAt}</Text>
      </ContainerMessages>
      <Text>Yesterday</Text>
    </Container>
  );
}

export default ChatListItem;