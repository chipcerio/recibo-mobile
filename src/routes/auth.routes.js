import * as React from 'react';

import LoginScreen from '../screens/Login/LoginScreen';

import { createStackNavigator } from '@react-navigation/stack';
import { fromRight } from 'react-navigation-transitions';
import * as SCREEN from '../constants/screen.constant';
import RegistrationScreen from '../screens/Registration/RegistrationScreen';
import ConfirmationCodeScreen from '../screens/ConfirmationCode/ConfirmationCodeScreen';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN.LOGIN_SCREEN}
      screenOptions={{
        gestureEnabled: false,
        animationEnabled: false,
        transitionConfig: () => fromRight(500),
      }}>
      <AuthStack.Screen
        name={SCREEN.LOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name={SCREEN.REGISTRATION_SCREEN}
        component={RegistrationScreen}
      />

      <AuthStack.Screen
        name={SCREEN.CONFIRMATION_CODE_SCREEN}
        component={ConfirmationCodeScreen}
      />
    </AuthStack.Navigator>
  );
};
