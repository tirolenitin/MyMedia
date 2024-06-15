import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import OTPTextInput from 'react-native-otp-textinput';
import BackIcon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {/* Add icon TouchableOpacity */}
        <TouchableOpacity
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
        </TouchableOpacity>
        <Image
          source={require('../Assets/Images/otp-image.png')}
          style={styles.background}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>OTP </Text>
        <Text style={styles.subtitle}>
          Please enter the 4-digit OTP sent to your email.
        </Text>
        <OTPTextInput
          style={styles.input}
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
          }}
          containerStyle={{marginBottom: 20}}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  imageContainer: {
    height: height / 2,
    position: 'relative', // Ensure the icon position is relative to this container
  },
  backIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    marginTop: 10,
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
    padding: 10,
    marginRight: 10,
    height: 45,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: '#fff',
    color: '#000',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 2,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
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
  backToLoginText: {
    color: '#000',
    textAlign: 'center',
    marginTop: 10,
  },
});
