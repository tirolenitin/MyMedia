import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
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

const {height} = Dimensions.get('window');

const ResetPassword = ({navigation}) => {
  const handleSubmit = () => {
    console.log('OTP entered:', otp);
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <Box>
        <Box style={styles.imageContainer}>
          <Pressable
            style={styles.backIcon}
            onPress={() => navigation.goBack()}>
            <BackIcon name="arrow-back" size={24} color="white" />
          </Pressable>
          <Image
            source={require('../Assets/Images/reset-password-image.png')}
            resizeMode="cover"
            height={height / 2}
            width="100%"
            alt='Image'
          />
        </Box>

        <Box
          h={350}
          p={5}
          bg="#FFFFFF"
          borderTopLeftRadius={20}
          borderTopRightRadius={30}>
          <Box mb={5}>
            <Text fontSize={30} color="#FFBD33" fontWeight="600">
              Reset Password
            </Text>
            <Text fontSize={14} color="#FFBD33" fontWeight="300">
              Create new password and enjoy our media
            </Text>
          </Box>
          <Box>
            <Input
              borderRadius={10}
              mb={3}
              color="#000"
              placeholder="New Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
            <Input
              borderRadius={10}
              mb={5}
              color="#000"
              placeholder="Confirm Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
          </Box>
          <Button
            mt={2}
            onPress={handleSubmit}
            bg="#FFBD33"
            w="100%"
            mb={2}
            borderRadius={10}>
            <Text fontSize={15} color="white" fontWeight="600">
              Submit
            </Text>
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  imageContainer: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
});
