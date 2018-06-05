import React from 'react';
import PropTypes from 'prop-types';
import { Picker } from 'react-native';

class Vaccinations extends React.Component {
  render() {
    const { type } = this.props;

    return (
      <Picker
        selectedValue={type ? type : null}
        style={{ flex: 1 }}
        prompt="Impfung auswählen"
        onValueChange={(itemValue, itemIndex) => this.props.onChangeType({ type: itemValue })}>
        <Picker.Item value='' label='Impfung auswählen' />
        <Picker.Item label="Diphtherie" value="Diphtherie" />
        <Picker.Item label="Tetanus" value="Tetanus" />
      </Picker>
    );
  }
}

Vaccinations.propTypes = {
  type: PropTypes.string,
  onChangeType: PropTypes.func.isRequired,
};

Vaccinations.defaultProps = {
  type: null,
};

export default Vaccinations;