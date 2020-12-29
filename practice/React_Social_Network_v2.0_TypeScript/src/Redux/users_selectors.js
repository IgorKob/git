import React from "react";

export const getUsers = (state) => {
  return state.findUser.users;
}
export const getPageSize = (state) => {
  return state.findUser.pageSize;
}
export const getTotalUsersCount = (state) => {
  return state.findUser.totalUsersCount;
}
export const getCurrentPage = (state) => {
  return state.findUser.currentPage;
}
export const getIsFetching = (state) => {
  return state.findUser.isFetching;
}
export const getFollowingInProgress = (state) => {
  return state.findUser.followingInProgress;
}