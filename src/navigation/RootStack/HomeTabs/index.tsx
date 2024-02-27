import {HomeTabsNavigator} from '@navigators';
import {SearchScreen} from '@screens/search';
import {BlogScreen} from '@screens/blog';
import {DiagnosticsScreen} from '@screens/diagnostics';
import {HomeScreen} from '@screens/home';
import {MainHeader} from '@components/headers/MainHeader';
import {AddRoomScreen} from '@screens/garden/add-room';
import {PlantRoomScreen} from '@screens/garden/plant-room';
import {AddRoomHeader} from '@components/headers/AddRoomHeader';

const {Navigator, Screen} = HomeTabsNavigator;

export const HomeTabs = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen
        options={{header: MainHeader}}
        name="Home"
        component={HomeScreen}
      />
      <Screen name="Search" component={SearchScreen} />
      <Screen name="Blog" component={BlogScreen} />
      <Screen name="Diagnostics" component={DiagnosticsScreen} />
      <Screen name="PlantRoom" component={PlantRoomScreen} />
      <Screen
        name="AddRoom"
        options={{header: AddRoomHeader}}
        component={AddRoomScreen}
      />
    </Navigator>
  );
};
