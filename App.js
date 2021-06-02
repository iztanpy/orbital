import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import logInScreen from './components/logInScreen';
import signUpScreen from './components/signUpScreen';
import cameraScreen from './components/cameraScreen';
import tempHomeScreen from './components/tempHomeScreen';
import tempForgetScreen from './components/tempForgetScreen';

import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();

export default function App() {
    return (
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="login">
              <Stack.Screen name="login" component={logInScreen} />
              <Stack.Screen name="signup" component={signUpScreen} />
              <Stack.Screen name="camera" component={cameraScreen} />
              <Stack.Screen name="tempHome" component={tempHomeScreen} />
              <Stack.Screen name="tempForget" component={tempForgetScreen} />
            </Stack.Navigator>
          </NavigationContainer>
          <FlashMessage position="top" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});