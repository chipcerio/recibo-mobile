import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import ReciboScreen from '../screens/Recibo/ReciboScreen';

const ReciboStack = createStackNavigator();

export const ReciboTabNavigator = () => (
  <ReciboStack.Navigator
    initialRouteName={SCREEN.RECIBO_SCREEN}
    screenOptions={{
      gestureEnabled: true,
      animationEnabled: false,
      transitionConfig: () => fromRight(500),
    }}>
    <ReciboStack.Screen
      name={SCREEN.RECIBO_SCREEN}
      component={ReciboScreen}
      options={{header: () => false}}
    />
  </ReciboStack.Navigator>
);
