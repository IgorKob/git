import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  followBtn, getUsersThunkCreater,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingInProgress,
  toggleIsFetching, unfollow,
  unfollowBtn
} from "../../Redux/findUser_reducer";
import Users from "./Users";
import Preloader from "../all/Preloader/Preloader";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../Redux/users_selectors";

class FindUserAPIComponenta extends React.Component {

  componentDidMount() {

    this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize);

    // this.props.toggleIsFetching(true);
    // usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((data) => {
    //     this.props.toggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
    //   });
  }
  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunkCreater(pageNumber, this.props.pageSize);

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
               followingInProgress={this.props.followingInProgress}
               // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
               follow={this.props.follow}
               unfollow={this.props.unfollow}


        />
      </>
    );
  }
}

// let AuthRedirectComponent = withAuthRedirect(FindUserAPIComponenta)



// const mapStateToProps = (state) => {
//   return {
//     users: state.findUser.users,
//     pageSize: state.findUser.pageSize,
//     totalUsersCount: state.findUser.totalUsersCount,
//     currentPage: state.findUser.currentPage,
//     isFetching: state.findUser.isFetching,
//     followingInProgress: state.findUser.followingInProgress,
//   }
// }
const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}
export default compose(
  connect(mapStateToProps, {
    followBtn,
    unfollowBtn,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsersThunkCreater,
    follow,
    unfollow,
  }),
  // withAuthRedirect
)(FindUserAPIComponenta);