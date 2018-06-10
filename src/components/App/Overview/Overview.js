import React from 'react';
import { ScrollView, Text, Linking } from 'react-native';
import { Card, Button } from 'react-native-elements';
import COLORS from '../../../styles/colors';

class Overview extends React.Component {
  handleClick = (url) => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log('Don\'t know how to open URI: ' + url);
        }
      });
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Card
          title='Österreichischer Impfplan 2018'
          image={{ uri: 'https://www.praxisvita.de/assets/styles/article_image/public/impfbuch-impfen-erwachsene-impfausweis.jpg?itok=00zaRlyq' }}>
          <Text style={{ marginBottom: 10 }}>
            Der "Impfplan Österreich 2018" enthält alle aktuellen, nationalen Impfempfehlungen.
          </Text>

          <Button
            icon={{ name: 'info' }}
            onPress={() => this.handleClick('https://www.bmgf.gv.at/home/Impfplan')}
            backgroundColor={COLORS.SECONDARY}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Mehr lesen' />
        </Card>

        <Card
          title='Reiseimpfungen'
          image={{ uri: 'https://www.gesundheit.gv.at/GenticsImageStore/547/auto/prop/r/leben/gesundheitsvorsorge/impfungen/Reiseimpfungen.jpg?p8d4ag&validation=094cf28c1f11069d9fe2aeab3503abbcf2e43ee11c88b8f7870e9745b03c9d58' }}>
          <Text style={{ marginBottom: 10 }}>
            Viele Infektionskrankheiten, die in Österreich nur noch selten vorkommen, sind in anderen Ländern weitverbreitet. Reiseimpfungen haben das Ziel, Reisende vor gefährlichen Infektionskrankheiten zu schützen.
          </Text>

          <Button
            icon={{ name: 'info' }}
            onPress={() => this.handleClick('https://www.gesundheit.gv.at/leben/gesundheitsvorsorge/impfungen/reiseimpfungen')}
            backgroundColor={COLORS.SECONDARY}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Mehr lesen' />
        </Card>
      </ScrollView>
    );
  }
}

Overview.propTypes = {};

Overview.defaultProps = {};

export default Overview;