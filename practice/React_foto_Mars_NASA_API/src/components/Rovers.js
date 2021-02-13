import React from 'react';
import Select from './Select';

const Rovers = React.memo(({rovers_list, manifestFetch, name}) => {
  const [value, setValue] = React.useState(null);

  const defaultProps = {
    options: rovers_list,
    getOptionLabel: (option) => option.rover,
  };

  const handleChange = (e, rover) => {
    if (rover !== null) {
      const newValue = rover.rover;
      setValue(rover);
      if (rover !== value && newValue !== '' && newValue !== name) {
        manifestFetch(newValue)
      }
    }
  } 

  return (
      <Select defaultProps={defaultProps} 
              value={value} 
              handleChange={handleChange}
              labell="Mars Rover"
              id='Mars_rover'
              text_mess='Please select NASA Mars rover'
        />
  );
});
export default Rovers;