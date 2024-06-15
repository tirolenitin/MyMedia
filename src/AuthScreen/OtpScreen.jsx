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
import OTPTextInput from 'react-native-otp-textinput';

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
            source={require('../Assets/Images/otp-image.png')}
            resizeMode="cover"
            height={height / 2}
            width="100%"
          />
        </Box>
        <Box
          mt={2}
          p={5}
          bg="#FFFFFF"
          height={350}
          borderTopLeftRadius={20}
          borderTopRightRadius={30}>
          <Box mb={5} mt={2}>
            <Text fontSize={30} color="#FFBD33" fontWeight="600">
              Verify OTP
            </Text>
            <Text fontSize={14} color="#FFBD33" fontWeight="300">
              Please enter the 4-digit OTP sent to your email.
            </Text>
          </Box>
          <Box mb={5} mt={5}>
            <OTPTextInput
              handleTextChange={otp => setOtp(otp)}
              inputCount={4}
              keyboardType="numeric"
              secureTextEntry={false}
              autoFocus={true}
              tintColor="#FFBD33"
              textInputStyle={{
                backgroundColor: '#fff',
                color: '#000',
                borderRadius: 25,
                borderWidth: 1,
              }}
              containerStyle={{marginBottom: 20}}
            />
          </Box>
          <Button
            onPress={() => navigation.navigate('ResetPassword')}
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
