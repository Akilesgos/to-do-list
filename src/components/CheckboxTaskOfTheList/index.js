import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import styles from './styles';

const CheckboxTaskOfTheList = (props) => {
  const { addNewStatus, checked, itemIndex } = props;

  return <Checkbox onChange={() => addNewStatus(itemIndex)} value={checked} />;
};

CheckboxTaskOfTheList.propTypes = {
  addNewStatus: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  itemIndex: PropTypes.number.isRequired,
};

export default withStyles(styles)(CheckboxTaskOfTheList);
