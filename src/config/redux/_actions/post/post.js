import AsyncStorage from '@react-native-async-storage/async-storage';
import { Component } from 'react';

import { API, setAuthToken } from '../../../api/API';
import { GET_LIST, GET_DETAIL,  } from '../../../constans/constans';

export const getList = (limit, offset) => {
  let param =
    limit !== '' && offset !== '' ? `?offset=${offset}&limit=${limit}` : '';
  return {
    type: GET_LIST,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.post(`post/list${param}`);
      return res.data.data;
    },
  };
};

export const getDetail = id_posting => {
  return {
    type: GET_DETAIL,
    payload: async () => {
      const token = await AsyncStorage.getItem('token');
      setAuthToken(token);
      const res = await API.get(`post/detail/${id_posting}`);
      return res.data.data;
    },
  };
};

