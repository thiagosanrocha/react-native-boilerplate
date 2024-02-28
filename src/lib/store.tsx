import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {localStorage} from './localStorage';

export type StoreCreator<T> = (set: SetStore<T>) => T;
type SetStore<T> = (store: Partial<T> | ((store: T) => Partial<T>)) => void;
type StoreSelector<T> = <R>(selector: (store: T) => R) => R;

function buildStore<T>(storeCreator: StoreCreator<T>): StoreSelector<T> {
  return create(storeCreator);
}

function buildPersistedStore<T>(
  key: string,
  storeCreator: StoreCreator<T>,
): StoreSelector<T> {
  return create(
    persist(storeCreator, {
      name: key,
      storage: localStorage,
    }),
  );
}

export const createStore = Object.assign(buildStore, {
  persisted: buildPersistedStore,
});
