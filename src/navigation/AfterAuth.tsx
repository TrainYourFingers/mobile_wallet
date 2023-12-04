import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screen/Login';
import Register from '../screen/Register';
import Dashboard from '../screen/Dashboard';
import Notifcation from '../screen/Notifcation';
import Transaction from '../screen/Transaction';

const AfterAuth = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Dashboard">
      <Stack.Screen
        options={{title: 'Dashboard', headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen
        options={{title: 'Notification', headerShown: false}}
        name="Notification"
        component={Notifcation}
      />
      <Stack.Screen
        options={{title: 'Transaction', headerShown: false}}
        name="Transaction"
        component={Transaction}
      />
    </Stack.Navigator>
  );
};

export default AfterAuth;
