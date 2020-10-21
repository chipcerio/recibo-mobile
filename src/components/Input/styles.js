import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    label: {
        position: 'absolute',
        zIndex: 1,
        top: -10,
        left: 6,
        backgroundColor: '#FFF',
        paddingHorizontal: 3,
        color: 'rgba(0,0,0,0.5)'
    },
    textInputContainer: {
        borderRadius: 5,
        borderColor: 'rgba(0,0,0,0.5)',
        borderWidth: 0.5,
        zIndex: 0,
        paddingHorizontal: 5
    }
});

export default styles;
