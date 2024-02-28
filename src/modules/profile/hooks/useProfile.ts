import {StoreCreator, createStore} from '../../../lib/store';

type Values = {
  user: null | {
    name: string;
    email: string;
  };
};

type Actions = {
  updateUser: (user: Values['user']) => void;
};

type ProfileStore = Values & Actions;

const defaultValues: Values = {
  user: null,
};

const createProfileStore: StoreCreator<ProfileStore> = set => ({
  ...defaultValues,

  updateUser: user => {
    set({user});
  },
});

export const useProfile = createStore(createProfileStore);
