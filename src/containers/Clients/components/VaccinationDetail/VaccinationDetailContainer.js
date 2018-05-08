import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VaccinationDetail from '../../../../components/Clients/VaccinationDetail/VaccinationDetail';

class VaccinationDetailContainer extends React.Component {

  componentDidMount() {
    this._fetchData();
  }

  /**
   * Defines the key used in query
   * @return {string}
   */
  _getQueryKey() {
    const { vaccinationId } = this.props;
    return `vaccinationDetail-${vaccinationId}`;
  }

  /**
   * Fetches data we need in this component
   */
  _fetchData() {
    const { vaccinationStore, vaccinationId } = this.props;
    const queryKey = this._getQueryKey();

    // if (!vaccinationStore.queries[queryKey]) {
    //   fetchClient(queryKey, vaccinationId);
    // }
  }

  render() {
    const { vaccinationStore, vaccinationId } = this.props;
    const queryKey = this._getQueryKey();

    const vaccinationMetadata = vaccinationStore.metadata[queryKey];
    const vaccination = vaccinationStore.allEntries[vaccinationId];
    
    console.log('LADE '+ vaccinationId, vaccinationStore.allEntries);

    // state
    const loading = (!vaccination && (!vaccinationMetadata || vaccinationMetadata.loading));
    const error = !!(vaccinationMetadata && vaccinationMetadata.error);

    return (
      <VaccinationDetail
        vaccination={vaccination}
        loading={loading}
        error={error}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    vaccinationStore: state.vaccinations
  };
};

const mapDispatchToProps = {
};

VaccinationDetailContainer.propTypes = {
  vaccinationId: PropTypes.number.isRequired,
};

VaccinationDetailContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VaccinationDetailContainer);