import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import VaccinationDetailScreen from '../screens/Vaccinations/VaccinationDetail/VaccinationDetailScreen';

const RootNavigator = createStackNavigator({
    MainTabs: { screen: MainTabNavigator },

    VaccinationDetailScreen: { screen: VaccinationDetailScreen },
  },
  {
    initialRouteName: 'MainTabs',
    headerMode: 'none',
  });

export default RootNavigator;