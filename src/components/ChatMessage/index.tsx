import React from 'react';
import { Text, View } from 'react-native';
import { IMessage } from '../../utils/types';

// import { Container } from './styles';

type IChatMessage = {
    data: IMessage
}

const ChatMessage: React.FC<IChatMessage> = ({
    data
}) => {

    const { 
        content,
        createdAt,
        id,
     } = data;

  return (
    <View>
        <Text>{content}</Text>
    </View>
  );
}

export default ChatMessage;