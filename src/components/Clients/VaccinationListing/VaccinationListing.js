import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import VaccinationPropType from '../../../containers/Clients/proptypes/vaccinationPropType';
import VaccinationListingItem from './VaccinationListingItem';
import LoadingIndicator from '../../App/LoadingIndicator/LoadingIndicator';
import ActionButton from 'react-native-action-button';
import COLORS from '../../../styles/colors';
import Icon from '../../../../common/components/Icon/Icon';

class VaccinationListing extends React.Component {
  /**
   * Returns a unique key for every item row
   *
   * @param item
   * @private
   */
  _keyExtractor = (item) => {
    return `vaccination-listing-${item.id}`;
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

  render() {
    const { vaccinations, errorMessage, loading } = this.props;

    if (errorMessage) {
      return (
        <View>
          <Text>FEHLER: {errorMessage}</Text>
        </View>
      );
    }

    if (loading) {
      return (
        <LoadingIndicator />
      );
    }

    return (
      <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <FlatList
          data={vaccinations}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          style={{
            flex: 1,
          }}
        />
        <ActionButton
          buttonColor={COLORS.SECONDARY}
          onPress={() => {
            console.log('hi');
          }}
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
  vaccinations: PropTypes.arrayOf(VaccinationPropType),
  loading: PropTypes.bool,
  errorMessage: PropTypes.string,
};

VaccinationListing.defaultProps = {
  vaccinations: [],
  loading: false,
  errorMessage: null,
};

export default VaccinationListing;