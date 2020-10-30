import React from 'react';
import * as axios from 'axios';

class Home extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users?page=1&count=5')
      .then((response) => {
        this.props.onAdd2Message(response.data.items);
      });
    return
  }

  render() {
    return (
      <>
        <h1>Home</h1>
        <input type='text' 
          onChange={(e) => this.props.onNewMessage(e.target.value)} 
          value={this.props.newMessage}/>
        <button onClick={() => this.props.onAddMessage()}>Add</button>
        <div>
          {this.props.messages.map((el) => {
            return (
              <>
                <div key={el.id}>
                  {el.id}.) {el.name}: {el.text} 
                  <span onClick={()=>this.props.onDelMessage(el.id)}>
                  -------------------delete</span>
                </div>
              </>
            )
          })}
        </div>
      </>
    )
  }
}

export default Home;