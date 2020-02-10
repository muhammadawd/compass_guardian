import axios from 'axios'

let BASE_URL = `http://approc.com/~approctest/school/school/api/`;

export default {
  BASE_URL: 'http://approc.com/~approctest/school/school/api/',

  AUTH_LOGIN: 'admin/login',
  AUTH_ADMIN: 'admin/auth',
  AUTH_LOGIN_TEACHER: 'teacher/login',
  AUTH_LOGIN_STUDENT: 'student/login',

  GET_STUDENT_HOME_DATA: 'student/get-home-data',
  GET_STUDENT_EXAM_HOME_DATA: 'student-exam/get-statistics-exams',

  ALL_STATUS: 'common/status',
  ALL_DAYS: 'common/days',

  ALL_HOMEWORK_REPORT: 'reports/allHomeWorks',
  ALL_EXAM_REPORT: 'reports/allExamsReport',
  ALL_TEACHERS_COMPLAINTS_REPORT: 'reports/allExamsReport',

  ALL_STUDENT_EXAM: 'student-exam/get-available-exams',
  ALL_STUDENT_EXAM_NATEGA: 'student-exam',
  FIND_STUDENT_EXAM: 'exam/find-serial',
  CREATE_STUDENT_EXAM: 'student-exam/create',
  UPDATE_STUDENT_EXAM: 'student-exam/update',
  FIND_STUDENT_EXAM_ID: 'student-exam/find',
  FIND_STUDENT_EXAM_WITH_ANSWER_ID: 'student-exam/find-answer',

  ALL_EXAM: 'exam',
  ADD_EXAM: 'exam/create',
  FIND_EXAM: 'exam/find',
  EDIT_EXAM: 'exam/update',
  DELETE_EXAM: 'exam/delete',
  FIND_TEACHERS_EXAMS: 'exam/find-question-text',
  UPDATE_TEACHERS_EXAMS: 'exam/update-questions',

  ALL_SUPERVISOR: 'supervisor',
  ADD_SUPERVISOR: 'supervisor/create',
  FIND_SUPERVISOR: 'supervisor/find',
  EDIT_SUPERVISOR: 'supervisor/update',
  DELETE_SUPERVISOR: 'supervisor/delete',
  ATTACH_SUPERVISORS: 'supervisor/attach-student',

  ALL_QUESTION: 'question',
  ADD_QUESTION: 'question/create',
  FIND_QUESTION: 'question/find',
  EDIT_QUESTION: 'question/update',
  DELETE_QUESTION: 'question/delete',

  ALL_SCIENTIFIC_ATTACHMENT: 'scientific-attachment',
  ADD_SCIENTIFIC_ATTACHMENT: 'scientific-attachment/create',
  FIND_SCIENTIFIC_ATTACHMENT: 'scientific-attachment/find',
  EDIT_SCIENTIFIC_ATTACHMENT: 'scientific-attachment/update',
  DELETE_SCIENTIFIC_ATTACHMENT: 'scientific-attachment/delete',

  ALL_SUBJECTS: 'subject',
  ADD_SUBJECTS: 'subject/create',
  FIND_SUBJECTS: 'subject/find',
  EDIT_SUBJECTS: 'subject/update',
  DELETE_SUBJECTS: 'subject/delete',
  ADD_STUDENT_CLASS: 'student-term/create',
  ALL_STUDENT_GET_ABSENCE: 'student/get-student-absence',

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

  ALL_SCHEDULE: 'schedule',
  ADD_SCHEDULE: 'schedule/create',
  FIND_SCHEDULE: 'schedule/find',
  EDIT_SCHEDULE: 'schedule/update',
  DELETE_SCHEDULE: 'schedule/delete',

  ALL_TEACHERS: 'teacher',
  ADD_TEACHERS: 'teacher/create',
  FIND_TEACHERS: 'teacher/find',
  EDIT_TEACHERS: 'teacher/update',
  DELETE_TEACHERS: 'teacher/delete',
  ALL_TEACHERS_COMPLAINTS: 'teacher-complaint',
  ALL_TEACHERS_GET_ABSENCE: 'teacher/get-absence',
  ALL_TEACHERS_CREATE_ABSENCE: 'teacher/create-absence',

  ALL_TEACHER_LEAVES: 'teacher-leave',
  ADD_TEACHER_LEAVES: 'teacher-leave/create',
  FIND_TEACHER_LEAVES: 'teacher-leave/find',
  EDIT_TEACHER_LEAVES: 'teacher-leave/update',
  DELETE_TEACHER_LEAVES: 'teacher-leave/delete',

  ALL_PARENTS: 'parent',
  ADD_PARENTS: 'parent/create',
  FIND_PARENTS: 'parent/find',
  EDIT_PARENTS: 'parent/update',
  DELETE_PARENTS: 'parent/delete',
  ALL_PARENTS_COMPLAINTS: 'parent-complaint',
  FIND_PARENTS_COMPLAINTS: 'parent-complaint/find',
  ADD_PARENTS_COMPLAINTS: 'parent-complaint/create',
  EDIT_PARENTS_COMPLAINTS: 'parent-complaint/update',
  DELETE_PARENTS_COMPLAINTS: 'parent-complaint/delete',

  ALL_STUDENTS: 'student',
  ADD_STUDENTS: 'student/create',
  FIND_STUDENTS: 'student/find',
  EDIT_STUDENTS: 'student/update',
  DELETE_STUDENTS: 'student/delete',
  UPDATE_STAGE_STUDENTS: 'student/update-stage',

  ALL_STUDENT_LEAVES: 'student-leave',
  CREATE_STUDENT_LEAVES: 'student-leave/create',
  FIND_STUDENT_LEAVES: 'student-leave/find',
  EDIT_STUDENT_LEAVES: 'student-leave/update',
  DELETE_STUDENT_LEAVES: 'student-leave/delete',

  ALL_ROLES: 'admin/role',
  ADD_ROLES: 'admin/role/create-update',
  FIND_ROLES: 'admin/role',
  EDIT_ROLES: 'admin/role/create-update',
  DELETE_ROLES: 'admin/role/delete',
  ALL_PERMISSIONS: 'admin/role/permissions',

  ALL_ADMIN: 'admin',
  ADD_ADMIN: 'admin/create',
  FIND_ADMIN: 'admin/find',
  EDIT_ADMIN: 'admin/update',
  DELETE_ADMIN: 'admin/delete',

  ALL_MAGAZINE: 'magazine',
  ADD_MAGAZINE: 'magazine/create',
  FIND_MAGAZINE: 'magazine/find',
  EDIT_MAGAZINE: 'magazine/update',
  DELETE_MAGAZINE: 'magazine/delete',

  ALL_STUDENT_NOTIFICATIONS: 'student-alert',
  ADD_STUDENT_NOTIFICATIONS: 'student-alert/create',
  DELETE_STUDENT_NOTIFICATIONS: 'student-alert/delete',

  ALL_TEACHER_NOTIFICATIONS: 'teacher-alert',
  ADD_TEACHER_NOTIFICATIONS: 'teacher-alert/create',
  DELETE_TEACHER_NOTIFICATIONS: 'teacher-alert/delete',


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
