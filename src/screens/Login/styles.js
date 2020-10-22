import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  loginContainer: {
    width: '100%',
    paddingHorizontal: 20,
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
