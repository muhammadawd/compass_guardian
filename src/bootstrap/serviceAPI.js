import axios from 'axios'

let BASE_URL = `http://approc.com/~approctest/school/api/`;
// let BASE_URL = `http://192.168.1.2/school/api/`;

export default {
  BASE_URL: 'http://approc.com/~approctest/school/api/',
  // BASE_URL: 'http://192.168.1.2/school/api/',

  AUTH_LOGIN: 'admin/login',

  ALL_SUBJECTS: 'subject',
  ADD_SUBJECTS: 'subject/create',
  FIND_SUBJECTS: 'subject/find',
  EDIT_SUBJECTS: 'subject/update',
  DELETE_SUBJECTS: 'subject/delete',

  ALL_STAGES: 'stage',
  ADD_STAGES: 'stage/create',
  FIND_STAGES: 'stage/find',
  EDIT_STAGES: 'stage/update',
  DELETE_STAGES: 'stage/delete',

  ALL_TEACHERS: 'teacher',
  ADD_TEACHERS: 'teacher/create',
  FIND_TEACHERS: 'teacher/find',
  EDIT_TEACHERS: 'teacher/update',
  DELETE_TEACHERS: 'teacher/delete',



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
