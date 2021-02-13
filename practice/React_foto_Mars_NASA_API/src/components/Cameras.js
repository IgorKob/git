import React from 'react';
import { useEffect } from 'react';
import Select from './Select';

const Cameras = React.memo(({cameras_list, setCamera}) => {
  const [value, setValue] = React.useState(null);

  useEffect(() => {
    setValue(null);
  }, [cameras_list]);

  const defaultProps = {
    options: cameras_list,
    getOptionLabel: (option) => option.camera,
  };

  const handleChange = (e, newValue) => {
    setValue(newValue);
    return newValue ? setCamera(newValue.camera) : setCamera(null);
  }

  return (<>
             <Select defaultProps={defaultProps} 
                     value={value} 
                     handleChange={handleChange}
                     labell="Rover camera"
                     id='Rover_camera'
                     text_mess='Please select rover camera'
                />
    </>
  );
});
export default Cameras;