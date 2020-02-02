import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  routes: [

    // =============================================================================
    // STUDENT MAIN LAYOUT ROUTES
    // =============================================================================
    {
      path: '/home_student',
      component: () => import('./layouts/main/MainStudent.vue'),
      children: [
        // =============================================================================
        //  Home Routes
        // =============================================================================
        {
          path: '/home_student',
          name: 'home_student',
          meta: {
            requiresAuth: true,
            actorType: 'student',
          },
          component: () => import('./views/HomeStudent.vue')
        },
      ],
    },

    // =============================================================================
    // TEACHER MAIN LAYOUT ROUTES
    // =============================================================================
    {
      path: '/home_teacher',
      component: () => import('./layouts/main/MainTeacher.vue'),
      children: [
        // =============================================================================
        //  Home Routes
        // =============================================================================
        {
          path: '/home_teacher',
          name: 'home_teacher',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/HomeTeacher.vue')
        },
        // =============================================================================
        //  QuestionsBank Routes
        // =============================================================================
        {
          path: '/questions_bank',
          name: 'questions_bank',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/QuestionsBank/All/Index.vue')
        },
        {
          path: '/questions_bank/add',
          name: 'add_questions_bank',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/QuestionsBank/Add/Index.vue')
        },
        {
          path: '/questions_bank/edit/:id',
          name: 'edit_questions_bank',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/QuestionsBank/Edit/Index.vue')
        },
        // =============================================================================
        //  TeacherExams Routes
        // =============================================================================
        {
          path: '/teacher_exams',
          name: 'teacher_exams',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/TeacherExams/All/Index.vue')
        },
        {
          path: '/teacher_exams/add',
          name: 'add_teacher_exams',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/TeacherExams/Add/Index.vue')
        },
        {
          path: '/teacher_exams/edit/:id',
          name: 'edit_teacher_exams',
          meta: {
            requiresAuth: true,
            actorType: 'teacher',
          },
          component: () => import('./views/TeacherExams/Edit/Index.vue')
        },
      ],
    },

    // =============================================================================
    // ADMIN MAIN LAYOUT ROUTES
    // =============================================================================
    {
      path: '/',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Home.vue')
        },
        // =============================================================================
        // Management Subject Routes
        // =============================================================================
        {
          path: '/management/subjects',
          name: 'management_subjects',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Subjects/All/Index.vue')
        },
        {
          path: '/management/subjects/edit/:id',
          name: 'management_subjects_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Subjects/Edit/Index.vue')
        },
        // =============================================================================
        //  Routes
        // =============================================================================
        {
          path: '/scientific_attachment',
          name: 'scientific_attachment',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/ScientificAttachment/All/Index.vue')
        },
        {
          path: '/scientific_attachment/add',
          name: 'scientific_attachment_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/ScientificAttachment/Add/Index.vue')
        },
        {
          path: '/scientific_attachment/edit/:id',
          name: 'scientific_attachment_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/ScientificAttachment/Edit/Index.vue')
        },
        // =============================================================================
        // Management Stages Routes
        // =============================================================================
        {
          path: '/management/stages',
          name: 'management_stages',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Stage/All/Index.vue')
        },
        {
          path: '/management/stages/add',
          name: 'management_stages_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Stage/Add/Index.vue')
        },
        {
          path: '/management/stages/edit/:id',
          name: 'management_stages_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Stage/Edit/Index.vue')
        },
        // =============================================================================
        // Management _SCHEDULE Routes
        // =============================================================================
        {
          path: '/management/schedule',
          name: 'management_schedule',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Schedule/All/Index.vue')
        },
        {
          path: '/management/schedule/add',
          name: 'management_schedule_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Schedule/Add/Index.vue')
        },
        {
          path: '/management/schedule/edit/:id',
          name: 'management_schedule_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Management/Schedule/Edit/Index.vue')
        },
        // =============================================================================
        // Management Terms Routes
        // =============================================================================
        {
          path: '/management/terms',
          name: 'terms',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Terms/All/Index.vue')
        },
        {
          path: '/management/terms/add',
          name: 'terms_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Terms/Add/Index.vue')
        },
        {
          path: '/management/terms/edit/:id',
          name: 'terms_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Terms/Edit/Index.vue')
        },
        // =============================================================================
        // Management TeacherLeave Routes
        // =============================================================================
        {
          path: '/teacher_leave',
          name: 'teacher_leave',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/TeacherLeave/All/Index.vue')
        },
        {
          path: '/teacher_leave/add',
          name: 'teacher_leave_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/TeacherLeave/Add/Index.vue')
        },
        {
          path: '/teacher_leave/edit/:id',
          name: 'teacher_leave_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/TeacherLeave/Edit/Index.vue')
        },
        // =============================================================================
        // Management StudnetLeave Routes
        // =============================================================================
        {
          path: '/student_leave',
          name: 'student_leave',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/StudentsLeave/All/Index.vue')
        },
        {
          path: '/student_leave/add',
          name: 'student_leave_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/StudentsLeave/Add/Index.vue')
        },
        {
          path: '/student_leave/edit/:id',
          name: 'student_leave_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/StudentsLeave/Edit/Index.vue')
        },
        // =============================================================================
        // Management notifications Routes
        // =============================================================================
        {
          path: '/teacher_notifications/add',
          name: 'teacher_notifications_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Notifications/Teachers/Add.vue')
        },
        {
          path: '/teacher_notifications',
          name: 'teacher_notifications',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Notifications/Teachers/All.vue')
        },
        {
          path: '/students_notifications/add',
          name: 'students_notifications_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Notifications/Students/Add.vue')
        },
        {
          path: '/students_notifications',
          name: 'students_notifications',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Notifications/Students/All.vue')
        },
        // =============================================================================
        // Management Teachers Routes
        // =============================================================================
        {
          path: '/teachers',
          name: 'teachers',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Teacher/All/Index.vue')
        },
        {
          path: '/attendance_teacher',
          name: 'attendance_teacher',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Attendance/Teacher/AttendanceReport.vue')
        },
        {
          path: '/attendance_teacher/add',
          name: 'attendance_teacher_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Attendance/Teacher/Add.vue')
        },
        {
          path: '/teachers/add',
          name: 'teachers_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Teacher/Add/Index.vue')
        },
        {
          path: '/teachers/edit/:id',
          name: 'teachers_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Teacher/Edit/Index.vue')
        },
        // =============================================================================
        // Management Parents Routes
        // =============================================================================
        {
          path: '/parents',
          name: 'parents',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Parents/All/Index.vue')
        },
        {
          path: '/parents/add',
          name: 'parents_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Parents/Add/Index.vue')
        },
        {
          path: '/parents/edit/:id',
          name: 'parents_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Parents/Edit/Index.vue')
        },
        {
          path: '/parents/complaints/add',
          name: 'parents_complaints_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Complaints/AllParents/Add.vue')
        },
        {
          path: '/parents/complaints',
          name: 'parents_complaints',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Complaints/AllParents/Index.vue')
        },
        {
          path: '/parents/edit_parent_complaint/:id',
          name: 'edit_parent_complaint',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Complaints/AllParents/Edit.vue')
        },
        // =============================================================================
        // Management Magazine Routes
        // =============================================================================
        {
          path: '/magazine',
          name: 'magazine',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Magazine/All/Index.vue')
        },
        {
          path: '/magazine/add',
          name: 'magazine_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Magazine/Add/Index.vue')
        },
        {
          path: '/magazine/edit/:id',
          name: 'magazine_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Magazine/Edit/Index.vue')
        },
        // =============================================================================
        // Management Students Routes
        // =============================================================================
        {
          path: '/place_student',
          name: 'place_student',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Students/PlaceStudent/Index.vue')
        },
        {
          path: '/attendance_student',
          name: 'attendance_student',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Attendance/Student/AttendanceReport.vue')
        },
        {
          path: '/students',
          name: 'students',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Students/All/Index.vue')
        },
        {
          path: '/students/add',
          name: 'students_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Students/Add/Index.vue')
        },
        {
          path: '/students/edit/:id',
          name: 'students_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Students/Edit/Index.vue')
        },
        // =============================================================================
        // Settings Admin Routes
        // =============================================================================
        {
          path: '/settings/admins',
          name: 'settings_admins',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Settings/Admins/All/Index.vue')
        },
        {
          path: '/settings/admins/add',
          name: 'settings_admins_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Settings/Admins/Add/Index.vue')
        },
        {
          path: '/settings/admins/edit/:id',
          name: 'settings_admins_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Settings/Admins/Edit/Index.vue')
        },
        // =============================================================================
        // Settings Roles Routes
        // =============================================================================
        {
          path: '/settings/roles',
          name: 'settings_roles',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Settings/Roles/All/Index.vue')
        },
        {
          path: '/settings/roles/add',
          name: 'settings_roles_add',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Settings/Roles/Add/Index.vue')
        },
        {
          path: '/settings/roles/edit/:id',
          name: 'settings_roles_edit',
          meta: {
            requiresAuth: true,
            actorType: 'admin'
          },
          component: () => import('./views/Settings/Roles/Edit/Index.vue')
        },
      ],
    },

    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: '/login',
          name: 'login',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: '/login_admin',
          name: 'login_admin',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/LoginAdmin.vue')
        },
        {
          path: '/login_teacher',
          name: 'login_teacher',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/LoginTeacher.vue')
        },
        {
          path: '/login_student',
          name: 'login_student',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/LoginStudent.vue')
        },
        {
          path: '/pages/error-404',
          name: 'pageError404',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/Error404.vue')
        },
        {
          path: '/pages/error-403',
          name: 'pageError403',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/Error403.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
    // this route requires auth, check if logged in
    if (auth_data) {
      if (to.meta.actorType == auth_data.type) {
        next()
      } else {
        next({
          name: 'pageError403'
        })
      }
      next()
    } else {
      next({
        name: 'login', // query: {redirect: to.fullPath}
      })
    }
  } else {
    next() // make sure to always call next()!
  }
});

export default router
