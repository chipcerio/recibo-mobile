import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  loginContainer: {
    width: '100%',
    padding: 20,
  },
  loginButtonContainer: {
    paddingVertical: 10,
    marginTop: 10,
  },
  noAccountContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
  },
  clickToSignText: {
    paddingTop: 5,
    color: '#3399FF',
  },
});

export default styles;
