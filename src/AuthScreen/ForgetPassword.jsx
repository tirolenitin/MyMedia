import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import BackIcon from 'react-native-vector-icons/Ionicons';

const {height} = Dimensions.get('window');

const ForgetPassword = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        {/* Add icon TouchableOpacity */}
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.goBack()}>
          <BackIcon name="arrow-back" color="black" />
        </TouchableOpacity>
        <Image
          source={require('../Assets/Images/forget-password-image.png')}
          style={styles.background}
        />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>
          Please enter your email to reset your password.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginTop: 10}}>
          <Text style={styles.backToLoginText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ForgetPassword;

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
    zIndex: 1, // Ensure the icon is above the background image
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#FFF', // Adjust icon color if necessary
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
