import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const {height} = Dimensions.get('window');

const Register = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{padding: 20}}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.subtitle}>
          Welcome! Please sign up to continue.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#666"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#666"
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              /* Add sign-up functionality here */
            }}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{marginTop: 10}}>
          <Text style={styles.signUpText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: height / 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  imageContainer: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFBD33',
    marginBottom: 10,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFBD33',
    marginBottom: 20,
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
    marginTop: 20,
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
    textAlign: 'center',
  },
});
