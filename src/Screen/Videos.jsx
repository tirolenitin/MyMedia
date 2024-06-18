import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Videos1 from '../Assets/Videos/video.mp4';

const videos = [
  {
    id: '1',
    title: 'Video 1',
    // thumbnail: require('../Assets/Images/video1_thumbnail.jpg'), // Example: Add your actual thumbnail images
    videoUrl: Videos1,
  },
  {
    id: '2',
    title: 'Video 2',
    // thumbnail: require('../Assets/Images/video1_thumbnail.jpg'), // Example: Add your actual thumbnail images
    videoUrl: Videos1,
  },
  {
    id: '3',
    title: 'Video 3',
    // thumbnail: require('../Assets/Images/video1_thumbnail.jpg'), // Example: Add your actual thumbnail images
    videoUrl: Videos1,
  },
  // Add more videos as needed
];

const Videos = ({navigation}) => {
  const numColumns = 3;
  const screenWidth = Dimensions.get('window').width;
  const imageSize = screenWidth / numColumns;

  const openVideoDetail = video => {
    navigation.navigate('VideoDetail', {video});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => openVideoDetail(item)}>
      <View
        style={[styles.itemContainer, {width: imageSize, height: imageSize}]}>
        <Text>{item.title}</Text>
        {/* Display thumbnail here */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
});

export default Videos;
