// // screens/CameraScreen.js
// import React from 'react';
// import {StyleSheet, View} from 'react-native';
// import {Camera, useCameraDevice} from 'react-native-vision-camera';

// const CameraOpen = () => {
//   const device = useCameraDevice('back');

//   if (!device) {
//     console.warn('No camera device available');
//     return null;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera style={styles.camera} device={device} isActive={true} />
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
// });

// export default CameraOpen;

import React, {useState, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

const CameraOpen = () => {
  const camera = useRef(null);
  const device = useCameraDevice('back');

  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [showCamera, setShowCamera] = useState(true);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      try {
        const photo = await camera.current.takePhoto({});
        setCapturedPhoto(photo.path);
        setShowCamera(false);
      } catch (error) {
        console.warn('Error taking photo:', error);
      }
    }
  };

  const retakePhoto = () => {
    setCapturedPhoto(null);
    setShowCamera(true);
  };

  const savePhoto = () => {
    console.log('Photo saved:', capturedPhoto);
    // CameraRoll.save(capturedPhoto)
    //   .then(() => console.log('Photo saved to camera roll'))
    //   .catch(err => console.warn('Error saving photo:', err));
  };

  if (!device) {
    console.warn('No camera device available');
    return null;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <Camera
          style={styles.camera}
          device={device}
          isActive={true}
          ref={camera}
          photo={true}
        />
      ) : (
        <Image source={{uri: capturedPhoto}} style={styles.previewImage} />
      )}

      {showCamera && (
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button} onPress={capturePhoto}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      )}

      {!showCamera && (
        <View style={styles.controlsContainer}>
          <TouchableOpacity style={styles.button} onPress={retakePhoto}>
            <Text style={styles.buttonText}>Retake</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={savePhoto}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    ...StyleSheet.absoluteFillObject,
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: 'blue',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  previewImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default CameraOpen;
