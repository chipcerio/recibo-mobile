import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {fromRight} from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import {TabNavigator} from './tab.routes';

const AppStack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator
      initialRouteName={SCREEN.TAB_NAVIGATOR}
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
        transitionConfig: () => fromRight(500),
      }}>
      <AppStack.Screen
        name={SCREEN.TAB_NAVIGATOR}
        component={TabNavigator}
        options={{header: () => false}}
      />
    </AppStack.Navigator>
  );
};
