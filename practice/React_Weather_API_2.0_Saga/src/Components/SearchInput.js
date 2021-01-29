import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { PropTypes } from 'prop-types';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'blue',
      fontWeight: 'bold',
      textShadow: '0 0 2px rgba(0, 0, 0, .3)',
      fontSize: '22px',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '3px solid blue',
        borderRadius: '5px',
        color: 'blue',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fff',
      },
    },
  },
})(TextField);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  margin: {
    margin: theme.spacing(1),
    width: '320px',
    backgroundColor: 'rgba(255,255,255,.6)',
  },
}));


const SearchInput = React.memo(({ onChange, onClick, value }) => {

  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <CssTextField
        className={classes.margin}
        label="Search weather..."
        variant="outlined"
        id="custom-css-outlined-input"
        autoFocus
        onChange={(event) =>
            onChange(event)
        }
        onKeyPress={(event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                onClick();
            }
        }}
        value={value}
      />
    </form>
  );
});

export default SearchInput;

SearchInput.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
};