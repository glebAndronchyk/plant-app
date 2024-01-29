import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '@navigation/RootStack/types.ts';
import {AuthStackParamList} from '@navigation/RootStack/AuthStack/types.ts';

export const RootStackNavigator = createStackNavigator<RootStackParamList>();
export const HomeTabsNavigator = createBottomTabNavigator();
export const AuthStackNavigator = createStackNavigator<AuthStackParamList>();
