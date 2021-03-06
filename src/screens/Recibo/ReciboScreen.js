import React from 'react';
import { View, Text } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ReciboScreen = () => {
  return (
    <View>
      <Text>Hello Recibo</Text>
    </View>
  );
};

ReciboScreen.tabOptions = () => ({
  title: 'Recibo',
  tabBarIcon: props => {
    return (
      <MaterialCommunityIcons
        name="receipt"
        size={25}
        color={props.focused ? '#3399FF' : '#333'}
      />
    );
  },
});

export default ReciboScreen;
