import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Input from '../../components/Input/Input';
import styles from './styles';
import { useForm } from 'react-hook-form';
import {
  EMAIL,
  PASSWORD,
  CONFIRM_PASSWORD,
  USERNAME,
} from '../../constants/field.constant';
import CommonButton from '../../components/CommonButton/CommonButton';
import * as SCREEN from '../../constants/screen.constant';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { Auth } from 'aws-amplify';

const RegistrationScreen = () => {
  const {
    register,
    setValue,
    handleSubmit,
    errors,
    watch,
    getValues,
    trigger,
  } = useForm({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const values = watch();
  const navigation = useNavigation();
  const [invalid, setInvalid] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    register(
      { name: EMAIL },
      {
        required: true,
        pattern: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$/,
      },
    );
    register({ name: PASSWORD }, { required: true });
    register({ name: CONFIRM_PASSWORD }, { required: true });
  }, [register]);

  const emailHandler = async val => {
    setValue(EMAIL, val, true);
    await trigger([EMAIL]);
  };

  const passwordHandler = async val => {
    setValue(PASSWORD, val, true);
    await trigger([PASSWORD]);
  };

  const confirmPasswordHandler = async val => {
    setValue(CONFIRM_PASSWORD, val, true);
    await trigger([CONFIRM_PASSWORD]);
  };

  const signUp = async val => {
    const { email, password } = val;
    try {
      setLoading(true);
      const signUpResponse = await Auth.signUp({
        username: email,
        password,
      });
      console.log('signUpResponse', signUpResponse);
      setLoading(false);
      setInvalid({});
    } catch (err) {
      console.log('error: ', err);
      let wrong = null;
      !err.message ? (wrong = { message: err }) : (wrong = err);
      if (err)
        setInvalid(prevState => ({
          ...prevState,
          cognito: err,
        }));
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Input
            label="Email"
            value={values.email ? values.email : ''}
            onChangeText={emailHandler}
            keyboardType="email-address"
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
        <View style={{ paddingVertical: 10 }}>
          <Input
            label="Confirm Password"
            value={values.confirm_password ? values.confirm_password : ''}
            onChangeText={confirmPasswordHandler}
            secureTextEntry={true}
          />
          {errors.confirm_password && (
            <Text style={{ color: '#cc0000' }}>
              Confirm Password is required.
            </Text>
          )}
        </View>
        <View style={styles.loginButtonContainer}>
          <CommonButton onPress={handleSubmit(signUp)} label="Sign Up" />
        </View>
        {JSON.stringify(invalid) !== '{}' && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ color: '#cc0000' }}>{invalid.cognito.message}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default RegistrationScreen;
