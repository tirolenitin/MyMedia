import React, { useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Box, ScrollView, Text, Input, Pressable, Button, Image } from 'native-base';
import { launchImageLibrary } from 'react-native-image-picker';
import { validateFields } from '../Components/Validations/Validations';
import { createUser, uploadProfile, userRegistration } from '../Services/apiServices';
import { AlertNotificationRoot, ALERT_TYPE, Dialog } from 'react-native-alert-notification';
import Loader from '../Loader/Loader';
import axios from 'axios';
import { api_base_url } from '../utils/Constant';

const Register = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [profilePicUrl,setProfilePicUrl] = useState(null);

  const handleSignUp = async () => {
    console.log("hello");
    const validationErrors = validateFields({
      name,
      email,
      phone,
      password,
      confirmPassword,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {

        const userData = {
        name,
        email,
        mobile: phone,
        password,
        avatar:profilePicUrl
      };

      console.log(userData, 'register page');
      
       if(profilePicUrl !== null){
     
       
      let responseData = await axios.post(`https://pachi-backend.onrender.com/api/v1/auth/user/create-user`,userData)
      console.log(responseData.data, 'register page');

      if (responseData.data.success) {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: responseData.data.message,
          button: 'Close',
        });
        navigation.navigate('OtpScreen',{userData:userData});
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: responseData.data.message,
          button: 'Close',
        });
      }
    }
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: error.response.data.message,
        button: 'Close',
      });
    } finally {
      setLoading(false);
    }
  };

  

  const selectProfilePic = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        setProfilePic(response.assets[0].uri);
        uploadProfilePic(response.assets[0]);
      }
    });
  };


  
const uploadProfilePic = async (imageAsset) => {
  const formData = new FormData();
  formData.append('image', {
    uri: Platform.OS === 'android' ? imageAsset.uri : imageAsset.uri.replace('file://', ''),
    name: imageAsset.fileName || imageAsset.uri.split('/').pop(),
    type: imageAsset.type || 'image/jpeg'
  });
  const response = await uploadProfile (formData);
    setProfilePicUrl(response.data);
};


  return (
    <AlertNotificationRoot>
      <Loader visible={loading} />
      <ScrollView bg="#FFFFFF" p={3}>
        <Box mt={10} mb={4}>
          <Text fontSize={40} color={'#FFBD33'} fontWeight={'600'}>
            Sign Up
          </Text>
          <Text fontSize={16} color={'#FFBD33'} fontWeight={'300'}>
            Welcome! Please sign up to continue.
          </Text>
        </Box>
        <Box p={2}>
          <Box mb={3}>
            <Input
              borderRadius={10}
              color="#000"
              placeholder="Name"
              placeholderTextColor="#666"
              value={name}
              onChangeText={setName}
            />
            {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
          </Box>
          <Box mb={3}>
            <Input
              borderRadius={10}
              color="#000"
              placeholder="Email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}
          </Box>
          <Box mb={3}>
            <Input
              borderRadius={10}
              color="#000"
              placeholder="Phone"
              placeholderTextColor="#666"
              value={phone}
              onChangeText={setPhone}
            />
            {errors.phone && (
              <Text style={styles.errorText}>{errors.phone}</Text>
            )}
          </Box>
          <Box mb={3}>
            <Input
              borderRadius={10}
              color="#000"
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
          </Box>
          <Box mb={3}>
            <Input
              borderRadius={10}
              color="#000"
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            {errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}
          </Box>
          <Box mb={3}>
            <Pressable onPress={selectProfilePic}>
              <Box
                borderWidth={1}
                borderColor="#666"
                borderRadius={10}
                p={3}
                alignItems="center">
                {profilePic ? (
                  <Image
                    source={{ uri: profilePic }}
                    alt="Profile Picture"
                    size="lg"
                    borderRadius={100}
                  />
                ) : (
                  <Text color="#666">Select Profile Picture</Text>
                )}
              </Box>
            </Pressable>
          </Box>

          <Button
            onPress={() => {
              handleSignUp();
            }}
            // onPress={() => navigation.navigate('OtpScreen')}
            bg="#FFBD33"
            w="100%"
            mb={2}
            borderRadius={10}>
            <Text fontSize={16} color="white" fontWeight="800">
              Sign Up
            </Text>
          </Button>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            mb={2}>
            <Text>Already have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Login')}>
              <Text color="#FFBD33" fontWeight="600">
                Login
              </Text>
            </Pressable>
          </Box>
        </Box>
      </ScrollView>
    </AlertNotificationRoot>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: '#FFBD33',
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});

export default Register;





