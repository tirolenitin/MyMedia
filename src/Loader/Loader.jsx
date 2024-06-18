// Loader.js
import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {Box} from 'native-base';

const Loader = ({visible}) => {
  if (!visible) return null;

  return (
    <Box style={styles.overlay}>
      <ActivityIndicator size="large" color="#FFBD33" />
      <Text style={styles.text}>Please wait...</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#fff',
  },
});

export default Loader;
