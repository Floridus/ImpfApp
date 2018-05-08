import React from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

/**
 * This library is a compatibility layer around @oblador/react-native-vector-icons to work with
 * the Expo asset system. If you're using React Native without Expo, you have no need for
 * this library -- carry on!
 */
class Icon extends React.Component {
  render() {
    const { name, set, ...restProps } = this.props;
    let iconComponent;

    switch (set) {
      case 'material': {
        iconComponent = <MaterialIcons
          name={name}
          {...restProps}
        />;
        break;
      }

      case 'ionic': {
        const iconName = (Platform.OS === 'ios') ? `ios-${name}` : `md-${name}`;
        iconComponent = <Ionicons
          name={iconName}
          {...restProps}
        />;
        break;
      }
    }

    return (
      iconComponent
    );
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  set: PropTypes.string.isRequired,
};

export default Icon;