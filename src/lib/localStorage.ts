import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

export const localStorage = {
  getItem<T>(key: string) {
    const storagedData = storage.getString(key);
    return storagedData !== undefined ? (JSON.parse(storagedData) as T) : null;
  },
  setItem(key: string, data: unknown) {
    storage.set(key, JSON.stringify(data));
  },
  removeItem(key: string) {
    storage.delete(key);
  },
  clearAll() {
    storage.clearAll();
  },
};
