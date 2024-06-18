import React, {useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {Box, ScrollView, Image, Text, Pressable, Button} from 'native-base';
import BackIcon from 'react-native-vector-icons/Ionicons';
import OTPTextInput from 'react-native-otp-textinput';
import {
  AlertNotificationRoot,
  ALERT_TYPE,
  Dialog,
} from 'react-native-alert-notification';
import Loader from '../Loader/Loader';
import {verifyUser} from '../Services/apiServices';

const {height} = Dimensions.get('window');

const OtpScreen = ({navigation,route}) => {
  const {userData} = route.params;
  console.log("userData",userData);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const email = userData.email || userData; // Static email

  const handleVerifyOtp = async () => {
    setLoading(true);
    try {
      const payload = {
        email:email,
        otp:otp
      }

      console.log(payload);
      const response = await verifyUser(payload);

      console.log('response.status', response.status);

      if (response.status === 200 && response.success) {
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: response.message,
          button: 'Close',
        });
        setTimeout(()=>{
          navigation.navigate('Login');
        },2000);
       
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: response.message,
          button: 'Close',
        });
      }
    } catch (error) {
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'An error occurred while verifying OTP. Please try again.',
        button: 'Close',
      });
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertNotificationRoot>
      <Loader visible={loading} />
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
              alt='Image'
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
              onPress={handleVerifyOtp}
              bg="#FFBD33"
              w="100%"
              mb={2}
              borderRadius={10}>
              <Text fontSize={15} color="white" fontWeight="600">
                Verify OTP
              </Text>
            </Button>
          </Box>
        </Box>
      </ScrollView>
    </AlertNotificationRoot>
  );
};

export default OtpScreen;

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
