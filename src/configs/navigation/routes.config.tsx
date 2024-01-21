import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../screens/login/index.screen';
import SplashScreen from '../../screens/splash/index.screen';
import HomeScreen from '../../screens/home/index.screen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
