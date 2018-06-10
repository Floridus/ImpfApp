import React from 'react';
import moment from 'moment/moment';
import { FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import RefreshListingItem from './RefreshListingItem';
import COLORS from '../../../styles/colors';

class RefreshListing extends React.Component {
  /**
   * Returns a unique key for every item row
   *
   * @param item
   * @private
   */
  _keyExtractor = (item) => {
    return `refresh-listing-${item.date}-${item.type}-${item.period}`;
  };

  /**
   * Returns the row component
   *
   * @param row
   * @return {*}
   * @private
   */
  _renderItem = (row) => {
    const period = parseInt(row.item.period);
    if (period > 0) {
      return (
        <RefreshListingItem vaccination={row.item} />
      );
    }
  };

  render() {
    const { vaccinations } = this.props;
    const vaccinationListing = vaccinations.sort(function compare(a, b) {
      const dateA = moment(a.date, 'DD.MM.YYYY')
        .add(parseInt(a.period), 'years');
      const dateB = moment(b.date, 'DD.MM.YYYY')
        .add(parseInt(b.period), 'years');
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
      </View>
    );
  }
}

RefreshListing.propTypes = {
  vaccinations: PropTypes.any,
};

RefreshListing.defaultProps = {
  vaccinations: [],
};

export default withNavigation(RefreshListing);