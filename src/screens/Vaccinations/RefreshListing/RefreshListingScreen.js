import React from 'react';
import RefreshListingContainer
  from '../../../containers/Vaccinations/components/RefreshListing/RefreshListingContainer';

class RefreshListingScreen extends React.Component {
  static navigationOptions = {
    title: 'Auffrischungen',
  };

  render() {
    return (
      <RefreshListingContainer />
    );
  }
}

RefreshListingScreen.propTypes = {};

RefreshListingScreen.defaultProps = {};

export default RefreshListingScreen;