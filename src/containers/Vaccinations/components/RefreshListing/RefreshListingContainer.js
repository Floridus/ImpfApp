import React from 'react';

import RefreshListing
  from '../../../../components/Vaccinations/RefreshListing/RefreshListing';
import { AsyncStorage } from 'react-native';
import LoadingIndicator from '../../../../components/App/LoadingIndicator/LoadingIndicator';

class RefreshListingContainer extends React.Component {
  constructor(props) {
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
    return true;
  }

  /**
   * Fetches data we need in this component
   */
  async _fetchData() {
    console.log('fetchData');

    let value;
    try {
      console.log('test');
      value = await AsyncStorage.getItem('@ImpfAppStore:vaccinations');
      console.log('Test2');
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
    console.log(vaccinations);

    return (
      <RefreshListing vaccinations={vaccinations} />
    );
  }
}

RefreshListingContainer.propTypes = {};

RefreshListingContainer.defaultProps = {};

export default RefreshListingContainer;