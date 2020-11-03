import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../../components/Input/Input';
import styles from './styles';
import { useForm } from 'react-hook-form';
import { USERNAME, PASSWORD, EMAIL } from '../../constants/field.constant';
import CommonButton from '../../components/CommonButton/CommonButton';
import * as SCREEN from '../../constants/screen.constant';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { Auth } from 'aws-amplify';
import { useDispatch } from 'react-redux';
import { CognitoAuthModel } from '../../models/auth.model';
import AsyncStorage from '@react-native-community/async-storage';
import { STORE_ACCESS_TOKEN } from '../../constants/common.constant';
import { setAccessToken } from '../../redux/actions/auth/auth.actions';

const LoginScreen = () => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    watch,
    getValues,
    trigger,
  } = useForm({
    email: '',
    password: '',
  });
  const values = watch();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [error_message, setErrorMessage] = useState('');

  useEffect(() => {
    register({ name: EMAIL }, { required: true });
    register({ name: PASSWORD }, { required: true });
  }, [register]);

  const emailHandler = async val => {
    setValue(EMAIL, val, true);
    await trigger([EMAIL]);
  };

  const passwordHandler = async val => {
    setValue(PASSWORD, val, true);
    await trigger([PASSWORD]);
  };

  const login = async val => {
    try {
      setErrorMessage('');
      setLoading(true);
      const response = await Auth.signIn({
        username: val.email,
        password: val.password,
      });
      console.log('login response', response);
      const auth = CognitoAuthModel(response.signInUserSession);
      dispatch(setAccessToken(auth.accessToken.jwtToken));
      AsyncStorage.setItem(STORE_ACCESS_TOKEN, auth.accessToken.jwtToken);
      setLoading(false);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN.APP_NAVIGATOR }],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      console.log('error', error);
      setLoading(false);
      let wrong = null;
      !error.message ? (wrong = { message: error }) : (wrong = error);
      setErrorMessage(wrong.message);
      const stackActions = StackActions.push(SCREEN.CONFIRMATION_CODE_SCREEN, {
        email: val.email,
      });
      navigation.dispatch(stackActions);
      console.log('############################ ', stackActions);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Text style={{ fontSize: 30 }}>Recibo</Text>
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Input
            label="Email"
            value={values.email ? values.email : ''}
            onChangeText={emailHandler}
          />
          {errors.email && (
            <Text style={{ color: '#cc0000' }}>Email is required.</Text>
          )}
        </View>
        <View style={{ paddingVertical: 10 }}>
          <Input
            label="Password"
            value={values.password ? values.password : ''}
            onChangeText={passwordHandler}
            secureTextEntry={true}
          />
          {errors.password && (
            <Text style={{ color: '#cc0000' }}>Password is required.</Text>
          )}
        </View>
        {error_message !== '' && (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: '#cc0000' }}>{error_message}</Text>
          </View>
        )}
        <View style={styles.loginButtonContainer}>
          <CommonButton
            onPress={handleSubmit(login)}
            label={loading ? 'Logging in' : 'Login'}
            disabled={loading}
            loader={loading}
          />
        </View>
        <View style={styles.noAccountContainer}>
          <Text>Don't have an account yet?</Text>
          <Text
            onPress={() =>
              navigation.dispatch(StackActions.push(SCREEN.REGISTRATION_SCREEN))
            }
            style={styles.clickToSignText}>
            Click here to Sign Up
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
