import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Content from './components/Content';
import LiveContent from './components/LiveContent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFBFF' }}>
          <Stack.Navigator style={{ backgroundColor:'#040F16' }}>
            <Stack.Screen name="Marine Keeper" component={Content}  />
            <Stack.Screen name="LiveContent" component={LiveContent} />
          </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
