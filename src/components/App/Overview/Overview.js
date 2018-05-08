import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';

class Overview extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Card
          title='HELLO WORLD'
          image='https://www.praxisvita.de/assets/styles/article_image/public/impfbuch-impfen-erwachsene-impfausweis.jpg?itok=00zaRlyq'>
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual
            design.
          </Text>


          <Button
            icon={{ name: 'code' }}
            backgroundColor='#03A9F4'
            fontFamily='Lato'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
        </Card>
      </View>
    );
  }
}

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;