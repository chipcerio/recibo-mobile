import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Auth } from 'aws-amplify';
import { CommonActions, useNavigation } from '@react-navigation/native';
import Input from '../../components/Input/Input';
import CommonButton from '../../components/CommonButton/CommonButton';
import * as SCREEN from '../../constants/screen.constant';
import { toastSuccess, toastError } from '../../utils/toast.utils';
import styles from './styles';

const ConfirmationCodeScreen = ({ route }) => {
  const navigation = useNavigation();
  const email = route.params.email;
  const [confirmationCode, setConfirmationCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error_message, setErrorMessage] = useState('');

  const confirmationCodeHandler = text => {
    setConfirmationCode(text);
    console.log(confirmationCode);
  };

  const handleConfirm = async () => {
    try {
      setLoading(true);
      setErrorMessage('');
      const authResponse = await Auth.confirmSignUp(email, confirmationCode);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN.APP_NAVIGATOR }],
      });
      navigation.dispatch(resetAction);
      toastSuccess('Successfully Confirmed');
      setLoading(false);
      console.log('Auth Code SUCCESS', authResponse);
    } catch (error) {
      setLoading(false);
      let wrong = null;
      !error.message ? (wrong = { message: error }) : (wrong = error);
      setErrorMessage(wrong.message);
      console.log('ERRRRRRRRRR', error.message);
    }

    console.log('button pressed', loading);
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 10 }}>
        <Input
          label="Confirmation Code"
          value={confirmationCode}
          onChangeText={confirmationCodeHandler}
        />
        {error_message !== '' && (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: '#cc0000' }}>{error_message}</Text>
          </View>
        )}
      </View>

      <View style={{ paddingHorizontal: 10 }}>
        <CommonButton
          onPress={handleConfirm}
          label={loading ? 'Loading...' : 'Confirm'}
          loader={loading}
          disabled={loading}
        />
      </View>
      <Text style={styles.displayUser}>{email}</Text>
    </View>
  );
};

export default ConfirmationCodeScreen;
