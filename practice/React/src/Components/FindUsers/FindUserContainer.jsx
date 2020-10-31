import React from 'react';
import {connect} from "react-redux";
import {
  followBtn,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollowBtn
} from "../../Redux/findUser_reduce";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../all/Preloader/Preloader";

class FindUserAPIComponenta extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);

        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }


  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  }


  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null }

        <Users currentPage={this.props.currentPage}
               onPageChanged={this.onPageChanged}
               users={this.props.users}
               unfollowBtn={this.props.unfollowBtn}
               followBtn={this.props.followBtn}
               totalUsersCount={this.props.totalUsersCount}
               pageSize={this.props.pageSize}


        />
      </>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    users: state.findUser.users,
    pageSize: state.findUser.pageSize,
    totalUsersCount: state.findUser.totalUsersCount,
    currentPage: state.findUser.currentPage,
    isFetching: state.findUser.isFetching,
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     followBtn: (userId) => {
//       dispatch(addFwollowActionCreator(userId))
//     },
//     unfollowBtn: (userId) => {
//       dispatch(addUnFollowActionCreator(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users))
//     },
//     setCurrentPage: (pageNumber) => {
//       dispatch(setCurrentPageActionCreator(pageNumber))
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountActionCreator(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingCountActionCreator(isFetching))
//     },
//   }
// }

// const FindUserContainer = connect(mapStateToProps, mapDispatchToProps)(FindUserAPIComponenta);

// const FindUserContainer = connect(mapStateToProps, {
//       followBtn: addFwollowActionCreator,
//       unfollowBtn: addUnFollowActionCreator,
//       setUsers: setUsersActionCreator,
//       setCurrentPage: setCurrentPageActionCreator,
//       setTotalUsersCount: setTotalUsersCountActionCreator,
//       toggleIsFetching: toggleIsFetchingCountActionCreator,
// })(FindUserAPIComponenta);

const FindUserContainer = connect(mapStateToProps, {
  followBtn,
  unfollowBtn,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(FindUserAPIComponenta);

export default FindUserContainer;