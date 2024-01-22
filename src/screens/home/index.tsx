import {Button} from '@components/Button';
import {View} from 'react-native';
import SearchIcon from '@icons/search.svg';

export const HomeScreen = () => {
  return (
    <View
      style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#DFDBDB',
      }}>
      <Button
        label="Label"
        variant="filled"
        size="lg"
        LeftIcon={SearchIcon}
        RightIcon={SearchIcon}
      />
    </View>
  );
};
