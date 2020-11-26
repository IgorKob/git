// https://uk.reactjs.org/docs/typechecking-with-proptypes.html
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
    
    message:   PropTypes.string.isRequired,
    style:     PropTypes.object.isRequired,
    isMetric:  PropTypes.bool.isRequired,
    miles:     PropTypes.number.isRequired,
    milesToKM: PropTypes.func.isRequired,
    races:     PropTypes.array.isRequired
}

export default Asddd;