import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';

class NextRefresher extends React.Component {
  render() {
    const { period } = this.props;

    return (
      <Picker
        selectedValue={period ? period : null}
        style={{ flex: 1 }}
        prompt="Nächste Auffrischung"
        onValueChange={(itemValue, itemIndex) => this.props.onChangePeriod({ period: itemValue })}>
        <Picker.Item label='Nächste Auffrischung' value='' />
        <Picker.Item label="Keine" value="0" />
        <Picker.Item label="Nächstes Jahr" value="1" />
        <Picker.Item label="In 2 Jahren" value="2" />
        <Picker.Item label="In 3 Jahren" value="3" />
        <Picker.Item label="In 4 Jahren" value="4" />
        <Picker.Item label="In 5 Jahren" value="5" />
      </Picker>
    );
  }
}

NextRefresher.propTypes = {
  period: PropTypes.string,
  onChangePeriod: PropTypes.func.isRequired,
};

NextRefresher.defaultProps = {
  type: null,
};

export default NextRefresher;