import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function AlignItemsList(props) {
  const classes = useStyles();
  return (
    <div className={classes.wrap}>
      <List className={classes.root}>
        {props.children}
      </List>
    </div>
  );
}