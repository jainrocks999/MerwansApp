import React from 'react';
import { View, Text,SafeAreaView ,LogBox} from 'react-native';
import Navigation from './src/navigation/index';
const App = () => {
  LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();
   return (
      <SafeAreaView style={{flex:1}}>
        <Navigation/>
      </SafeAreaView>
    
  )
}
export default App;