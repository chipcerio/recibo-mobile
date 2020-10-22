import { StyleSheet, Dimensions } from 'react-native';
import * as theme from '../../constants/theme.constant';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacBackground: {
    backgroundColor: '#FFF',
    opacity: 0.9,
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 0,
  },
});

export default styles;
