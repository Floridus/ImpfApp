import React from 'react';
import OverviewContainer from '../../../containers/App/Overview/OverviewContainer';

class OverviewScreen extends React.Component {
  static navigationOptions = {
    title: 'Übersicht',
  };

  render() {
    return (
      <OverviewContainer />
    );
  }
}

OverviewScreen.propTypes = {};

OverviewScreen.defaultProps = {};

export default OverviewScreen;