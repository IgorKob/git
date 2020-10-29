import React from 'react';
import classes from './FindUser.module.css';
import * as axios from 'axios';

class FindUser extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }


  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }



    return (
      <div>

        <h3>Users</h3>

        <div>
          {pages.map(el => {
            return (
            <span className={this.props.currentPage === el && classes.selectedPage}
                  onClick={(e) => {this.onPageChanged(el)}}

            >{el}</span>
            )
          })}
        </div>

        {this.props.users.map(el=>(
          <div key={el.id} className={classes.user_wrapper}>
            <div className={classes.user_box_left}>
              <img src={el.photos.small || 'https://source.unsplash.com/random'} alt="" className={classes.user_img}/>
              {el.followBtn
                ? <button onClick={() => { this.props.unfollowBtn(el.id)}} className={classes.user_follow_btn}>UnFollow</button>
                : <button onClick={() => { this.props.followBtn(el.id)}} className={classes.user_follow_btn}>Follow</button>
              }

            </div>
            <div className={classes.user_box_right}>
              <div className={classes.user_box_right_1}>
                <h5 className={classes.user_fullname}>{el.name}</h5>
                <div className={classes.user_text}>{el.status}</div>
              </div>
              <div className={classes.user_box_right_2}>
                <h5 className={classes.user_country}>{'el.location.country'}</h5>
                <div className={classes.user_city}>{'el.location.city'}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default FindUser;