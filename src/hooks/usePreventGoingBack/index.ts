import {useEffect} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

export const usePreventGoingBack = (navigation: StackNavigationProp<any>) => {
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      e.preventDefault();
    });
  }, [navigation]);
};
