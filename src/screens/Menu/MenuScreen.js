import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MenuScreen = () => {
  return (
    <SafeAreaView>
      <Text>Menu Screen</Text>
    </SafeAreaView>
  );
};

MenuScreen.tabOptions = () => ({
  title: 'Menu',
  tabBarIcon: props => {
    return (
      <MaterialCommunityIcons
        name="menu"
        size={25}
        color={props.focused ? '#3399FF' : '#333'}
      />
    );
  },
});

export default MenuScreen;
