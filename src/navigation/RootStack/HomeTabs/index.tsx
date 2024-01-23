import {HomeTabsNavigator} from '@navigators';
import {SearchScreen} from '@screens/search';
import {BlogScreen} from '@screens/blog';
import {DiagnosticsScreen} from '@screens/diagnostics';
import {HomeScreen} from '@screens/home';

const {Navigator, Screen} = HomeTabsNavigator;

export const HomeTabs = () => {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Search" component={SearchScreen} />
      <Screen name="Blog" component={BlogScreen} />
      <Screen name="Diagnostics" component={DiagnosticsScreen} />
    </Navigator>
  );
};
