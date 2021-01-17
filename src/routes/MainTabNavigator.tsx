import React from 'react';
import { Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colors } from '../constants';
import { Fontisto } from '@expo/vector-icons';

const Top = createMaterialTopTabNavigator();

// import { Container } from './styles';

import ChatPage from '../pages/Chat';

const teste = () => (
    <View>
        <Text>asdfasdf</Text>
    </View>
)

const MainTabNavigator: React.FC = () => {
  return (
    <Top.Navigator
        tabBarOptions={{
            activeTintColor: colors.dark.text,
            style: {
                backgroundColor: colors.ligth.tint
            },
            indicatorStyle: {
                backgroundColor: colors.dark.tint,
                height: 4
            },
            labelStyle: {
                fontWeight: 'bold'
            },
            showIcon: true
        }}
    >
        <Top.Screen 
            name="C"
            options={{
                tabBarIcon:(
                    ({ color }:{ color: string }) => (
                        <Fontisto 
                            name="camera"
                            color={color}
                            size={18}
                        />
                    )
                ),
                tabBarLabel: () => null,
            }}
            component={teste}
        />
        <Top.Screen 
            name="CONVERSAS"
            component={ChatPage}
        />
        <Top.Screen 
            name="STATUS"
            component={teste}
        />
        <Top.Screen 
            name="CHAMADAS"
            component={teste}
        />
    </Top.Navigator>
  )
}

export default MainTabNavigator;