// import React, {useState} from 'react';
// import {StyleSheet, Dimensions} from 'react-native';
// import {Box, ScrollView, Text, Input, Pressable, Button} from 'native-base';
// import {validateFields} from '../Components/Validations/Validations';
// import {createUser} from '../Services/apiServices';
// import {
//   AlertNotificationRoot,
//   ALERT_TYPE,
//   Dialog,
// } from 'react-native-alert-notification';
// import Loader from '../Loader/Loader';

// const Register = ({navigation}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async () => {
//     const validationErrors = validateFields({
//       name,
//       email,
//       phone,
//       password,
//       confirmPassword,
//     });

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     setLoading(true);

//     try {
//       const userData = {
//         name,
//         email,
//         mobile: phone,
//         password,
//       };

//       const responseData = await createUser(userData);
//       console.log('responseData: ', responseData);

//       if (responseData.success) {
//         Dialog.show({
//           type: ALERT_TYPE.SUCCESS,
//           title: 'Success',
//           textBody: responseData.message,
//           button: 'Close',
//         });
//        // navigation.navigate('OtpScreen');
//       } else {
//         Dialog.show({
//           type: ALERT_TYPE.DANGER,
//           title: 'Error',
//           textBody: responseData.message,
//           button: 'Close',
//         });
//       }
//     } catch (error) {
//       Dialog.show({
//         type: ALERT_TYPE.DANGER,
//         title: 'Error',
//         textBody: 'An error occurred while signing up. Please try again.',
//         button: 'Close',
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <AlertNotificationRoot>
//       <Loader visible={loading} />
//       <ScrollView bg="#FFFFFF" p={3}>
//         <Box mt={10} mb={4}>
//           <Text fontSize={40} color={'#FFBD33'} fontWeight={'600'}>
//             Sign Up
//           </Text>
//           <Text fontSize={16} color={'#FFBD33'} fontWeight={'300'}>
//             Welcome! Please sign up to continue.
//           </Text>
//         </Box>
//         <Box p={2}>
//           <Box mb={3}>
//             <Input
//               borderRadius={10}
//               color="#000"
//               placeholder="Name"
//               placeholderTextColor="#666"
//               value={name}
//               onChangeText={setName}
//             />
//             {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
//           </Box>
//           <Box mb={3}>
//             <Input
//               borderRadius={10}
//               color="#000"
//               placeholder="Email"
//               placeholderTextColor="#666"
//               value={email}
//               onChangeText={setEmail}
//             />
//             {errors.email && (
//               <Text style={styles.errorText}>{errors.email}</Text>
//             )}
//           </Box>
//           <Box mb={3}>
//             <Input
//               borderRadius={10}
//               color="#000"
//               placeholder="Phone"
//               placeholderTextColor="#666"
//               value={phone}
//               onChangeText={setPhone}
//             />
//             {errors.phone && (
//               <Text style={styles.errorText}>{errors.phone}</Text>
//             )}
//           </Box>
//           <Box mb={3}>
//             <Input
//               borderRadius={10}
//               color="#000"
//               placeholder="Password"
//               placeholderTextColor="#666"
//               secureTextEntry
//               value={password}
//               onChangeText={setPassword}
//             />
//             {errors.password && (
//               <Text style={styles.errorText}>{errors.password}</Text>
//             )}
//           </Box>
//           <Box mb={5}>
//             <Input
//               borderRadius={10}
//               color="#000"
//               placeholder="Confirm Password"
//               placeholderTextColor="#666"
//               secureTextEntry
//               value={confirmPassword}
//               onChangeText={setConfirmPassword}
//             />
//             {errors.confirmPassword && (
//               <Text style={styles.errorText}>{errors.confirmPassword}</Text>
//             )}
//           </Box>
          
//           <Button
//              onPress={()=>{
//               handleSignUp();
//              }}
//             //onPress={() => navigation.navigate('OtpScreen')}
//             bg="#FFBD33"
//             w="100%"
//             mb={2}
//             borderRadius={10}>
//             <Text fontSize={16} color="white" fontWeight="800">
//               Sign Up
//             </Text>
//           </Button>
//           <Box
//             flexDirection="row"
//             alignItems="center"
//             justifyContent="center"
//             mb={2}>
//             <Text>Already have an account? </Text>
//             <Pressable onPress={() => navigation.navigate('Login')}>
//               <Text color="#FFBD33" fontWeight="600">
//                 Login
//               </Text>
//             </Pressable>
//           </Box>
//         </Box>
//       </ScrollView>
//     </AlertNotificationRoot>
//   );
// };

// const styles = StyleSheet.create({
//   subtitle: {
//     fontSize: 16,
//     color: '#FFBD33',
//     marginBottom: 20,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//     marginBottom: 10,
//   },
// });

// export default Register;
