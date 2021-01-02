import React from 'react';
import {useSelector} from "react-redux";
import Users from "./Users";
import Preloader from "../all/Preloader/Preloader";
import {getIsFetching} from "../../Redux/users_selectors";

const FindUserAPIComponenta: React.FC = (props) => {
  const isFetching = useSelector(getIsFetching)

  return (
    <>
      {isFetching ? <Preloader /> : null }

      <Users />
    </>
  )
}

export default FindUserAPIComponenta;
