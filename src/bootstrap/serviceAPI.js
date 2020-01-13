import axios from 'axios'

let BASE_URL = `http://approc.com/~approctest/hendy/api/`;
// let BASE_URL = `http://192.168.1.2/hendy/api/`;

export default {
  BASE_URL: 'http://approc.com/~approctest/hendy/api/',
  // BASE_URL: 'http://192.168.1.2/hendy/api/',

  AUTH_LOGIN: 'admin/login',

  ALL_CATEGORIES: 'category',
  ADD_CATEGORIES: 'category/create',
  DELETE_CATEGORIES: 'category/delete',
  FIND_CATEGORIES: 'category/find',
  EDIT_CATEGORIES: 'category/update',


  ALL_OPTIONS: 'option',
  ADD_OPTIONS: 'option/create',
  FIND_OPTIONS: 'option/find',
  EDIT_OPTIONS: 'option/update',
  DELETE_OPTIONS: 'option/delete',

  ALL_EXTRA_OPTIONS: 'extra-option',
  ADD_EXTRA_OPTIONS: 'extra-option/create',
  FIND_EXTRA_OPTIONS: 'extra-option/find',
  EDIT_EXTRA_OPTIONS: 'extra-option/update',
  DELETE_EXTRA_OPTIONS: 'extra-option/delete',

  ALL_MENU: 'menu',
  ADD_MENU: 'menu/create',
  EDIT_MENU: 'menu/update',
  FIND_MENU: 'menu/find',
  DELETE_MENU: 'menu/delete',

  ALL_UNITS: 'unit',
  ADD_UNITS: 'unit/create',
  FIND_UNITS: 'unit/find',
  EDIT_UNITS: 'unit/update',
  DELETE_UNITS: 'unit/delete',

  ALL_ADMIN: 'admin',
  ADD_ADMIN: 'admin/create',
  FIND_ADMIN: 'admin/find',
  EDIT_ADMIN: 'admin/update',
  DELETE_ADMIN: 'admin/delete',

  ALL_SLIDER: 'slider',
  ADD_SLIDER: 'slider/create',
  FIND_SLIDER: 'slider/find',
  EDIT_SLIDER: 'slider/update',
  DELETE_SLIDER: 'slider/delete',

  ALL_ORDERS: 'order',

  ALL_DELIVERY: 'delivery',
  ADD_DELIVERY: 'delivery/create',
  FIND_DELIVERY: 'delivery/find',
  EDIT_DELIVERY: 'delivery/update',
  DELETE_DELIVERY: 'delivery/delete',


  API: () => {
    let token = null;
    try {
      let auth_data = window.ls.getFromStorage('auth_data');
      auth_data = JSON.parse(auth_data);
      token = auth_data.token;
    } catch (e) {
      token = null
    }

    return axios.create({
      baseURL: BASE_URL,
      withCredentials: false,
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  },
}
