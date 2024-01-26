import AsyncStorage from '@react-native-async-storage/async-storage';

export function logCurrentStorage() {
  AsyncStorage.getAllKeys().then(keyArray => {
    AsyncStorage.multiGet(keyArray).then(keyValArray => {
      let myStorage: any = {};
      for (let keyVal of keyValArray) {
        myStorage[keyVal[0]] = keyVal[1];
      }
      // eslint-disable-next-line no-console
      console.log('CURRENT STORAGE: ', myStorage);
    });
  });
}
