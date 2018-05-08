import React from 'react';
import VaccinationDetailContainer
  from '../../../containers/Clients/components/VaccinationDetail/VaccinationDetailContainer';

class VaccinationDetailScreen extends React.Component {
  render() {
    const { navigation } = this.props;
    const vaccinationId = navigation.getParam('vaccinationId');

    return (
      <VaccinationDetailContainer
        vaccinationId={vaccinationId}
      />
    );
  }
}

VaccinationDetailScreen.propTypes = {};

VaccinationDetailScreen.defaultProps = {};

export default VaccinationDetailScreen;