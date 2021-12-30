import AsyncStorage from '@react-native-async-storage/async-storage';
import { Component } from 'react';
import { ToastAndroid } from 'react-native';

import { API, setAuthToken } from '../../../api/API';
import {
  CODE_FORGOT,
  FORGOT_PASSWORD,
  LOGIN,
  LOGOUT,
  REGISTER,
  REGISTER_FINISH,
  RESET_PASSWORD,
} from '../../../constans/constans';

export const login = data => {
  return {
    type: LOGIN,
    payload: async () => {
      const res = await API.post('auth/login', data).catch(err => {
        return Promise.reject(err);
      });
      if (res.data.code == 0) {
        ToastAndroid.show('Login Success', ToastAndroid.BOTTOM);
        await AsyncStorage.setItem('token', res.data.data.api_token);
        await AsyncStorage.setItem('email', res.data.data.email);
        await AsyncStorage.setItem('id', res.data.data.id.toString());
        const ress = {
          authenticated: true,
          user: res.data.data,
        };
        return ress;
      } else {
        return res;
      }
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.post('auth/logout').catch(err => {
        return Promise.reject(err);
      });

      if (res.data.code == 0 && res != undefined) {
        AsyncStorage.clear();
        const ress = {
          authenticated: false,
          user: null,
        };
        return ress;
      }
      ToastAndroid.show('Logout Gagal', ToastAndroid.CENTER);
    },
  };
};

export const register = data => {
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post('auth/register', data).catch(e => {
        return Promise.reject(e);
      });

      if (res.data.code == 0) {
        ToastAndroid.show('Register Success', ToastAndroid.CENTER);
        await AsyncStorage.setItem('token', res.data.data.token);
        await AsyncStorage.setItem('name', res.data.data.name);
        await AsyncStorage.setItem('email', res.data.data.email);
        await AsyncStorage.setItem('id', res.data.data.id.toString());
        console.log( res.data.data.token)
        console.log( res.data.data.name)
        const ress = {
          authenticated: true,
          user: res.data.data,
        };
        return ress;
      }
    },
  };
};

export const registerFinish = data => {
  return {
    type: REGISTER_FINISH,
    payload: async () => {
      const res = await API.post('auth/register/finish', data).catch(e => {
        return Promise.reject(e);
      });
      return res.data.code;
    },
  };
};

export const forgotPassword = data => {
  return {
    type: FORGOT_PASSWORD,
    payload: async () => {
      const res = await API.post('auth/forgot_password', data);
      return res.data.data;
    },
  };
};

export const checkCode = data => {
  return {
    type: CODE_FORGOT,
    payload: async () => {
      const res = await API.post('auth/check_code', data);
      return res.data.data;
    },
  };
};
export const resetPassword = data => {
  return {
    type: RESET_PASSWORD,
    payload: async () => {
      const res = await API.post('auth/reset_password', data);
      return res.data.data;
    },
  };
};
