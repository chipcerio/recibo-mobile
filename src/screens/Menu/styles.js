import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  contentContainer: {
    paddingVertical: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
  },
  menuItemsContainer: {
    flexDirection: 'column',
  },
});

export default styles;
