import React from 'react';
import { withNavigation } from 'react-navigation';

import VaccinationListing
  from '../../../../components/Vaccinations/VaccinationListing/VaccinationListing';
import { AsyncStorage } from 'react-native';
import LoadingIndicator from '../../../../components/App/LoadingIndicator/LoadingIndicator';

class VaccinationListingContainer extends React.Component {
  constructor(props) {
    console.log('constructor');
    super(props);

    this.state = {
      loading: true,
      vaccinations: [],
    };
  }

  componentDidMount() {
    console.log('componentDidMount');

    this._fetchData()
      .then(val => {
        this.setState({
          loading: false,
          vaccinations: val,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    const shouldUpdate = nextProps.navigation.getParam('update', false);
    console.log('shouldComponentUpdate() - shouldUpdate', shouldUpdate);
    if (shouldUpdate) {
      nextProps.navigation.setParams({ update: false });
      this._fetchData()
        .then(val => {
          this.setState({
            loading: false,
            vaccinations: val,
          });
        })
        .catch(error => {
          console.error(error);
        });
    }
    return true;
  }

  /**
   * Fetches data we need in this component
   */
  async _fetchData() {
    console.log('fetchData');

    const { navigation } = this.props;
    const shouldUpdate = navigation.getParam('update', false);
    console.log('render() - shouldUpdate', shouldUpdate);

    let value;
    try {
      value = await AsyncStorage.getItem('@ImpfAppStore:vaccinations');
      if (value === null) {
        value = [];
      } else {
        value = JSON.parse(value);
      }
    } catch (error) {
      // Error retrieving data
      console.error(error);
      value = [];
    }
    console.log(value);

    return value;
  }

  render() {
    if (this.state.loading) {
      return (
        <LoadingIndicator />
      );
    }

    const { vaccinations } = this.state;

    return (
      <VaccinationListing vaccinations={vaccinations} />
    );
  }
}

VaccinationListingContainer.propTypes = {};

VaccinationListingContainer.defaultProps = {};

export default withNavigation(VaccinationListingContainer);