import * as React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import Authorization from '../../Authorization';
import {createStackNavigator} from '@react-navigation/stack';
import * as SCREEN from '../constants/screen.constant';
import {AppNavigator} from './app.routes';
import {AuthNavigator} from './auth.routes';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from './no-prop.routes';

const InitialStack = createStackNavigator();

const IntNavigation = props => {
  return (
    <NavigationContainer ref={navigationRef}>
      <InitialStack.Navigator
        screenOptions={{
          gestureEnabled: false,
          animationEnabled: false,
          transitionConfig: () => fromRight(500),
        }}>
        <InitialStack.Screen
          name={SCREEN.AUTHORIZATION}
          component={Authorization}
          options={{
            headerShown: false
          }}
        />
        <InitialStack.Screen
          name={SCREEN.APP_NAVIGATOR}
          component={AppNavigator}
          options={{
            headerShown: false
          }}
        />
        <InitialStack.Screen
          name={SCREEN.AUTH_NAVIGATOR}
          component={AuthNavigator}
          options={{
            headerShown: false
          }}
        />
      </InitialStack.Navigator>
    </NavigationContainer>
  )
};

export default IntNavigation;