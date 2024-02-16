import {MetaInfo} from './MetaInfo';
import {WeatherInfo} from './WeatherInfo';
import {WeatherVariantWrapper} from './WeatherVariantWrapper';
import {BackgroundWrapper} from './BackgroundWrapper';

export const WeatherWidget = () => {
  return (
    <WeatherVariantWrapper>
      <BackgroundWrapper>
        <WeatherInfo />
        <MetaInfo />
      </BackgroundWrapper>
    </WeatherVariantWrapper>
  );
};
