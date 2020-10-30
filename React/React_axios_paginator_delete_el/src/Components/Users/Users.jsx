import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.startPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.addUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setStartPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.addUsers(response.data.items);
      });
  }

  render() {
    let n = Math.ceil(this.props.totalCount /  this.props.pageSize);
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }

    return (
      <div>
        <div>
          {arr.map(el => {
            return (
              <span className={this.props.startPage === el && classes.active}
                onClick={(e) => {this.onPageChanged(el)}}
              >
                {el}
              </span>
            )
          })}
        </div>

        <div>
          {this.props.users.map(el => {
            return (
            <div key={el.id}>{el.id}.) {el.name}</div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Users;