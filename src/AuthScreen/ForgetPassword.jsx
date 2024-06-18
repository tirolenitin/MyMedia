import React, { useState } from 'react';
import {StyleSheet, Dimensions, Alert} from 'react-native';
import {
  Box,
  ScrollView,
  Image,
  Text,
  Input,
  Pressable,
  Button,
} from 'native-base';
import BackIcon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { api_base_url } from '../utils/Constant';
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification';


const {height} = Dimensions.get('window');

const ForgetPassword = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [loading,setLoading] = useState(false);

  console.log("email",email)

  const forgetPassword = async () => {

    if (!email) {
      Alert.alert('Error', 'Please enter an email address.');
      return;
    }

    setLoading(true);
    const payload = { email };

    try {
      const response = await axios.put(`${api_base_url}/auth/user/forget-password`, payload);
      console.log(response.data);
      Dialog.show({
        type: ALERT_TYPE.SUCCESS,
        title: 'Success',
        textBody: response.data.message,
        button: 'Close',
      });
      setTimeout(()=>{
        navigation.navigate('OtpScreen',{userData:email});
      },2000)
    } catch (error) {
      if (error.response) {
        console.log('Error response data:', error.response.data);
        console.log('Error response status:', error.response.status);
        Alert.alert('Error', error.response.data.message || 'An error occurred.');
      } else if (error.request) {
        console.log('Error request:', error.request);
        Alert.alert('Error', 'No response received. Please try again later.');
      } else {
        console.log('Error message:', error.message);
        Alert.alert('Error', error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <Box>
        <Box style={styles.imageContainer}>
          <Pressable
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <BackIcon
              name="arrow-back"
              color="black"
              size={20}
              style={{
                borderRadius: 25,
                borderWidth: 1,
                padding: 4,
              }}
            />
          </Pressable>
          <Image
            source={require('../Assets/Images/forget-password-image.png')}
            resizeMode="cover"
            height={height / 2}
            width="100%"
            alt='Image'
          />
        </Box>
        <Box
          p={5}
          bg="#FFFFFF"
          height={500}
          borderTopLeftRadius={20}
          borderTopRightRadius={30}>
          <Box mb={5}>
            <Text fontSize={30} color="#FFBD33" fontWeight="600">
              Forgot Password
            </Text>
            <Text fontSize={14} color="#FFBD33" fontWeight="300">
              Please enter your email to reset your password.
            </Text>
          </Box>
          <Box mb={5}>
            <Input
              borderRadius={10}
              mb={3}
              color="#000"
              placeholder="Email"
              placeholderTextColor="#666"
              value={email}
              onChangeText={setEmail}
            />
          </Box>
          <Button
            onPress={forgetPassword}
            bg="#FFBD33"
            w="100%"
            mb={2}
            borderRadius={10}>
            <Text fontSize={15} color="white" fontWeight="600">
              Forgot Password
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2,
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
