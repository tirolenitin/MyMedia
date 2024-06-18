// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   Image,
//   Dimensions,
//   Modal,
//   TouchableOpacity,
// } from 'react-native';

// const photos = [
//   {
//     id: '1',
//     src: 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1718642569~exp=1718646169~hmac=f3ecf9662498636f1eb8b679151610a1558c2cb479f9320a324d6570ed42393b&w=740',
//   },
//   {
//     id: '2',
//     src: 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1718642569~exp=1718646169~hmac=f3ecf9662498636f1eb8b679151610a1558c2cb479f9320a324d6570ed42393b&w=740',
//   },
//   {
//     id: '3',
//     src: 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1718642569~exp=1718646169~hmac=f3ecf9662498636f1eb8b679151610a1558c2cb479f9320a324d6570ed42393b&w=740',
//   },
//   {
//     id: '4',
//     src: 'https://img.freepik.com/free-vector/dreamy-floral-background_53876-92903.jpg?t=st=1718642628~exp=1718646228~hmac=b3a4f83332e02e06a3c21efc43d1fe9f257b1cb187bc688313954c33995a88fd&w=360',
//   },
//   {
//     id: '5',
//     src: 'https://img.freepik.com/free-vector/dreamy-floral-background_53876-92903.jpg?t=st=1718642628~exp=1718646228~hmac=b3a4f83332e02e06a3c21efc43d1fe9f257b1cb187bc688313954c33995a88fd&w=360',
//   },
//   {
//     id: '6',
//     src: 'https://img.freepik.com/free-photo/colorful-background-with-alcohol-ink_24972-1279.jpg?t=st=1718642654~exp=1718646254~hmac=a547d6064949ff7c48a99dc30638372bb3d591f9c0638d4d7da7f7f52a3496b1&w=996',
//   },
// ];

// const Photos = () => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const numColumns = 3;
//   const screenWidth = Dimensions.get('window').width;
//   const imageSize = screenWidth / numColumns;

//   const openModal = photoSrc => {
//     setSelectedPhoto(photoSrc);
//     setModalVisible(true);
//   };

//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => openModal(item.src)}>
//       <View
//         style={[styles.itemContainer, {width: imageSize, height: imageSize}]}>
//         <Image source={{uri: item.src}} style={styles.image} />
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={photos}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//         numColumns={numColumns}
//         contentContainerStyle={styles.listContainer}
//       />
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         onRequestClose={() => setModalVisible(false)}>
//         <View style={styles.modalContainer}>
//           <TouchableOpacity
//             style={styles.closeButton}
//             onPress={() => setModalVisible(false)}>
//             <Text style={styles.closeText}>Close</Text>
//           </TouchableOpacity>
//           <Image
//             source={{uri: selectedPhoto}}
//             style={styles.fullscreenImage}
//             resizeMode="contain"
//           />
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   listContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//   },
//   itemContainer: {
//     margin: 1,
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.9)',
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 20,
//     right: 20,
//     padding: 10,
//   },
//   closeText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   fullscreenImage: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Photos;

import React, {useState} from 'react';
import {FlatList, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import {View, Image} from 'native-base';
import {useNavigation} from '@react-navigation/native';

const photos = [
  {
    id: '1',
    src: 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1718642569~exp=1718646169~hmac=f3ecf9662498636f1eb8b679151610a1558c2cb479f9320a324d6570ed42393b&w=740',
  },
  {
    id: '2',
    src: 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1718642569~exp=1718646169~hmac=f3ecf9662498636f1eb8b679151610a1558c2cb479f9320a324d6570ed42393b&w=740',
  },
  {
    id: '3',
    src: 'https://img.freepik.com/free-photo/red-light-round-podium-black-background-mock-up_43614-950.jpg?t=st=1718642569~exp=1718646169~hmac=f3ecf9662498636f1eb8b679151610a1558c2cb479f9320a324d6570ed42393b&w=740',
  },
  {
    id: '4',
    src: 'https://img.freepik.com/free-vector/dreamy-floral-background_53876-92903.jpg?t=st=1718642628~exp=1718646228~hmac=b3a4f83332e02e06a3c21efc43d1fe9f257b1cb187bc688313954c33995a88fd&w=360',
  },
  {
    id: '5',
    src: 'https://img.freepik.com/free-vector/dreamy-floral-background_53876-92903.jpg?t=st=1718642628~exp=1718646228~hmac=b3a4f83332e02e06a3c21efc43d1fe9f257b1cb187bc688313954c33995a88fd&w=360',
  },
  {
    id: '6',
    src: 'https://img.freepik.com/free-photo/colorful-background-with-alcohol-ink_24972-1279.jpg?t=st=1718642654~exp=1718646254~hmac=a547d6064949ff7c48a99dc30638372bb3d591f9c0638d4d7da7f7f52a3496b1&w=996',
  },
];

const Photos = () => {
  const navigation = useNavigation();
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const numColumns = 3;
  const screenWidth = Dimensions.get('window').width;
  const imageSize = screenWidth / numColumns;

  const openDetailScreen = photoSrc => {
    setSelectedPhoto(photoSrc);
    navigation.navigate('PhotoDetail', {photoSrc});
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => openDetailScreen(item.src)}>
      <View
        style={[styles.itemContainer, {width: imageSize, height: imageSize}]}>
        <Image source={{uri: item.src}} style={styles.image} />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  itemContainer: {
    margin: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Photos;
