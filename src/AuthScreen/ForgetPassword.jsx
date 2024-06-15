import React from 'react';
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

const ForgetPassword = ({navigation}) => {
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
          />
        </Box>
        <Box
          p={5}
          bg="#FFFFFF"
          height={350}
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
            />
          </Box>
          <Button
            onPress={() => navigation.navigate('OtpScreen')}
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
