import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignInScreen} from '../../modules/auth/screens/SignInScreen';
import {SignUpScreen} from '../../modules/auth/screens/SignUpScreen';

export type AuthScreensParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const Auth = createNativeStackNavigator<AuthScreensParamList>();

export function AuthRouter() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />

      <Auth.Screen name="SignUp" component={SignUpScreen} />
    </Auth.Navigator>
  );
}
