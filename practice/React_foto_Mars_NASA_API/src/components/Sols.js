import React from 'react';
import { useEffect } from 'react';
import Select from './Select';

const Sols = React.memo(({sols_list, setSol}) => {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    setValue(null);
  }, [sols_list]); 

  const defaultProps = {
    options: sols_list,
    getOptionLabel: (option) => option.text,
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
    return newValue ? setSol(newValue.sol) : setSol(null);
  }

  return (<>
      <Select defaultProps={defaultProps} 
              value={value} 
              handleChange={handleChange}
              labell="Mars sol"
              id='Mars_sol'
              text_mess='Please select Mars sol'
        />
    </>
  );
});
export default Sols;