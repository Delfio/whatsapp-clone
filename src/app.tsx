import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';


const App: React.FC = () => {
  
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#312e38" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;