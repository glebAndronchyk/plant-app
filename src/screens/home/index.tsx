import {ScrollView} from 'react-native';
import {WeatherWidget} from '@components/WeatherWidget';
import {containerStyles} from '@theme/containers.ts';
import {SmallGardenView} from '@components/Garden/SmallGardenView';

export const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={[containerStyles().marginContainer, {gap: 24}]}>
      <WeatherWidget />
      <SmallGardenView />
      {/*<ShareCareLog />*/}
      {/*<RecommendedChats />*/}
    </ScrollView>
  );
};
