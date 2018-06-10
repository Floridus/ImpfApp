import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VaccinationDetail
  from '../../../../components/Vaccinations/VaccinationDetail/VaccinationDetail';
import { AsyncStorage } from 'react-native';

class VaccinationDetailContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      vaccination: null,
    };
  }

  componentDidMount() {
    this._fetchData();
  }


  /**
   * Fetches data we need in this component
   */
  async _fetchData() {
    console.log('fetchData');
    const { vaccinationId } = this.props;

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

    const vaccination = value.find(x => x.id = vaccinationId);

    return value;
  }

  render() {
    const { vaccination, loading } = this.state;

    console.log('LADE ' + vaccination.id, vaccination);

    return (
      <VaccinationDetail
        vaccination={vaccination}
        loading={loading}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    vaccinationStore: state.vaccinations,
  };
};

const mapDispatchToProps = {};

VaccinationDetailContainer.propTypes = {
  vaccinationId: PropTypes.number.isRequired,
};

VaccinationDetailContainer.defaultProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VaccinationDetailContainer);