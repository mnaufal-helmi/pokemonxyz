import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './app/screen/splash';
import Home from './app/screen/Home';
import LoginScreen from './app/screen/loginScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
