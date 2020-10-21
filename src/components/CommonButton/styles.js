import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    highlighter: {
        borderRadius: 5
    },
    buttonContainer: {
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default styles;
