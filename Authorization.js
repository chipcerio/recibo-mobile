import React, { useEffect } from 'react';
import {View, Text} from 'react-native';
import {useNavigation, StackActions, CommonActions} from '@react-navigation/native';
import * as SCREEN from './src/constants/screen.constant';
import { CognitoAuthModel } from './src/models/auth.model';
import { Auth } from 'aws-amplify';

const Authorization = () => {
  const navigation = useNavigation();

  useEffect(() => {
    getUserInfo();
    navigation.dispatch(StackActions.replace(SCREEN.AUTH_NAVIGATOR))
  }, []);

  const getUserInfo = async () => {
    try {
      const response = await Auth.currentAuthenticatedUser();
      const auth_user = CognitoAuthModel(response);
      console.log('response currentAuthenticatedUser', response);
      // console.log('response currentUserCredentials', await Auth.currentUserCredentials());
      const response2 = await Auth.currentUserInfo();
      console.log('response currentUserInfo', response2);
      const response3 = await Auth.currentSession();
      console.log('response currentSession', response3);
    } catch (err) {
      console.log('error catch', err);
    }
  }

  return (
    <View>
      <Text>Hello!</Text>
    </View>
  );
};

export default Authorization;
