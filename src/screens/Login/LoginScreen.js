import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Input from '../../components/Input/Input';
import styles from './styles';
import {useForm} from 'react-hook-form';
import {USERNAME, PASSWORD, EMAIL} from '../../constants/field.constant';
import CommonButton from '../../components/CommonButton/CommonButton';
import * as SCREEN from '../../constants/screen.constant';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { Auth } from 'aws-amplify';

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
  const navigation = useNavigation();

  useEffect(() => {
    register({name: EMAIL}, {required: true});
    register({name: PASSWORD}, {required: true});
  }, [register]);

  const emailHandler = async (val) => {
    setValue(EMAIL, val, true);
    await trigger([EMAIL]);
  };

  const passwordHandler = async (val) => {
    setValue(PASSWORD, val, true);
    await trigger([PASSWORD]);
  };

  const login = async (val) => {
    const response = await Auth.signIn({
      username: val.email,
      password: val.password
    });
    console.log('response val', response);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.logoContainer}>
          <Text style={{fontSize: 30}}>Recibo</Text>
        </View>
        <View style={{paddingVertical: 10}}>
          <Input
            label="Email"
            value={values.email ? values.email : ''}
            onChangeText={emailHandler}
          />
          {errors.email && (
            <Text style={{color: '#cc0000'}}>Email is required.</Text>
          )}
        </View>
        <View style={{paddingVertical: 10}}>
          <Input
            label="Password"
            value={values.password ? values.password : ''}
            onChangeText={passwordHandler}
            secureTextEntry={true}
          />
          {errors.password && (
            <Text style={{color: '#cc0000'}}>Password is required.</Text>
          )}
        </View>
        <View style={styles.loginButtonContainer}>
          <CommonButton onPress={handleSubmit(login)} label="Login" />
        </View>
        <View style={styles.noAccountContainer}>
          <Text>Don't have an account yet?</Text>
          <Text
            onPress={() =>
              navigation.dispatch(
                StackActions.push(SCREEN.REGISTRATION_SCREEN),
              )
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
