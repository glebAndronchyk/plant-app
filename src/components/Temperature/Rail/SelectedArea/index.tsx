import {StyleSheet, View} from 'react-native';
import {COLORS} from '@theme/colors.ts';
import {StyledText} from '@styled';
import {RAIL_HEIGHT} from '../../settings.ts';
import Typography from '@theme/typography.ts';

interface SelectedAreaProps {
  low: number;
  high: number;
}

const getNotchText = (numbers: number[]) => {
  return numbers
    .reduce<string[]>((acc, number) => {
      if (number > 0) {
        return [...acc, `+${number}`];
      }
      return [...acc, `${number}`];
    }, [])
    .join(' - ');
};

export const SelectedArea = ({low, high}: SelectedAreaProps) => {
  return (
    <>
      <View style={styles.notch}>
        <StyledText style={{...Typography.md}}>
          {getNotchText([low, high])}
        </StyledText>
      </View>
      <View style={styles.selectedArea} />
    </>
  );
};

const styles = StyleSheet.create({
  selectedArea: {
    backgroundColor: COLORS.GREEN[200],
    opacity: 0.4,
    height: RAIL_HEIGHT,
  },
  notch: {
    borderRadius: 10,
    minWidth: 95,
    backgroundColor: COLORS.GREEN[200],
    position: 'absolute',
    bottom: -40,
    left: '50%',
    transform: [{translateX: -45}],
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
