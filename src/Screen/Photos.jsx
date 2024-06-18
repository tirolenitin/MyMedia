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

// import React, {useState} from 'react';
// import {FlatList, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
// import {View, Image, Fab, Box} from 'native-base';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
//   const [selectedPhoto, setSelectedPhoto] = useState(null);
//   const screenWidth = Dimensions.get('window').width;
//   const numColumns = 3;
//   const imageSize = screenWidth / numColumns;

//   const openDetailScreen = photoSrc => {
//     setSelectedPhoto(photoSrc);
//     // Navigate to detail screen logic here
//   };

//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => openDetailScreen(item.src)}>
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

//       <Box alignItems={'flex-end'} p={2}>
//         <Box
//           style={{backgroundColor: '#FFBD33'}}
//           borderRadius={25}
//           w={'20'}
//           p={1}
//           alignItems={'center'}>
//           <Icon name="camera" style={{fontSize: 40, color: 'white'}} />
//         </Box>
//       </Box>
//       {/* </Fab> */}
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
// });

// export default Photos;

// import React, {useEffect} from 'react';
// import {
//   StyleSheet,
//   View,
//   PermissionsAndroid,
//   Platform,
//   TouchableOpacity,
//   Text,
//   Image,
// } from 'react-native';
// import {
//   Camera,
//   useCameraDevice,
//   useCameraPermission,
//   CameraRoll,
// } from 'react-native-vision-camera';

// const Photos = () => {
//   const {
//     hasPermission: cameraPermission,
//     requestPermission: requestCameraPermission,
//   } = useCameraPermission();
//   const device = useCameraDevice('back');

//   useEffect(() => {
//     const requestPermissions = async () => {
//       try {
//         const cameraPermission = await requestCameraPermission();
//         if (cameraPermission !== true) {
//           console.log('cameraPermission: ', cameraPermission);
//         }
//       } catch (error) {
//         console.warn('Error requesting camera permission:', error);
//       }
//     };

//     requestPermissions();
//   }, [requestCameraPermission]);

//   const photos = [
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

//   // const handleTakePhoto = async () => {
//   //   if (!device) {
//   //     console.warn('No camera device available');
//   //     return;
//   //   }

//   //   try {
//   //     const file = await device.takePhoto();
//   //     await CameraRoll.save(`file://${file.path}`, {type: 'photo'});
//   //     console.log('Photo saved to Camera Roll:', file);
//   //   } catch (error) {
//   //     console.warn('Error taking photo:', error);
//   //   }
//   // };

//   const handleTakePhoto = async () => {
//     if (!device) {
//       console.warn('No camera device available');
//       return;
//     }

//     try {
//       const photo = await device.takePhoto(); // Correct usage might vary based on the library
//       console.log('Photo captured:', photo);
//       // Proceed with saving to Camera Roll or other actions
//     } catch (error) {
//       console.warn('Error taking photo:', error);
//     }
//   };

//   if (!cameraPermission) return <PermissionsPage />;
//   if (!device) return <NoCameraDeviceError />;

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} device={device} isActive={true} />
//       <TouchableOpacity style={styles.captureButton} onPress={handleTakePhoto}>
//         <Image
//           source={require('../Assets/Images/camera.png')} // Replace with your actual image source
//           style={styles.cameraIcon}
//         />
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   camera: {
//     ...StyleSheet.absoluteFillObject,
//   },
//   captureButton: {
//     position: 'absolute',
//     bottom: 20,
//     backgroundColor: '#ff0000',
//     borderRadius: 20,
//     padding: 15,
//   },
//   cameraIcon: {
//     width: 50, // Adjust size as needed
//     height: 50, // Adjust size as needed
//   },
// });

// export default Photos;

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import PermissionsPage from '../Components/Home/Camera/PermissionsPage';

const Photos = () => {
  const {
    hasPermission: cameraPermission,
    requestPermission: requestCameraPermission,
  } = useCameraPermission();
  const device = useCameraDevice('back');
  const navigation = useNavigation();

  const [photos, setPhotos] = useState([
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
  ]);

  useEffect(() => {
    const requestPermissions = async () => {
      try {
        const cameraPermission = await requestCameraPermission();
        if (cameraPermission !== true) {
          console.log('cameraPermission: ', cameraPermission);
        }
      } catch (error) {
        console.warn('Error requesting camera permission:', error);
      }
    };

    requestPermissions();
  }, [requestCameraPermission]);

  const handleOpenCamera = () => {
    navigation.navigate('CameraOpen');
  };

  if (!cameraPermission) return <PermissionsPage />;
  if (!device) return <NoCameraDeviceError />;

  const renderPhotoItem = ({item}) => (
    <TouchableOpacity style={styles.photoItem}>
      <Image source={{uri: item.src}} style={styles.photoImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderPhotoItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.photoList}
      />
      <TouchableOpacity style={styles.captureButton} onPress={handleOpenCamera}>
        <Image
          source={require('../Assets/Images/camera.png')}
          style={styles.cameraIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photoList: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  photoItem: {
    flex: 1,
    marginHorizontal: 4,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  photoImage: {
    width: '100%',
    aspectRatio: 1,
  },
  captureButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 20,
    padding: 15,
  },
  cameraIcon: {
    width: 50,
    height: 50,
  },
});

export default Photos;
