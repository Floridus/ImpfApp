import React from 'react';
import { connect } from 'react-redux';

import VaccinationListing
  from '../../../../components/Vaccinations/VaccinationListing/VaccinationListing';
import { fetchVaccinations } from '../../stores/vaccinations';

class VaccinationListingContainer extends React.Component {

  componentDidMount() {
    this._fetchData();
  }

  /**
   * Defines the key used in query
   * @return {string}
   */
  _getQueryKey = () => 'vaccinationListing';

  /**
   * Fetches data we need in this component
   */
  _fetchData() {
    const { vaccinationStore, fetchVaccinations } = this.props;
    const queryKey = this._getQueryKey();

    if (!vaccinationStore.queries[queryKey]) {
      fetchVaccinations(queryKey);
    }
  }

  render() {
    const { vaccinationStore } = this.props;
    const queryKey = this._getQueryKey();

    const clientMetadata = vaccinationStore.metadata[queryKey];
    const vaccinations = vaccinationStore.queries[queryKey];

    // state
    const loading = (!clientMetadata || clientMetadata.loading);
    const errorMessage = !!(clientMetadata && clientMetadata.errorMessage);

    return (
      <VaccinationListing
        vaccinations={vaccinations}
        loading={loading}
        errorMessage={errorMessage}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    vaccinationStore: state.vaccinations,
  };
};

const mapDispatchToProps = {
  fetchVaccinations: fetchVaccinations,
};

VaccinationListingContainer.propTypes = {};

VaccinationListingContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VaccinationListingContainer);