import styled from 'styled-components/native';

type IMessageStatus = {
  read?: boolean
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  position: relative;
  align-items: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.1)
`;


export const ContainerMessages = styled.View`
  justify-content: space-around;
  align-items: flex-start;
  width: 80%;
`;

export const NameOfUser = styled.Text`
  font-size: 16px;
  font-weight: bold
`;

export const ContainerAvatar = styled.View`
  width: 20%;
`;

export const Avatar = styled.Image`
    width: 65px;
    height: 65px;

    border-radius: 50px;
`;

export const Time = styled.View`
  flex-wrap: nowrap;
  position: absolute;
  right: 0;
`;

export const TimeText = styled.Text<IMessageStatus>`
  font-size: 16px;
  color: ${props => props.read ? 'green': 'grey'};
`;