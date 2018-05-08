import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import VaccinationPropType from '../../../containers/Clients/proptypes/vaccinationPropType';
import { withNavigation } from 'react-navigation';

class VaccinationListingItem extends React.Component {
  /**
   * Go to detail page
   * @private
   */
  _goToDetail = () => {
    const { vaccination, navigation } = this.props;

    console.log('GOING TO: ', vaccination);
    navigation.navigate(
      'VaccinationDetailScreen',
      {
        vaccinationId: vaccination.id,
      },
    );
  };

  render() {
    const { vaccination } = this.props;

    return (
      <TouchableOpacity
        onPress={this._goToDetail}
        style={{ paddingTop: 20, paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}
      >
        <Text>{vaccination.title}</Text>
      </TouchableOpacity>
    );
  }
}

VaccinationListingItem.propTypes = {
  vaccination: VaccinationPropType.isRequired,
};

VaccinationListingItem.defaultProps = {};

export default withNavigation(VaccinationListingItem);