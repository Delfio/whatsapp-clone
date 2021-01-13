import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


// import { Container } from './styles';

const teste = () => (
    <View>
        <Text>asdfasdf</Text>
    </View>
)

const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
        tabBarOptions={{
            style: {
                backgroundColor: "red"
            }
        }}            
    >
        <Tab.Screen name="Home" component={teste} />
        <Tab.Screen name="Settings" component={teste} />
    </Tab.Navigator>
  )
}

export default BottomNavigator;