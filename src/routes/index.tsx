import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './bottom';
import { colors } from '../constants';
import { Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const RootNavigator: React.FC = () => {
  return (
      <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.ligth.tint
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
                        size={24}
                        color='white'
                    />
                    <MaterialCommunityIcons 
                        name="dots-vertical"
                        size={24}
                        color='white'
                    />
                </View>
              )
          }} name="root" component={BottomNavigator} />
      </Stack.Navigator>
  );
}

export default RootNavigator;