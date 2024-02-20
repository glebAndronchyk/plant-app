import {ScrollView} from 'react-native';
import {WeatherWidget} from '@components/WeatherWidget';
import {containerStyles} from '@theme/containers.ts';
import {SmallGardenView} from '@components/Garden/SmallGardenView';
import {InfoCards} from '@components/InfoCards';
import {RecommendedChats} from '@components/RecommendedChats';

export const HomeScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={[containerStyles().marginContainer, {gap: 24}]}>
      <WeatherWidget />
      <SmallGardenView />
      <InfoCards />
      <RecommendedChats />
    </ScrollView>
  );
};
