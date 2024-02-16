import {View} from 'react-native';
import {WeatherWidget} from '@components/WeatherWidget';
import {containerStyles} from '@theme/containers.ts';

export const HomeScreen = () => {
  return (
    <View style={containerStyles().marginContainer}>
      <WeatherWidget />
      {/*<SearchPlant />*/}
      {/*<Garden />*/}
      {/*<ShareCareLog />*/}
      {/*<RecommendedChats />*/}
    </View>
  );
};
