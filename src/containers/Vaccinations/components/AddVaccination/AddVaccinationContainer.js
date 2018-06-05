import React from 'react';

import AddVaccination from '../../../../components/Vaccinations/AddVaccination/AddVaccination';

class AddVaccinationContainer extends React.Component {
  render() {
    console.log('Füge Impfung hinzu');

    return (
      <AddVaccination />
    );
  }
}

AddVaccinationContainer.propTypes = {
};

AddVaccinationContainer.defaultProps = {};

export default AddVaccinationContainer;