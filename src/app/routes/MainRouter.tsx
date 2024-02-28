import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAuthCredentials} from '../../modules/auth/hooks/useAuthCredentials';
import {AuthRouter, AuthScreensParamList} from './AuthRouter';
import {GlobalModal} from '../../screens/GlobalModal';
import {TabsRouter, TabsScreensParamsList} from './TabsRouter';
import {CartScreensParamList} from './CartRouter';
import {ProductScreensParamList} from './ProductRouter';
import {ProfileScreensParamsList} from './ProfileRouter';

export type ScreensParamList = MainScreensParamList &
  AuthScreensParamList &
  CartScreensParamList &
  ProductScreensParamList &
  ProfileScreensParamsList &
  TabsScreensParamsList;

export type MainScreensParamList = {
  Tabs: undefined;
  Auth: undefined;
  GlobalModal: undefined;
};

export const navigationRef = createNavigationContainerRef<ScreensParamList>();
const Main = createNativeStackNavigator<MainScreensParamList>();

export function MainRouter() {
  const isLogged = useAuthCredentials(store => store.isLogged);

  return (
    <NavigationContainer ref={navigationRef}>
      <Main.Navigator>
        {isLogged ? (
          <Main.Screen
            name="Tabs"
            component={TabsRouter}
            options={{headerShown: false}}
          />
        ) : (
          <Main.Screen
            name="Auth"
            component={AuthRouter}
            options={{headerShown: false}}
          />
        )}

        <Main.Group key="GlobalModals" screenOptions={{presentation: 'modal'}}>
          <Main.Screen name="GlobalModal" component={GlobalModal} />
        </Main.Group>
      </Main.Navigator>
    </NavigationContainer>
  );
}
