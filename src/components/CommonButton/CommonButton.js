import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CommonButton = props => {
  const {
    onPress,
    label,
    backgroundColor,
    labelColor,
    disabled,
    loader,
  } = props;
  return (
    <>
      <TouchableHighlight
        disabled={disabled}
        onPress={onPress}
        underlayColor="#000"
        style={styles.highlighter}>
        <View
          style={[
            styles.buttonContainer,
            { backgroundColor, opacity: disabled ? 0.5 : 1 },
          ]}>
          <Text style={{ fontSize: 15, color: labelColor }}>{label}</Text>
          {loader && (
            <ActivityIndicator
              style={{ marginLeft: 10 }}
              size={25}
              color="#FFF"
            />
          )}
        </View>
      </TouchableHighlight>
    </>
  );
};

CommonButton.defaultProps = {
  label: 'Submit',
  backgroundColor: '#3399FF',
  labelColor: '#FFF',
  disabled: false,
  loader: false,
};

CommonButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.string,
  labelColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
  loader: PropTypes.bool,
};

export default CommonButton;
