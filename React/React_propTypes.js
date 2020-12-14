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
    asd2: PropTypes.arrayOf(PropTypes.string),
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



//1.  Перевірка об'єктів
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

function App(props) {
  return (
    <div className="App">
      <h1>{props.user.name}</h1>
      <p>{props.user.age}</p>
    </div>
  );
}

App.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number
  })
};

const user = { name: "Sai", age: 3 };
ReactDOM.render(<App user={user} />, document.getElementById("root"));




// 2.   Перевірка масиву об'єктів
App.propTypes = {
    usersArray: PropTypes.arrayOf(
     PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.number
    })).isRequired
  };
