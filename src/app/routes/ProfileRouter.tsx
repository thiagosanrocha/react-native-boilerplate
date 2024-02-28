import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileAddressScreen} from '../../modules/profile/screens/ProfileAddressScreen';
import {ProfileScreen} from '../../modules/profile/screens/ProfileScreen';
import {ProfileSecurityScreen} from '../../modules/profile/screens/ProfileSecurityScreen';

export type ProfileScreensParamsList = {
  ProfileResume: undefined;
  ProfileAddress: undefined;
  ProfileSecurity: undefined;
};

const Profile = createNativeStackNavigator();

export function ProfileRouter() {
  return (
    <Profile.Navigator>
      <Profile.Screen name="ProfileResume" component={ProfileScreen} />
      <Profile.Screen name="ProfileAddress" component={ProfileAddressScreen} />
      <Profile.Screen
        name="ProfileSecurity"
        component={ProfileSecurityScreen}
      />
    </Profile.Navigator>
  );
}
