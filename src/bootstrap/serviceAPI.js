import axios from 'axios'

let BASE_URL = `http://approc.com/~approctest/school/api/`;
// let BASE_URL = `http://192.168.1.2/school/api/`;

export default {
  BASE_URL: 'http://approc.com/~approctest/school/api/',
  // BASE_URL: 'http://192.168.1.2/school/api/',

  AUTH_LOGIN: 'admin/login',

  ALL_STATUS: 'common/status',

  ALL_SUBJECTS: 'subject',
  ADD_SUBJECTS: 'subject/create',
  FIND_SUBJECTS: 'subject/find',
  EDIT_SUBJECTS: 'subject/update',
  DELETE_SUBJECTS: 'subject/delete',

  ALL_TERMS: 'term',
  ADD_TERMS: 'term/create',
  FIND_TERMS: 'term/find',
  EDIT_TERMS: 'term/update',
  DELETE_TERMS: 'term/delete',

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

  ALL_PARENTS: 'parent',
  ADD_PARENTS: 'parent/create',
  FIND_PARENTS: 'parent/find',
  EDIT_PARENTS: 'parent/update',
  DELETE_PARENTS: 'parent/delete',

  ALL_STUDENTS: 'student',
  ADD_STUDENTS: 'student/create',
  FIND_STUDENTS: 'student/find',
  EDIT_STUDENTS: 'student/update',
  DELETE_STUDENTS: 'student/delete',

  ALL_ROLES: 'admin/role',
  ADD_ROLES: 'admin/role/create-update',
  FIND_ROLES: 'admin/role',
  EDIT_ROLES: 'admin/role/create-update',
  DELETE_ROLES: 'admin/role/delete',

  ALL_ADMIN: 'admin',
  ADD_ADMIN: 'admin/create',
  FIND_ADMIN: 'admin/find',
  EDIT_ADMIN: 'admin/update',
  DELETE_ADMIN: 'admin/delete',


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
