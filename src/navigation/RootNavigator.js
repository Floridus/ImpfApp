import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import COLORS from '../styles/colors';

import MainTabNavigator from './MainTabNavigator';

import VaccinationDetailScreen
  from '../screens/Vaccinations/VaccinationDetail/VaccinationDetailScreen';
import AddVaccinationScreen from '../screens/Vaccinations/AddVaccination/AddVaccinationScreen';

const RootNavigator = createStackNavigator({
    MainTabs: {
      screen: MainTabNavigator,
      navigationOptions: ({ navigation }) => ({
        ...navigation.navigationOptions,
        title: 'ImpfApp',
      }),
    },

    VaccinationDetailScreen: { screen: VaccinationDetailScreen },
    AddVaccinationScreen: { screen: AddVaccinationScreen },
  },
  {
    initialRouteName: 'MainTabs',
    headerMode: (Platform.OS === 'ios') ? 'float' : 'screen',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: COLORS.WHITE,
      headerStyle: {
        backgroundColor: COLORS.PRIMARY,
      },
      headerTransitionPreset: 'fade-in-place',
    }),
  });

export default RootNavigator;