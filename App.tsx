import React from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from './src/screens/Home';
import ConfirmOTP from './src/screens/ConfirmOTP';
import CustomHeader from './src/component/custom/header';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ConfirmOTP"
        component={ConfirmOTP}
        options={{
          header: () => <CustomHeader title="Xác nhận Mã OTP" />,
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default App;
