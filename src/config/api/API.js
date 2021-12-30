import axios from 'axios';

export const URL = 'http://192.168.8.101:8000';
// export const URL = 'https://wahyumulyadi.my.id/public';
export const API = axios.create({
  baseURL: `${URL}/api/v1`,
});

export const setAuthToken = token => {
  API.defaults.headers.common.Authorization = `Bearer ${token}`;
  API.defaults.headers.common['Content-Type'] =
    'application/x-www-form-urlencoded';
  API.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
};
 