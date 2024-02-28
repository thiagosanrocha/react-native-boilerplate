import {StoreCreator, createStore} from '../../../lib/store';
import {AuthCredentials} from '../models/authCredentials';
import {signInRequest} from '../requests/signInRequest';

type Values = {
  isLogged: boolean;
  token: string | null;
  refreshToken: string | null;
};

type Actions = {
  signIn: (credentials: AuthCredentials) => Promise<void>;
  signUp: () => void;
};

type AuthCredentialsStore = Values & Actions;

const defaultValues: Values = {
  isLogged: false,
  token: null,
  refreshToken: null,
};

const authStore: StoreCreator<AuthCredentialsStore> = set => ({
  ...defaultValues,

  signIn: async credentials => {
    const {token, refreshToken} = await signInRequest(credentials);

    set(store => ({
      ...store,
      isLogged: true,
      token,
      refreshToken,
    }));
  },

  signUp: () => {
    set(defaultValues);
  },
});

export const useAuthCredentials = createStore.persisted<AuthCredentialsStore>(
  'auth',
  authStore,
);
