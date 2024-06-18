// PermissionsPage.js
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const PermissionsPage = ({onRequestPermission}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Camera permission is required to use this feature.
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRequestPermission}>
        <Text style={styles.buttonText}>Request Permission</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFBD33',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default PermissionsPage;
