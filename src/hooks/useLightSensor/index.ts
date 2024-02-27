import {
  hasLightSensor,
  startLightSensor,
  stopLightSensor,
} from 'react-native-ambient-light-sensor';
import {useCallback, useEffect, useState} from 'react';
import {DeviceEventEmitter} from 'react-native';

export const useLightSensor = () => {
  const [hasSensor, setHasSensor] = useState(false);
  const [lightLevel, setLightLevel] = useState(0);

  useEffect(() => {
    hasLightSensor().then(setHasSensor);
  }, []);

  const startLightSensorListening = useCallback(() => {
    if (hasSensor) {
      startLightSensor();
      const subscription = DeviceEventEmitter.addListener(
        'LightSensor',
        (data: {lightValue: number}) => {
          setLightLevel(data.lightValue);
        },
      );

      const timeoutId = setTimeout(() => {
        stopLightSensor();
        subscription.remove();
        clearInterval(timeoutId);
      }, 5000);
    }
  }, [hasSensor]);

  return {startLightSensorListening, hasSensor, lightLevel};
};
