import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../AuthScreen/Login';
import Register from '../AuthScreen/Register';
import Splash from '../AuthScreen/Splash';
import Home from '../Screen/Home';
import TakeSelfie from '../Screen/TakeSelfie';
import Uploads from '../Screen/Uploads';
import Profile from '../Screen/Profile';
import ForgetPassword from '../AuthScreen/ForgetPassword';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  const [initialRouteName, setInitialRouteName] = useState('Splash');

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="HomeTab" component={BottomStackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;

const BottomStackNavigation = ({navigation}) => {
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Home',
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="TakeSelfie"
      component={TakeSelfie}
      options={{
        title: 'Selfie',
        headerShown: false,
      }}
    />

    <Tab.Screen
      name="Uploads"
      component={Uploads}
      options={{
        title: 'Uploads',
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        title: 'Menu',
        headerShown: false,
      }}
    />
  </Tab.Navigator>;
};
