import {navigationRef} from '../app/routes/MainRouter';

export const navigation = {
  navigate: navigationRef.navigate,
  goBack: navigationRef.goBack,
};
