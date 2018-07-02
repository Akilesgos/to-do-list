import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const ContainedAddButton = (props) => {
  const { addNewItem, item } = props;

  return (
    <Button
      variant="contained"
      onClick={() => addNewItem(item)}
      color="primary"
    />
  );
};

ContainedAddButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ContainedAddButton;
