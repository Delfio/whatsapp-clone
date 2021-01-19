import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './MainTabNavigator';
import { colors } from '../constants';
import { Octicons, MaterialCommunityIcons, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
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
        <Stack.Screen
          // options={({route}) => {
          //   console.log(route.params)
          //   return {
          //     title: route.params.id
          //   }
          // }}
          options={{
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  justifyContent: 'space-between',
                  marginRight: 10
                }}
              >
                <FontAwesome5 
                  name="video"
                  size={22} 
                  color="white" 
                />
                <MaterialIcons
                  name="call"
                  size={22} 
                  color="white" 
                />
                <MaterialCommunityIcons 
                  name="dots-vertical"
                  size={24}
                  color="white"
                />
              </View>
            )
          }}
          name="chatroom" 
          component={ChatRoom} 
        />
      </Stack.Navigator>
  );
}

export default RootNavigator;