import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import COLORS from '../styles/colors';
import Icon from '../../common/components/Icon/Icon';
import VaccinationListingScreen
  from '../screens/Vaccinations/VaccinationListing/VaccinationListingScreen';
import OverviewScreen from '../screens/App/Overview/OverviewScreen';
import RefreshListingScreen from '../screens/Vaccinations/RefreshListing/RefreshListingScreen';

const MainTabNavigator = createBottomTabNavigator({
    Overview: {
      screen: OverviewScreen,
      path: 'overview',
      navigationOptions: ({ navigation }) => ({
        title: 'Übersicht',
        tabBarIcon: (iconState) => {
          return (
            <Icon set="material" name="home" size={20} color={iconState.tintColor} />
          );
        },
      }),
    },
    Vaccinations: {
      screen: VaccinationListingScreen,
      path: 'vaccinations',
      navigationOptions: ({ navigation }) => ({
        title: 'Impfungen',
        tabBarIcon: (iconState) => {
          return (
            <Icon set="material" name="healing" size={20} color={iconState.tintColor} />
          );
        },
      }),
    },
    Refreshes: {
      screen: RefreshListingScreen,
      path: 'refreshes',
      navigationOptions: ({ navigation }) => ({
        title: 'Auffrischungen',
        tabBarIcon: (iconState) => {
          return (
            <Icon set="material" name="autorenew" size={20} color={iconState.tintColor} />
          );
        },
      }),
    },
  },
  {
    initialRouteName: 'Overview',
    tabBarOptions: {
      activeTintColor: COLORS.WHITE,
      inactiveTintColor: COLORS.INACTIVE,
      style: {
        backgroundColor: COLORS.PRIMARY,
      },
    },
    navigationOptions: ({ navigation }) => ({
      title: navigation.title ? navigation.title : 'Test',
      ...navigation.navigationOptions,
    }),
  });

export default MainTabNavigator;