import {StyleSheet, View} from 'react-native';
import {COLORS} from '@theme/colors.ts';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';

interface BetweenTextDividerProps {
  label: string;
}

export const BetweenTextDivider = ({label}: BetweenTextDividerProps) => {
  return (
    <View style={styles.container}>
      <Line />
      <StyledText style={Typography.sm}>{label}</StyledText>
      <Line />
    </View>
  );
};

const Line = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center', gap: 8},
  line: {flex: 1, height: 1, backgroundColor: COLORS.BLACK},
});
