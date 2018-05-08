import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import VaccinationPropType from '../../../containers/Clients/proptypes/vaccinationPropType';
import { withNavigation } from 'react-navigation';
import { ListItem } from 'react-native-elements';

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
    const testAvatar = 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg';

    return (
      <TouchableOpacity
        onPress={this._goToDetail}
      >
        <ListItem
          title={vaccination.title}
          leftAvatar={{ source: { uri: testAvatar } }}
        />
      </TouchableOpacity>
    );
  }
}

VaccinationListingItem.propTypes = {
  vaccination: VaccinationPropType.isRequired,
};

VaccinationListingItem.defaultProps = {};

export default withNavigation(VaccinationListingItem);