import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css';
// import App from './App';

class Asd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.myff = this.myff.bind(this);

  }
  //  myff() {
  //   this.setState({visibility: !this.state.visibility})
  // }
  myff() {
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }

  render() {

    return (
      this.state.visibility ? <>
      <h1> {this.state.visibility.toString()}
      Visibility true</h1>
      <button onClick={this.myff}>ok</button>
    </> : <>
      <h1>{this.state.visibility.toString()} visibility false</h1 > <button onClick={this.myff}>ok</button>
    </>
   )
  }
}

export default Asd;

{/* ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root')); */}
