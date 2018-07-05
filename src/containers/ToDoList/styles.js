import green from '@material-ui/core/colors/green';

const styles = (theme) => ({
  paper: {
    flexGrow: 1,
    marginTop: '10%',
    padding: theme.spacing.unit * 2,
    height: '100%',
    maxWidth: 350,
    width: '100%',
    color: theme.palette.text.secondary,
  },
  input: {
    width: '100%',
    maxWidth: 360,
  },
  button: {
    marginTop: '4%',
    width: '100%',
    maxWidth: 360,
  },
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
  size: {
    width: 40,
    height: 40,
  },
  sizeIcon: {
    fontSize: 20,
  },
});

export default styles;
