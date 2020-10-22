import React from 'react';
import { View, Text, Modal, ActivityIndicator } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const ModalLoading = props => {
  const { visible } = props;

  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.opacBackground} />
        <ActivityIndicator size={50} color="#3399FF" />
      </View>
    </Modal>
  );
};

ModalLoading.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default React.memo(ModalLoading, (prevProps, nextProps) => {
  return nextProps.visible === prevProps.visible;
});
