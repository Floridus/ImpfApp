import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/de';
import { ListItem } from 'react-native-elements';
import COLORS from '../../../styles/colors';

class RefreshListingItem extends React.Component {
  render() {
    moment.locale('de');

    const { vaccination } = this.props;
    const nextRefreshPeriod = parseInt(vaccination.period);
    const nextRefreshDate = moment(vaccination.date, 'DD.MM.YYYY')
      .locale('de')
      .add(nextRefreshPeriod, 'year');
    const testAvatar = 'https://cdn.icon-icons.com/icons2/568/PNG/512/vaccine_2_icon-icons.com_54420.png';

    return (
      <ListItem
        title={vaccination.type}
        subtitle={`Nächste Auffrischung ab ${nextRefreshDate.format('MMMM YYYY')}`}
        rightIcon={{ style: { color: COLORS.LIGHTGRAY } }}
        avatar={{ uri: testAvatar }}
        avatarStyle={{ backgroundColor: COLORS.LIGHTGRAY }}
      />
    );
  }
}

RefreshListingItem.propTypes = {
  vaccination: PropTypes.object.isRequired,
};

RefreshListingItem.defaultProps = {};

export default RefreshListingItem;