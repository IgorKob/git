import React from 'react';
import classes from './dialog.module.css';
import {NavLink, useRouteMatch,
  useParams} from "react-router-dom";

const Dialog = (props) => {
  let match = useRouteMatch();
  return (
    <>
      <NavLink to={`${match.url}/${props.name}`}>{props.name}</NavLink>
    </>
  );
}

export default Dialog;