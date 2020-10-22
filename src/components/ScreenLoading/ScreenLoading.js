import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles from './styles';

// React
import PropTypes from 'prop-types';

const ScreenLoading = props => {
  const { content } = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color="#3399FF" />
      {content !== undefined && (
        <View style={{ paddingTop: 10 }}>
          <Text style={styles.contentText}>{content}</Text>
        </View>
      )}
    </View>
  );
};

ScreenLoading.propTypes = {
  content: PropTypes.string,
};

export default React.memo(ScreenLoading, (prevProps, nextProps) => {
  return nextProps.content === prevProps.content;
});
