import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  wrap: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  }, 
}));

export default function SelectApp({arr, title, subTitle, value, setValue}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.wrap}>
      <FormControl className={classes.formControl}>
        <InputLabel id={title}>{title}</InputLabel>
        <Select
          labelId={title}
          id={title + 1}
          value={value}
          onChange={handleChange}
        >
          {arr.map(el => (<MenuItem key={el} value={el}>{el}</MenuItem>))}
        </Select>
        <FormHelperText>{subTitle}</FormHelperText>
      </FormControl>
    </div>
  );
}