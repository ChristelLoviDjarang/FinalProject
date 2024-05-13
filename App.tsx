import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from './src/Route';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
