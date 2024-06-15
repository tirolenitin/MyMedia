import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import BackIcon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const ResetPassword = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleOtpChange = otp => {
    setOtp(otp);
  };

  const handleSubmit = () => {
    // Implement your logic to verify OTP and reset password
    console.log('OTP entered:', otp);
    // Example navigation after OTP verification (replace with your logic)
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../Assets/Images/reset-password-image.png')}
          style={styles.background}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <Text style={styles.subtitle}>
          Create new password and enjoy our media
        </Text>
        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFBD33',
    marginBottom: 10,
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFBD33',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 15,
    borderRadius: 25,
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
  },
  forgotPasswordText: {
    color: '#000',
    // marginBottom: 20,
    // textAlign: 'right',
    // width: '100%',
  },
  buttonContainer: {
    width: '100%',
    height: 45,
    borderRadius: 25,
    backgroundColor: '#FFBD33',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  signUpText: {
    color: '#000',
    marginTop: 10,
  },
});
