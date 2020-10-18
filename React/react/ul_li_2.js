import React from 'react'
import ReactDOM from 'react-dom'

export default class Asd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {input: '', submit: '', arr: []}

    this.myff = this.myff.bind(this)
    this.myff2 = this.myff2.bind(this)
  }

  myff(event) {
    this.setState({input: event.target.value})
  }

  myff2(e) {
    e.preventDefault()
    this.setState({input: this.state.input, arr: [...this.state.arr, this.state.input]})
  }

  render() {
    return (
      <>
        <form onSubmit={this.myff2}>
          <input value={this.state.input} onChange={this.myff} />
          <button type='submit'>ok</button>
        </form>
        <hr/>
        <ul>
          {this.state.arr.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </>
    )
  }
}
