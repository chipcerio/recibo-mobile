import * as React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeTabNavigator } from './tab-home.routes';
import { ReciboTabNavigator } from './tab-recibo.routes';
// import MenuScreen from '../screens/Menu/MenuScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ReciboScreen from '../screens/Recibo/ReciboScreen';
import MenuScreen from '../screens/Menu/MenuScreen';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const notifCount = {
    position: 'absolute',
    top: -4,
    right: -5,
    zIndex: 1,
    width: 17,
    height: 17,
    backgroundColor: '#cc0000',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#3399FF',
        inactiveTintColor: '#333',
        keyboardHidesTabBar: true,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={HomeScreen.tabOptions}
      />
      <Tab.Screen
        name="Recibo"
        component={ReciboTabNavigator}
        options={ReciboScreen.tabOptions}
      />
      <Tab.Screen
        name="Menu"
        component={MenuScreen}
        options={MenuScreen.tabOptions}
      />
    </Tab.Navigator>
  );
};
