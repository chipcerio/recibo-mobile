import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import PropTypes from 'prop-types';

const MenuItem = props => {
  const { label, icon, onPress } = props;
  return (
    <>
      <TouchableHighlight onPress={onPress} underlayColor="#000">
        <View style={styles.container}>
          <View style={{ marginRight: 10 }}>{icon}</View>
          <Text style={styles.label}>{label}</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

MenuItem.defaultProps = {
  label: 'Label',
  icon: <MaterialCommunityIcons name="home" size={20} color="#333" />,
};

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onPress: PropTypes.func.isRequired,
};

export default MenuItem;
