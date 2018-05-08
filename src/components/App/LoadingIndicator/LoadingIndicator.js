import React from 'react';
import { View, ActivityIndicator } from 'react-native';

class LoadingIndicator extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
}

LoadingIndicator.propTypes = {

};

LoadingIndicator.defaultProps = {

};

export default LoadingIndicator;