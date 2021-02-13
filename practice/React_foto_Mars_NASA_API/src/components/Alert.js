import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
      width: '100%',
      '& > * + *': {
      marginTop: theme.spacing(2),
      },
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const AlertApp = () => {
  const classes = useStyles();
  return <Alert severity="error">An error occurred, reload the page!</Alert>
}

AlertApp.propTypes = {
  mess: PropTypes.string,
};