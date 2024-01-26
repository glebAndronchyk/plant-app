import {StyleSheet, View} from 'react-native';
import {Button} from '@components/Button';
import {OnboardingCardProps} from '../types.ts';

interface ActionButtonsProps
  extends Pick<OnboardingCardProps, 'handlePressSkip'> {
  handlePressNext: OnboardingCardProps['handlePressSkip'];
  isLastCard: boolean;
}

export const ActionButtons = ({
  handlePressNext,
  handlePressSkip,
  isLastCard,
}: ActionButtonsProps) => {
  const nextButtonSize = isLastCard ? 'lg' : 'md';
  const nextButtonLabel = isLastCard ? 'Get Started!' : 'Next';

  return (
    <View style={styles.container}>
      {!isLastCard && (
        <Button
          label="Skip"
          variant="outlined"
          size="md"
          onPress={handlePressSkip}
        />
      )}
      <Button
        label={nextButtonLabel}
        size={nextButtonSize}
        onPress={handlePressNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
