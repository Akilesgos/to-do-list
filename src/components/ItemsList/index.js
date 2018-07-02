import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import CheckboxList from '../CheckboxList';
import styles from './styles';

const renderItem = (items, addNewStatus) => {
  return items.map(({ text, checked }, index) => (
    <ListItem key={text}>
      <ListItemText primary={text} />
      <CheckboxList
        checked={checked}
        addNewStatus={addNewStatus}
        itemIndex={index}
      />
    </ListItem>
  ));
};

const ItemsList = (props) => {
  const { classes, items, addNewStatus } = props;

  return (
    <div className={classes.root}>
      <List>{items.length > 0 && renderItem(items, addNewStatus)}</List>
    </div>
  );
};
//свой чек бокч написать???? будет точно легче

ItemsList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemsList);
