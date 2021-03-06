import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './MainTabNavigator';
import { colors } from '../constants';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import ChatRoom from '../pages/ChatRoom';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.ligth.tint,
                shadowOpacity: 0,
                elevation: 0
            },
            headerTintColor: colors.ligth.background,
            headerTitleAlign: 'left',
            headerTitleStyle: {
                fontWeight: 'bold',

            }
        }}
      >
        <Stack.Screen  options={{
              title: 'WhatsApp',
              headerRight: () => (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: 60,
                        marginRight: 10
                    }}
                >
                    <Octicons 
                        name="search"
                        size={22}
                        color='white'
                    />
                    <MaterialCommunityIcons 
                        name="dots-vertical"
                        size={22}
                        color='white'
                    />
                </View>
              )
          }} 
          name="root" 
          component={BottomNavigator} 
        />
        <Stack.Screen  options={{
              title: 'chatroom',
          }} 
          name="chatroom" 
          component={ChatRoom} 
        />
      </Stack.Navigator>
  );
}

export default RootNavigator;