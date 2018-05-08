import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import COLORS from '../styles/colors';
import Icon from '../../common/components/Icon/Icon';
import VaccinationListingScreen
  from '../screens/Vaccinations/VaccinationListing/VaccinationListingScreen';
import OverviewScreen from '../screens/App/Overview/OverviewScreen';

const MainTabNavigator = createBottomTabNavigator({
    Overview: {
      screen: OverviewScreen,
      path: 'overview',
      navigationOptions: ({ navigation }) => ({
        title: `Übersicht`,
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
        title: `Impfungen`,
        tabBarIcon: (iconState) => {
          return (
            <Icon set="material" name="healing" size={20} color={iconState.tintColor} />
          );
        },
      }),
    },
  },
  {
    initialRouteName: 'Overview',
    tabBarOptions: {
      activeTintColor: COLORS.PRIMARY,
      inactiveTintColor: COLORS.INACTIVE,
    },
  });

export default MainTabNavigator;