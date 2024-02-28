import RangeSlider from 'rn-range-slider';
import {Rail} from './Rail';
import {Thumb} from './Thumb';
import {SelectedArea} from './Rail/SelectedArea';
import {settings} from './settings.ts';
import {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import {Label} from '@components/forms/AddRoomForm/Label';

export const Temperature = () => {
  const [lowDefault, setLowDefault] = useState(settings.low);
  const [highDefault, setHighDefault] = useState(settings.high);

  const onValueChanged = useCallback((low: number, high: number) => {
    setLowDefault(low);
    setHighDefault(high);
  }, []);

  const renderRail = useCallback(() => <Rail />, []);
  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRailSelected = () => (
    <SelectedArea low={lowDefault} high={highDefault} />
  );

  return (
    <View style={{marginBottom: 24}}>
      <Label text="Temperature" />
      <View style={styles.markings}>
        <StyledText>{settings.min}°</StyledText>
        <StyledText>{settings.max}°</StyledText>
      </View>
      <RangeSlider
        {...settings}
        low={lowDefault}
        high={highDefault}
        renderRail={renderRail}
        renderThumb={renderThumb}
        onValueChanged={onValueChanged}
        renderRailSelected={renderRailSelected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  markings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
