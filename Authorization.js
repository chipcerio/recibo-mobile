import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import * as SCREEN from './src/constants/screen.constant';
import { CognitoAuthModel } from './src/models/auth.model';
import { Auth } from 'aws-amplify';
import { STORE_ACCESS_TOKEN } from './src/constants/common.constant';
import { useDispatch } from 'react-redux';
import { setAccessToken } from './src/redux/actions/auth/auth.actions';
import AsyncStorage from '@react-native-community/async-storage';
import ScreenLoading from './src/components/ScreenLoading/ScreenLoading';

const Authorization = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    _getUserInfo();
  }, []);

  const _getUserInfo = async () => {
    try {
      setLoading(true);
      const session = await Auth.currentSession();
      const auth = CognitoAuthModel(session);
      dispatch(setAccessToken(auth.accessToken.jwtToken));
      AsyncStorage.setItem(STORE_ACCESS_TOKEN, auth.accessToken.jwtToken);
      setLoading(false);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN.APP_NAVIGATOR }],
      });
      navigation.dispatch(resetAction);
    } catch (err) {
      setLoading(false);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN.AUTH_NAVIGATOR }],
      });
      navigation.dispatch(resetAction);
    }
  };

  return <ScreenLoading />;
};

export default Authorization;
