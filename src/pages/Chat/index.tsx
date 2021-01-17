import React from 'react';
import { FlatList, SafeAreaView, Text } from 'react-native';
import ChatListItem from '../../components/ChatListItem';

import ChatRooms from '../../data/ChatRooms';
import { IChatRoom } from '../../utils/types';

import { Container } from './styles';

const Chat: React.FC = () => {
  return (
    <Container>
      {/* <Text>Inicío</Text> */}
      <FlatList<IChatRoom>
        style={{
          flex: 1
        }}
        data={ChatRooms}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <ChatListItem chatRoom={item}/>
        )}
      />
    </Container>
  );  
}

export default Chat;