import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';

import CheckboxTaskOfTheList from '../CheckboxTaskOfTheList';
import styles from './styles';

const RenderTaskOfTheList = (items, addNewStatus) => {
  return items.map(({ text, checked }, index) => (
    <ListItem key={text}>
      <ListItemText primary={text} />
      <CheckboxTaskOfTheList
        checked={checked}
        addNewStatus={addNewStatus}
        itemIndex={index}
      />
    </ListItem>
  ));
};

const TaskOfTheList = (props) => {
  const { classes, items, addNewStatus } = props;

  return (
    <div className={classes.root}>
      <List>
        {items.length > 0 && RenderTaskOfTheList(items, addNewStatus)}
      </List>
    </div>
  );
};

TaskOfTheList.propTypes = {
  classes: PropTypes.object.isRequired,
  addNewStatus: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default withStyles(styles)(TaskOfTheList);
