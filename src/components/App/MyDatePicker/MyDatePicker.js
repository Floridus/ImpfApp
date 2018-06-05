import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';

class MyDatePicker extends Component {
  render() {
    return (
      <DatePicker
        style={{ flex: 1 }}
        date={this.props.date}
        mode="date"
        placeholder="Datum auswählen"
        format="DD.MM.YYYY"
        minDate="1990-01-01"
        confirmBtnText="Ok"
        cancelBtnText="Abbrechen"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {
          this.props.onChangeDate({ date: date });
        }}
      />
    );
  }
}

MyDatePicker.propTypes = {
  date: PropTypes.string,
  onChangeDate: PropTypes.func.isRequired,
};

MyDatePicker.defaultProps = {
  date: null,
};

export default MyDatePicker;