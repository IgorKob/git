import React from 'react';
import PropTypes from 'prop-types';


const Asddd = (props) =>{
    return (
        <ul style={styles.ul}>
            {props.arr.map((el, index) => {
                return <Li {...props} el={el} index={index}/>
            })}
        </ul>
    )
}

Asd.propTypes = {
    asd: PropTypes.array,
    asd2: PropTypes.arrayOf(PropTypes.object).isRequired,
    asd3: PropTypes.object.isRequired,
    asd4: PropTypes.number,
    myff: PropTypes.func.isRequired,
}

export default Asddd;