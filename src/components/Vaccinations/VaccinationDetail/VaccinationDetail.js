import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import LoadingIndicator from '../../App/LoadingIndicator/LoadingIndicator';

class VaccinationDetail extends React.Component {

  render() {
    const { vaccination, loading } = this.props;

    if (loading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Text>Detail über {vaccination.title}</Text>
      </View>
    );
  }
}

VaccinationDetail.propTypes = {
  vaccination: PropTypes.object,
};

VaccinationDetail.defaultProps = {
  vaccination: [],
};

export default VaccinationDetail;