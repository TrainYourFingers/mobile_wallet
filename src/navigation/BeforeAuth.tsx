import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Register from '../screen/Register';

const BeforeAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login">
      <Stack.Screen
        options={{title: 'Login', headerShown: false}}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{title: 'Register', headerShown: false}}
        name="Register"
        component={Register}
      />
    </Stack.Navigator>
  );
};

export default BeforeAuth;
