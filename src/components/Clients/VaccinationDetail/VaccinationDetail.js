import React from 'react';
import { Text, View } from 'react-native';
import VaccinationPropType from '../../../containers/Clients/proptypes/vaccinationPropType';
import LoadingIndicator from '../../App/LoadingIndicator/LoadingIndicator';

class VaccinationDetail extends React.Component {

  render() {
    const { vaccination, error, loading } = this.props;

    if (loading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <View style={{ flex: 1, marginTop: 100 }}>
        <Text>Detail über {vaccination.title}</Text>
      </View>
    );
  }
}

VaccinationDetail.propTypes = {
  vaccination: VaccinationPropType,
};

VaccinationDetail.defaultProps = {
  vaccination: [],
};

export default VaccinationDetail;