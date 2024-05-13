import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, Home, Menu} from '../pages';

const Stack = createNativeStackNavigator();

const index = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default index;