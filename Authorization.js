import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {useNavigation, StackActions, CommonActions} from '@react-navigation/native';
import * as SCREEN from './src/constants/screen.constant';

const Authorization = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.dispatch(StackActions.replace(SCREEN.AUTH_NAVIGATOR))
  }, []);

  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
};

export default Authorization;
