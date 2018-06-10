import React from 'react';
import moment from 'moment';
import { StyleSheet, FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';
import ActionButton from 'react-native-action-button';

import COLORS from '../../../styles/colors';

import VaccinationListingItem from './VaccinationListingItem';
import Icon from '../../../../common/components/Icon/Icon';

class VaccinationListing extends React.Component {
  /**
   * Returns a unique key for every item row
   *
   * @param item
   * @private
   */
  _keyExtractor = (item) => {
    return `vaccination-listing-${item.date}-${item.type}-${item.period}`;
  };

  /**
   * Returns the row component
   *
   * @param row
   * @return {*}
   * @private
   */
  _renderItem = (row) => {
    return (
      <VaccinationListingItem vaccination={row.item} />
    );
  };

  /**
   * Go to add vaccination screen
   * @private
   */
  _addVaccination = () => {
    const { navigation } = this.props;

    navigation.navigate(
      'AddVaccinationScreen',
      {},
    );
  };

  render() {
    const { vaccinations } = this.props;
    const vaccinationListing = vaccinations.sort(function compare(a, b) {
      const dateA = moment(a.date, 'DD.MM.YYYY');
      const dateB = moment(b.date, 'DD.MM.YYYY');
      return dateA.isAfter(dateB);
    });

    return (
      <View style={{ flex: 1, backgroundColor: COLORS.LIGHTGRAY }}>
        <FlatList
          data={vaccinationListing}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={{
            flex: 1,
          }}
        />
        <ActionButton
          buttonColor={COLORS.SECONDARY}
          onPress={this._addVaccination}
        >
          <Icon set="material" name="add" size={20} color={COLORS.PRIMARY}
                style={styles.actionButtonIcon} />
        </ActionButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

VaccinationListing.propTypes = {
  vaccinations: PropTypes.any,
};

VaccinationListing.defaultProps = {
  vaccinations: [],
};

export default withNavigation(VaccinationListing);