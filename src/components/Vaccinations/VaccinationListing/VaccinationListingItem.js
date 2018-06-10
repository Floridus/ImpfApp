import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';
import COLORS from '../../../styles/colors';

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
    const testAvatar = 'https://cdn.icon-icons.com/icons2/568/PNG/512/vaccine_2_icon-icons.com_54420.png';

    return (
      <TouchableOpacity
        onPress={this._goToDetail}
      >
        <ListItem
          title={vaccination.type}
          subtitle={vaccination.date}
          avatar={{ uri: testAvatar }}
          avatarStyle={{ backgroundColor: COLORS.LIGHTGRAY }}
        />
      </TouchableOpacity>
    );
  }
}

VaccinationListingItem.propTypes = {
  vaccination: PropTypes.object.isRequired,
};

VaccinationListingItem.defaultProps = {};

export default withNavigation(VaccinationListingItem);