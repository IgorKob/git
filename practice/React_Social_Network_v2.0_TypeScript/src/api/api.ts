import React from 'react';
import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "064ca897-2f9a-4843-9689-d7892c0de963"
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 100, term = '') {
    return instance.get(`users?page=${currentPage}&count=${pageSize}&term=${term}`)
      .then(response => response.data);
  },
  getAuthMe() {
    return instance.get(`auth/me`)
      .then(response => response.data);
  },
  getProfile(userId: number | null) {
    // console.log('Тут перенаправляє на новішу версію, кім')
    return profileAPI.getProfile(userId);
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`);
  },

}

export const profileAPI = {
  getProfile(userId: number | null) {
    return instance.get(`profile/${userId}`)
      .then(response => response.data);
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, {status: status});
  },
  savePhoto(photoFile: any) {
    const formData = new FormData();
    formData.append('image', photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  saveProfile(profile: any) {
    return instance.put(`profile`, profile);
  },
}

type meResponseType = {
  data: {
    id: number,
    email: string,
    login: string
  },
  resultCode: number,
  messages: Array<string>
}

export const authAPI = {
  me() {
    return instance.get<meResponseType>(`auth/me`)
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
  },
  logout() {
    return instance.delete(`auth/login`)
  },
}


export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
}