import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import randomID from 'random-id';
import { AsyncStorage, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { showMessage, hideMessage } from 'react-native-flash-message';
import FlashMessage from 'react-native-flash-message';

import COLORS from '../../../styles/colors';

import MyDatePicker from '../../App/MyDatePicker/MyDatePicker';
import Vaccinations from '../Vaccinations/Vaccinations';
import NextRefresher from '../Vaccinations/NextRefresher';
import LoadingIndicator from '../../App/LoadingIndicator/LoadingIndicator';

class AddVaccination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: '',
      info: '',
      period: '',
      date: moment()
        .format('DD.MM.YYYY'),
    };
  }

  _changeState = (object) => {
    hideMessage();
    this.setState(object);
  };

  /**
   * Go to vaccination listing
   * @private
   */
  _goToVaccinationList = () => {

    console.log('_goToVaccinationList');
    this.setState({
      loading: false,
    });
    const { navigation } = this.props;

    navigation.navigate(
      'Vaccinations',
      {
        update: true,
      },
    );
  };

  _checkInputs() {
    return !(this.state.type === '' || this.state.period === '');
  }

  async _addVaccination() {
    if (!this._checkInputs()) {
      showMessage({
        message: 'Du hast noch nicht alle Angaben ausgefüllt',
        type: 'danger',
      });
      return;
    } else {
      this.setState({
        loading: true,
      });
    }

    let value;
    try {
      value = await AsyncStorage.getItem('@ImpfAppStore:vaccinations');
      if (value === null) {
        value = [];
      } else {
        value = JSON.parse(value);
      }
    } catch (error) {
      // Error retrieving data
      console.error(error);
      value = [];
    }
    const generatedId = randomID();

    const vaccination = {
      id: generatedId,
      date: this.state.date,
      type: this.state.type,
      period: this.state.period,
      info: this.state.info,
    };
    value.push(vaccination);

    try {
      await AsyncStorage.setItem('@ImpfAppStore:vaccinations', JSON.stringify(value));
    } catch (error) {
      // Error saving data
      console.error(error);
    }

    this._goToVaccinationList();
  }

  render() {
    const Wrapper = styled.View`
      flex: 1;
      padding: 10px;
    `;

    const FormGroup = styled.View`
      flex: 1;
      margin: 5px 0;
      height: 30px;
    `;

    const HeaderText = styled.Text`
      font-weight: bold;
      color: ${COLORS.PRIMARY};
      font-size: 16;
    `;

    const FormGroupTitle = styled.Text`
      font-weight: bold;
    `;

    if (this.state.loading) {
      return (
        <LoadingIndicator />
      );
    } else {
      return (
        <Wrapper>
          <HeaderText>Daten der neuen Impfung</HeaderText>
          <FormGroup>
            <FormGroupTitle>Datum</FormGroupTitle>
            <MyDatePicker onChangeDate={this._changeState} date={this.state.date} />
          </FormGroup>
          <FormGroup>
            <FormGroupTitle>Impfung</FormGroupTitle>
            <Vaccinations onChangeType={this._changeState} type={this.state.type} />
          </FormGroup>
          <FormGroup>
            <FormGroupTitle>Nächste Auffrischung</FormGroupTitle>
            <NextRefresher onChangePeriod={this._changeState} period={this.state.period} />
          </FormGroup>
          <FormGroup>
            <FormGroupTitle>
              Informationen <Text>(optional)</Text>
            </FormGroupTitle>
            <TextInput
              style={{ height: 40 }}
              multiline={true}
              value={this.state.info}
              onChangeText={(text) => this.setState({ info: text })}
            />
          </FormGroup>
          <Button
            icon={{ name: 'save' }}
            onPress={() => this._addVaccination()}
            backgroundColor={COLORS.SECONDARY}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='Speichern' />
          <FlashMessage position="top" />
        </Wrapper>
      );
    }
  }
}

AddVaccination.propTypes = {};

AddVaccination.defaultProps = {};

export default withNavigation(AddVaccination);