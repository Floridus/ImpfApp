import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import stores from './internal/reduxStore';

console.disableYellowBox = true;
export default class App extends React.Component {
  render() {
    return (
      <Provider store={stores}>
        <RootNavigator />
      </Provider>
    );
  }
}
