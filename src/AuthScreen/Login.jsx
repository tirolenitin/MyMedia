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
import {loginUser, storeUserData} from '../Services/apiServices';
import {ALERT_TYPE, Dialog} from 'react-native-alert-notification';
import {validateFieldsLogin} from '../Components/Validations/Validations';
import Loader from '../Loader/Loader';

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleLogin = async () => {
    const validationErrors = validateFieldsLogin(email, password);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);

    try {
      const response = await loginUser(email, password);

      if (response.status === 200 && response.success) {
        await storeUserData(response.data);
        Dialog.show({
          type: ALERT_TYPE.SUCCESS,
          title: 'Success',
          textBody: response.message || 'User logged in successfully.',
          button: 'Close',
        });
        navigation.navigate('Home');
      } else {
        Dialog.show({
          type: ALERT_TYPE.DANGER,
          title: 'Error',
          textBody: response.message || 'Unknown error occurred.',
          button: 'Close',
        });
        setLoading(false);
      }
    } catch (error) {
      console.error('Login error:', error);
      Dialog.show({
        type: ALERT_TYPE.DANGER,
        title: 'Error',
        textBody: 'An error occurred while logging in. Please try again.',
        button: 'Close',
      });
      setLoading(false);
    }
  };

  return (
    <ScrollView bg="#FFFFFF" h={'100%'}>
      <Loader visible={loading} />
      <Box>
        <Box style={styles.imageContainer}>
          <Image
            source={require('../Assets/Images/login-image.png')}
            resizeMode="cover"
            height={height / 2}
            width="100%"
            alt='Image'
          />
        </Box>

        <Box p={5} borderTopLeftRadius={20} borderTopRightRadius={30}>
          <Box mb={5}>
            <Text fontSize={30} color="#FFBD33" fontWeight="600">
              Login
            </Text>
            <Text fontSize={14} color="#FFBD33" fontWeight="300">
              Welcome! Please log in to continue.
            </Text>
          </Box>
          <Box>
            <Box mb={3}>
              <Input
                borderRadius={10}
                color="#000"
                placeholder="Email"
                placeholderTextColor="#666"
                value={email}
                onChangeText={text => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </Box>
            <Box mb={1}>
              <Input
                borderRadius={10}
                color="#000"
                placeholder="Password"
                placeholderTextColor="#666"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </Box>
            <Pressable
              onPress={() => navigation.navigate('ForgetPassword')}
              alignItems="flex-end"
              mb={3}>
              <Text>Forgot Password?</Text>
            </Pressable>
          </Box>
          <Button
            onPress={handleLogin}
            bg="#FFBD33"
            w="100%"
            mb={2}
            borderRadius={10}>
            <Text fontSize={15} color="white" fontWeight="600">
              Sign In
            </Text>
          </Button>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent={'center'}
            mb={2}>
            <Text>Don't have an account? </Text>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
              <Text color="#FFBD33" fontWeight="600">
                Sign Up
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    marginBottom: 5,
  },
});

export default Login;
