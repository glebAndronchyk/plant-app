import {View} from 'react-native';
import {containerStyles} from '@theme/containers.ts';
import {ImageCard} from '@components/cards/ImageCard';
import {Plant} from '@app_types/api/plants.ts';
import {PlusCard} from '@components/cards/PlusCard';
import {Label} from '@components/forms/AddRoomForm/Label';

//this should be done with redux
const plants: Plant[] = [
  // @ts-expect-error
  {name: 'Ogurec', imageUrl: 'https://picsum.photos/200/300'},
  // @ts-expect-error

  {name: 'Pomidor', imageUrl: 'https://picsum.photos/200/300'},
  // @ts-expect-error

  {name: 'Gorox', imageUrl: 'https://picsum.photos/200/300'},
  // @ts-expect-error

  {name: 'Perchik', imageUrl: 'https://picsum.photos/200/300'},
];

export const PlantsList = () => {
  return (
    <View>
      <Label text="Choose plants" />
      <View style={containerStyles().listContainer}>
        {plants.map((plant, index) => (
          <ImageCard
            key={index}
            label={plant.name || ''}
            imageSource={{uri: plant.imageUrl || ''}}
            variant="tiny"
          />
        ))}
        <PlusCard
          onPress={() => console.log('search')}
          variant="tiny"
          labelPosition="under"
          label="Add plant"
        />
      </View>
    </View>
  );
};
