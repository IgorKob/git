import React from "react";
import classes from "./FormsControls.module.css";

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import ErrorIcon from '@material-ui/icons/Error';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));


export const FormConntrol = ({input, meta, child,...props}) => {
  const hasError = meta.touched && meta.error;

  const classes = useStyles();

  return (
    <div className={classes.root}>

    <div className={hasError ? classes.error : ''}>
      {props.children}
      <div>

{hasError && (
       <Chip
       icon={<ErrorIcon />}
       label={meta.error}
       color="secondary"
     />

)}

      
      </div>
      </div>
    </div>
  )
}

export const Textarea = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormConntrol {...props}><textarea {...input} {...restProps} /></FormConntrol>
}

export const Input = (props) => {
  const {input, meta, child, ...restProps} = props;
  return <FormConntrol {...props}><input {...input} {...restProps} /></FormConntrol>
}