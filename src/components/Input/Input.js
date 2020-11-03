import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Animated } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const Input = props => {
  const {
    label,
    required,
    onChangeText,
    value,
    secureTextEntry,
    keyboardType,
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const _inputFocused = useRef(new Animated.Value(value !== '' ? 1 : 0))
    .current;

  useEffect(() => {
    Animated.timing(_inputFocused, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.label,
          {
            top: _inputFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [12, -10],
            }),
            left: _inputFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [10, 6],
            }),
            fontSize: _inputFocused.interpolate({
              inputRange: [0, 1],
              outputRange: [16, 13],
            }),
            color: _inputFocused.interpolate({
              inputRange: [0, 1],
              outputRange: ['rgba(0,0,0,0.5)', '#333'],
            }),
          },
        ]}>
        {label}
      </Animated.Text>
      <View style={styles.textInputContainer}>
        <TextInput
          style={{ width: '100%', paddingVertical: 10 }}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={value}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

Input.defaulProps = {
  required: false,
  value: '',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.any,
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
};

export default React.memo(Input, (prevProps, nextProps) => {
  return JSON.stringify(nextProps.value) === JSON.stringify(prevProps.value);
});
