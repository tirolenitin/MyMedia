import axios from 'axios';
import {api_base_url} from '../utils/Constant';
import {ApiRequest} from './apiRequest';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const userRegistration = async (payload) =>{
  console.log("payload",payload);
  try {
    const response = await ApiRequest(
      'POST',
      `${api_base_url}/auth/user/create-user`,
      payload
    )
  
    // console.log("responsedata",response);
    if(response && response.status === 201){
      return response
    }
  } catch (error) {
    console.log(error.massage);
  }
  
}

export const uploadProfile = async( formData) =>{
  console.log("==============>",formData);
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const response = await axios.post(`${api_base_url}/auth/user/upload-profile`, formData, config);
    if( response &&response.data.status === 200 ){
       console.log('Response received:', response.data);
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      console.log('Error response data:', error.response.data);
      console.log('Error response status:', error.response.status);
    } else if (error.request) {
      console.log('Error request:', error.request);
    } else {
      console.log('Error message:', error.message);
    }
  }
}
// export const verifyUser = async (email, otp) => {
//   try {
//     const response = await axios.put(`${api_base_url}/auth/user/verify-user`, {
//       email,
//       otp,
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const verifyUser = async (payload) => {
  console.log(payload);
  try {
   const response = await axios.put(`${api_base_url}/auth/user/verify-user`,payload);
   console.log("response hai",response.data);
   if(response.data && response.data.status === 200){
    return response.data;
   }
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const endpoint = `${api_base_url}/auth/user/login-user`;
    const response = await axios.post(endpoint, {email, password});
    console.log('response.data: ', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const storeUserData = async userData => {
  console.log('userData: ', userData);
  try {
    await AsyncStorage.setItem('userData', JSON.stringify(userData));
  } catch (error) {
    throw error;
  }
};

export const getUserData = async () => {
  try {
    const userData = await AsyncStorage.getItem('user-token', userData.token);
    return userData ? JSON.parse(userData) : null;
  } catch (error) {
    throw error;
  }
};

export const getUserToken = async () => {
  try {
    const userToken = await AsyncStorage.getItem('userData');
    if (userToken) {
      const parsedData = JSON.parse(userToken);
      return parsedData.token;
    }
    return null;
  } catch (error) {
    throw error;
  }
};

export const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem('userData');
  } catch (error) {
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const userData = await AsyncStorage.getItem('userData');
    const token = userData ? JSON.parse(userData).token : null;

    if (!token) {
      throw new Error('Token not found');
    }

    const endpoint = `${api_base_url}/auth/user/user-profile`;
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
