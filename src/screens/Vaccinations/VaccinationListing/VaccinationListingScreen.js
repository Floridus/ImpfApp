import React from 'react';
import ClientListingContainer
  from '../../../containers/Clients/components/VaccinationListing/VaccinationListingContainer';

class VaccinationListingScreen extends React.Component {
  static navigationOptions = {
    title: 'Impfungen',
  };

  render() {
    return (
      <ClientListingContainer />
    );
  }
}

VaccinationListingScreen.propTypes = {};

VaccinationListingScreen.defaultProps = {};

export default VaccinationListingScreen;