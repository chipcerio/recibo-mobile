import React from 'react'
import { View, Text } from 'react-native'

const ReciboScreen = () => {
    return (
        <View>
            <Text>Hello Recibo</Text>
        </View>
    )
}

ReciboScreen.tabOptions = () => ({
  title: 'Recibo',
  tabBarIcon: (props) => {
    return (
      <MaterialCommunityIcons
        name="receipt"
        size={25}
        color={props.focused ? '#3399FF' : '#333'}
      />
    );
  },
});

export default ReciboScreen
