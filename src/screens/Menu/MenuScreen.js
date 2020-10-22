import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuItem from '../../components/MenuItem/MenuItem';
import { Auth } from 'aws-amplify';
import {
  useNavigation,
  StackActions,
  CommonActions,
} from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setResetAuth } from '../../redux/actions/auth/auth.actions';
import AsyncStorage from '@react-native-community/async-storage';
import ModalLoading from '../../components/ModalLoading/ModalLoading';
import { toastError } from '../../utils/toast.utils';
import * as SCREEN from '../../constants/screen.constant';

const MenuScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const signOut = async () => {
    try {
      setLoading(true);
      await Auth.signOut();
      dispatch(setResetAuth());
      const retrieve_keys = await AsyncStorage.getAllKeys();
      if (retrieve_keys.length > 0) {
        AsyncStorage.multiRemove(
          retrieve_keys.filter(x => x !== 'persist:root'),
        );
      }
      setLoading(false);
      const resetAction = CommonActions.reset({
        index: 0,
        routes: [{ name: SCREEN.AUTH_NAVIGATOR }],
      });
      navigation.dispatch(resetAction);
    } catch (error) {
      toastError(error);
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <ModalLoading visible={loading} />}
      <ScrollView>
        <View style={styles.contentContainer}>
          <Text style={{ fontSize: 20 }}>Recibo</Text>
        </View>
        <View style={styles.menuItemsContainer}>
          <MenuItem
            label="Sign Out"
            icon={
              <MaterialCommunityIcons
                name="exit-to-app"
                size={20}
                color="#333"
              />
            }
            onPress={() => signOut()}
          />
        </View>
      </ScrollView>
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
