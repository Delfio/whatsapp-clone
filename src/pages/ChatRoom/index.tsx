import React, { useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ChatMessage from '../../components/ChatMessage';

import ChatRoomData from '../../data/Chats';

// import { Container } from './styles';
type IChatRoom = {
  id: number;
  name: string;
}


const ChatRoom: React.FC = () => {
  const routes = useRoute();
  const { params } = routes;
  const { setOptions } = useNavigation();

  useEffect(() => {
    const { name } = (params as IChatRoom);
    setOptions({
      title: name
    })
  }, [params]);

  return (
    <SafeAreaView>
      <FlatList 
        data={ChatRoomData.messages}
        renderItem={({item}) => <ChatMessage data={item} />}
        keyExtractor={({id}) => id}
      />
    </SafeAreaView>
  );
}

export default ChatRoom;