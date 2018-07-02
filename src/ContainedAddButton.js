import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: 150,
    height: 40,
  },
  input: {
    display: 'none',
  },
});


function ContainedButtons(props) {
  const { classes } = props;
  return (
    <Button
      variant="contained"
      onChange={props.handleToggle}
      color="primary"
      className={classes.button}
    >
      Add new thing
    </Button>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);