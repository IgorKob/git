
import React from 'react';
import ReactDOM from 'react-dom';
//import Car from './App.js';
//import './App.css';
//import styles from './mystyle.module.css';
//import './mysass.scss';
//import Mykim1 from './mykim1.js';
//import Mykim2 from './mykim2.js';
//import Names from './mykim3.js';
//import Mykim4 from './mykim4.js'
import './mykimstyle.css';



function Car2(props) {
    return (<div className={"mydiv-" + props.clas}>
          {props.children}
    </div>
  );
}
class Car extends React.Component {
  render() {
    return <Car2 clas='a'>
             <h1>ikon</h1>
             <p>kobr nkhjk</p>
    </Car2>
  }
}
//ReactDOM.render(<Car />, document.getElementById('root'));





function Border(props) {
  return (<div>
<div>aaaaaaaaaaaaaaaa</div>
        {props.children}
    </div>);
}
function Dani(props) {
  return  (<Border><div>
<h1 >{props.title}</h1>
<p>{props.message}</p>
        {props.children}</div>
    </Border>);
}
class Car3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: ''
    };
    this.myff = this.myff.bind(this);
    this.myff2 = this.myff2.bind(this);

  }
myff(event) {
  this.setState({login: event.target.value});
}
myff2(event) {

          alert("igor kob" + this.state.login);
}
  render() {
    return <Dani title="ikom" message='kobryn' ><div>
<input type='text' value={this.state.login} onChange={this.myff} />
<input type='button' value="OKKKKK" onClick={this.myff2} /></div>
    </Dani>
  }
}
ReactDOM.render(<Car3 />, document.getElementById('root'));
