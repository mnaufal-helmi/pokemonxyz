import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './app/screen/splash';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
