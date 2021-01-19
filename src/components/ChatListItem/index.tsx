import React, { useMemo, useCallback } from 'react';
import { IChatRoom } from '../../utils/types';
import { GestureResponderEvent, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { 
  Container,
  Avatar, 
  ContainerMessages,
  Time,
  TimeText,
  ContainerAvatar,
  NameOfUser
} from './styles';

type IChatList = {
  chatRoom: IChatRoom
}

const ChatListItem: React.FC<IChatList> = ({
  chatRoom,
}) => {
  const { users, lastMessage } = chatRoom;

  const { navigate } = useNavigation();
  const handleClickChat = useCallback((_: GestureResponderEvent) => {
    navigate('chatroom', { 
      id: chatRoom.id,
      name: users[0].name,
    });
  }, [chatRoom]);

  const timeFormated = useMemo(() => {
    const time = new Date(lastMessage.createdAt)

    // Se for no mesmo dia - exibir o hórario da mensagem
    // Caso seja dias diferentes - exibir a data da mensagem
    // para compara, é preciso - dia/mes/ano
    
    if(time.toLocaleDateString('pt-BR') !== new Date().toLocaleDateString('pt-BR')){

      // Pelo visto o toLocateDateString no react native não ta funcionando legal - igual nos navegadores.
      // por isto esse aglomerado de fn
      return `${time.getDate()}/${time.getMonth()}/${time.getFullYear()} ${time.getHours()}:${time.getMinutes()}`
    }

    return `${time.getHours()}:${time.getMinutes()}`
  }, [lastMessage]);

  return (
    <TouchableWithoutFeedback
      onPress={handleClickChat}
    >
      <Container>
        <ContainerAvatar>
          <Avatar 
            resizeMode="cover"
            resizeMethod="scale"
            source={{
              uri: users[0].imageUri
            }}
          />
        </ContainerAvatar>
        <ContainerMessages>
          <NameOfUser>{users[0].name}</NameOfUser>
          <Time>
            <TimeText>{timeFormated}</TimeText>
          </Time>
          <Text numberOfLines={1} >{lastMessage.content}</Text>
        </ContainerMessages>
      </Container>  
    </TouchableWithoutFeedback>
    
  );
}

export default ChatListItem;