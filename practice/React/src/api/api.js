import React from 'react';
import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "b42f819d-5616-4291-8f0c-3ab9e7dd1f79"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 100) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getAuthMe() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  getProfile(userId) {
    console.log('Тут перенаправляє на новішу версію, кім')
    return profileAPI.getProfile(userId);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
      // .then(response => response.data);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
      // .then(response => response.data);
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}
