import React from 'react'
import classes from "./FindUser.module.css";
import {NavLink} from "react-router-dom";
import Paginator from "../all/Paginator/Paginator";

type PropsType = {
  totalItemsCount: number, 
  pageSize: number, 
  currentPage: number, 
  onPageChanged: (el: number) => void, 
   
  users: Array<any>,
  followingInProgress: Array<any>,
  unfollow: (id: number) => void,
  follow: (id: number) => void,
  followBtn: (id: number) => void,
  unfollowBtn: (id: number) => void,

}

const Users: React.FC<PropsType> = ({totalItemsCount, pageSize, onPageChanged, currentPage,...props}) => {

  return (
    <div>

      <h1>Users</h1>

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
                      // onClick={() => {props.follow(el.id)}}
                      onClick={() => {props.followBtn(el.id)}}
                      className={classes.user_follow_btn}>UnFollow</button>

            : <button disabled={props.followingInProgress.some(el => el === el.id)}
                      // onClick={() => {props.unfollow(el.id)}}
                      onClick={() => {props.unfollowBtn(el.id)}}
                      className={classes.user_follow_btn}>Follow</button>
            }

          </div>
          <div className={classes.user_box_right}>
            <div className={classes.user_box_right_1}>
              <h2 className={classes.user_fullname}>{el.name}</h2>
              <h3 className={classes.user_text}>{el.status}</h3>
            </div>
            <div className={classes.user_box_right_2}>
              <h3 className={classes.user_country}>{'el.location.country'}</h3>
              <h3 className={classes.user_city}>{'el.location.city'}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Users;