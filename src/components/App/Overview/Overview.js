import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import COLORS from '../../../styles/colors';

class Overview extends React.Component {
  render() {
    const testUrl = 'https://www.praxisvita.de/assets/styles/article_image/public/impfbuch-impfen-erwachsene-impfausweis.jpg?itok=00zaRlyq';

    return (
      <View style={{ flex: 1 }}>
        <Card
          title='Hello World'
          image={{ uri: testUrl }}>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual
            design.
          </Text>

          <Button
            icon={{ name: 'info' }}
            backgroundColor={COLORS.SECONDARY}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Mehr lesen' />
        </Card>
      </View>
    );
  }
}

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;