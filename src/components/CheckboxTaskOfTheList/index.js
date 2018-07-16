import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';

const CheckboxTaskOfTheList = ({ addNewStatus, checked, itemIndex }) => (
  <Checkbox onChange={() => addNewStatus(itemIndex)} value={checked} />
);

CheckboxTaskOfTheList.propTypes = {
  addNewStatus: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  itemIndex: PropTypes.number.isRequired,
};

export default CheckboxTaskOfTheList;
