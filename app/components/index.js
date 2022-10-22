import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './LoadingScreen'
import HomeScreen from './Home'
import NewQuoteScreen from './NewQuote'
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Loading'}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewQuote" component={NewQuoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;