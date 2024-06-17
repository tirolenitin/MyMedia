import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Container, Content, Text, Button, Icon} from 'native-base';

const PhotoDetail = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {photoSrc} = route.params;

  const handleDelete = () => {
    // Implement delete functionality here
    Alert.alert('Delete', 'Are you sure you want to delete this photo?', [
      {text: 'Cancel', style: 'cancel'},
      {text: 'Delete', onPress: () => console.log('Photo deleted')},
    ]);
  };

  return (
    <Container>
      <Content contentContainerStyle={styles.container}>
        <Image source={{uri: photoSrc}} style={styles.image} />
        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Icon name="trash" style={styles.deleteIcon} />
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f44336',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  deleteIcon: {
    color: '#fff',
    marginRight: 10,
  },
  deleteText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default PhotoDetail;
