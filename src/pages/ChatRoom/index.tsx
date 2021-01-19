import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useRoute, useNavigation, Route } from '@react-navigation/native';

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
    <View>
        <Text>chat room</Text>
    </View>
  );
}

export default ChatRoom;