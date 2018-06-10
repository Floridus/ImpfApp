import React from 'react';
import VaccinationListingContainer
  from '../../../containers/Vaccinations/components/VaccinationListing/VaccinationListingContainer';

class VaccinationListingScreen extends React.Component {
  static navigationOptions = {
    title: 'Impfungen',
  };

  render() {
    return (
      <VaccinationListingContainer />
    );
  }
}

VaccinationListingScreen.propTypes = {};

VaccinationListingScreen.defaultProps = {};

export default VaccinationListingScreen;