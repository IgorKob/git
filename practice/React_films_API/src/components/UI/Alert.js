import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { PropTypes } from 'prop-types';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertApp = () => {
  return <Alert severity="error">An error occurred, reload the page!</Alert>
}
export default AlertApp;

AlertApp.propTypes = {
  mess: PropTypes.string,
};