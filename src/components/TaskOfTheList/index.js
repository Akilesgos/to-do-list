import React from 'react';
import PropTypes from 'prop-types';

import { List, ListItem, ListItemText } from '@material-ui/core';

import CheckboxTaskOfTheList from '../CheckboxTaskOfTheList';

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

const TaskOfTheList = ({ items, addNewStatus }) => (
  <List>{items.length > 0 && RenderTaskOfTheList(items, addNewStatus)}</List>
);

TaskOfTheList.propTypes = {
  addNewStatus: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
};

export default TaskOfTheList;
