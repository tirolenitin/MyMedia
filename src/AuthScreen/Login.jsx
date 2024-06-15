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

const {height} = Dimensions.get('window');

const Login = ({navigation}) => {
  return (
    <ScrollView>
      <Box>
        <Box style={styles.imageContainer}>
          <Image
            source={require('../Assets/Images/login-image.png')}
            resizeMode="cover"
            height={height / 2}
            width="100%"
          />
        </Box>

        <Box
          p={5}
          bg="#FFFFFF"
          borderTopLeftRadius={20}
          borderTopRightRadius={30}>
          <Box mb={5}>
            <Text fontSize={30} color="#FFBD33" fontWeight="600">
              Login
            </Text>
            <Text fontSize={14} color="#FFBD33" fontWeight="200">
              Welcome! Please log in to continue.
            </Text>
          </Box>
          <Box>
            <Input
              borderRadius={10}
              mb={3}
              color="#000"
              placeholder="Email"
              placeholderTextColor="#666"
              secureTextEntry
            />
            <Input
              borderRadius={10}
              mb={1}
              color="#000"
              placeholder="Password"
              placeholderTextColor="#666"
              secureTextEntry
            />
            <Pressable
              onPress={() => navigation.navigate('ForgetPassword')}
              alignItems="flex-end"
              mb={3}>
              <Text>Forgot Password?</Text>
            </Pressable>
          </Box>
          <Button
            onPress={() => navigation.navigate('HomeTab')}
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
});

export default Login;
