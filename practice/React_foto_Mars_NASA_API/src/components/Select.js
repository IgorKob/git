import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormHelperText from '@material-ui/core/FormHelperText';
import styled from 'styled-components';

const Header = styled.header`
  max-width: 300px; 
  margin: 30px auto;
  padding-top: 50px;
  color: red;
  z-index: 2;
`;

const Select = React.memo(({defaultProps, value, handleChange, labell, id, text_mess}) => {
  return (
    <Header>
      <Autocomplete
        {...defaultProps}
        id={id}
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} label={labell} margin="normal" />}
      />
      {value === null && (<FormHelperText  >{text_mess}</FormHelperText>)}
    </Header>
  );
});
export default Select;