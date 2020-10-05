import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigation} from './src/navigation/MainStackNavigation';

function App() {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
}
export default App;
