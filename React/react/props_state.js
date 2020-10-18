import React from 'react';
import App2 from './App2';

// 1.
//App
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Igor', name2: 'Kob'};
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>
      <App2 name2={this.state.name2} />
      </>
    );
  }
}

//App2
import React from 'react';

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h1>Hellow: {this.props.name2}</h1>
  }
}

// 2.
//App
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Igor', name2: 'Kob'};
    this.myff = this.myff.bind(this);
  }
  myff(value) {
    this.setState({name: value});
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>
        <App2 myff={this.myff} />
      </>
    );
  }
}

//App2
import React from 'react';

export default class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'Oleg'};
  }
  render() {
    return <input onClick={() => this.props.myff(this.state.name)} type='button' value='ok'/>
  }
}
