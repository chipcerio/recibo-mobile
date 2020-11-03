import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  displayUser: {
    padding: 10,
    alignSelf: 'center',
  },
});

export default styles;
