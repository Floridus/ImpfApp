import { createStackNavigator } from 'react-navigation';
import MainTabNavigator from './MainTabNavigator';
import VaccinationDetailScreen
  from '../screens/Vaccinations/VaccinationDetail/VaccinationDetailScreen';
import { Platform } from 'react-native';
import COLORS from '../styles/colors';

const RootNavigator = createStackNavigator({
    MainTabs: {
      screen: MainTabNavigator,
      navigationOptions: ({ navigation }) => ({
        ...navigation.navigationOptions,
      }),
    },

    VaccinationDetailScreen: { screen: VaccinationDetailScreen },
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