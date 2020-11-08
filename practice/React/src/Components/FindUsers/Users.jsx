import React from 'react'
import classes from "./FindUser.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../all/Paginator/Paginator";

const Users = ({totalItemsCount, pageSize, onPageChanged, currentPage,...props}) => {

  return (
    <div>

      <h3>Users</h3>

      <Paginator currentPage={currentPage}
                 onPageChanged={onPageChanged}
                 totalItemsCount={totalItemsCount}
                 pageSize={pageSize}
      />

      {props.users.map(el=>(
        <div key={el.id} className={classes.user_wrapper}>
          <div className={classes.user_box_left}>
            <NavLink to={'/profile/' + el.id}>
              <img src={el.photos.small || 'https://source.unsplash.com/random'} alt="" className={classes.user_img}/>
            </NavLink>
            {el.followBtn ?

              <button disabled={props.followingInProgress.some(el => el === el.id)}
                      // onClick={() => props.toggleFollowingInProgress(true, el.id)}
                      onClick={() => {props.follow(el.id)}}
                      className={classes.user_follow_btn}>UnFollow</button>

            : <button disabled={props.followingInProgress.some(el => el === el.id)}
                      // onClick={() => props.toggleFollowingInProgress(true, el.id)}
                      onClick={() => {props.unfollow(el.id)}}
                      className={classes.user_follow_btn}>Follow</button>
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
  )
}

export default Users;