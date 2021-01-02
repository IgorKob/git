import React from "react";
import { AppStateType } from "./redux_store";

export const getUsers = (state: AppStateType) => {
  return state.findUser.users;
}
export const getPageSize = (state: AppStateType) => {
  return state.findUser.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
  return state.findUser.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
  return state.findUser.currentPage;
}
export const getIsFetching = (state: AppStateType) => {
  return state.findUser.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
  return state.findUser.followingInProgress;
}