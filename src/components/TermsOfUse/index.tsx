import {Linking, StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {StyledCheckbox} from '@components/inputs/StyledCheckbox';
import {StyledCheckboxProps} from '@components/inputs/StyledCheckbox/types.ts';

interface TermsOfUseProps
  extends Omit<StyledCheckboxProps, 'DescriptionComponent'> {}

export const TermsOfUse = ({onChange}: TermsOfUseProps) => {
  return (
    <View style={styles.container}>
      <StyledCheckbox
        onChange={onChange}
        DescriptionComponent={() => (
          <StyledText style={Typography.caption}>
            {'  '}By creating an account, I accept the{' '}
            <StyledText
              onPress={() =>
                Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
              }
              style={{...Typography.caption, textDecorationLine: 'underline'}}>
              Terms of Use
            </StyledText>
          </StyledText>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
});
