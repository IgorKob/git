import React from 'react'
import classes from "../../FindUsers/FindUser.module.css";
import {NavLink} from "react-router-dom";

const Paginator = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map(el => {
        return (
          <span className={props.currentPage === el && classes.selectedPage}
                onClick={() => {props.onPageChanged(el)}}

          >{el}</span>
        )
      })}
    </div>
  )
}

export default Paginator;