import React from 'react';
import { View, Text } from 'react-native';
import ClientListingContainer from '../../../containers/Clients/components/VaccinationListing/VaccinationListingContainer';

class VaccinationListingScreen extends React.Component {
  render() {
    return (
      <ClientListingContainer />
    );
  }
}

VaccinationListingScreen.propTypes = {};

VaccinationListingScreen.defaultProps = {};

export default VaccinationListingScreen;