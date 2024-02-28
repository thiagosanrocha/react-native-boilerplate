import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CartRouter} from './CartRouter';
import {HomeScreen} from '../../screens/HomeScreen';
import {ProductRouter} from './ProductRouter';
import {ProfileRouter} from './ProfileRouter';

export type TabsScreensParamsList = {
  Home: undefined;
  Products: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tabs = createBottomTabNavigator<TabsScreensParamsList>();

export function TabsRouter() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen
        name="Products"
        component={ProductRouter}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Cart"
        component={CartRouter}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileRouter}
        options={{headerShown: false}}
      />
    </Tabs.Navigator>
  );
}
