/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return {x: 0, y: 0}
  },
  routes: [

    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: '/',
          name: 'home',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Home.vue')
        },
      ],
    },

    {
      // =============================================================================
      // Meals LAYOUT ROUTES
      // =============================================================================
      path: '',
      component: () => import('./layouts/main/Main.vue'),
      children: [
        // =============================================================================
        // Management Subject Routes
        // =============================================================================
        {
          path: '/management/subjects',
          name: 'management_subjects',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Management/Subjects/All/Index.vue')
        },
        {
          path: '/management/subjects/edit/:id',
          name: 'management_subjects_edit',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Management/Subjects/Edit/Index.vue')
        },
        // =============================================================================
        // Management Stages Routes
        // =============================================================================
        {
          path: '/management/stages',
          name: 'management_stages',
          component: () => import('./views/Management/Stage/All/Index.vue')
        },
        {
          path: '/management/stages/add',
          name: 'management_stages_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Management/Stage/Add/Index.vue')
        },
        {
          path: '/management/stages/edit/:id',
          name: 'management_stages_edit',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Management/Stage/Edit/Index.vue')
        },
        // =============================================================================
        // Management Teachers Routes
        // =============================================================================
        {
          path: '/management/terms',
          name: 'terms',
          component: () => import('./views/Terms/All/Index.vue')
        },
        {
          path: '/management/terms/add',
          name: 'terms_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Terms/Add/Index.vue')
        },
        {
          path: '/management/terms/edit/:id',
          name: 'terms_edit',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Terms/Edit/Index.vue')
        },
        // =============================================================================
        // Management Teachers Routes
        // =============================================================================
        {
          path: '/teachers',
          name: 'teachers',
          component: () => import('./views/Teacher/All/Index.vue')
        },
        {
          path: '/teachers/add',
          name: 'teachers_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Teacher/Add/Index.vue')
        },
        {
          path: '/teachers/edit/:id',
          name: 'teachers_edit',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Teacher/Edit/Index.vue')
        },
        // =============================================================================
        // Management Parents Routes
        // =============================================================================
        {
          path: '/parents',
          name: 'parents',
          component: () => import('./views/Parents/All/Index.vue')
        },
        {
          path: '/parents/add',
          name: 'parents_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Parents/Add/Index.vue')
        },
        {
          path: '/parents/edit/:id',
          name: 'parents_edit',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Parents/Edit/Index.vue')
        },
        // =============================================================================
        // Management Students Routes
        // =============================================================================
        {
          path: '/place_student',
          name: 'place_student',
          component: () => import('./views/Students/PlaceStudent/Index.vue')
        },
        {
          path: '/students',
          name: 'students',
          component: () => import('./views/Students/All/Index.vue')
        },
        {
          path: '/students/add',
          name: 'students_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Students/Add/Index.vue')
        },
        {
          path: '/students/edit/:id',
          name: 'students_edit',
          meta: {
            requiresAuth: true
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
            requiresAuth: true
          },
          component: () => import('./views/Settings/Admins/All/Index.vue')
        },
        {
          path: '/settings/admins/add',
          name: 'settings_admins_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Settings/Admins/Add/Index.vue')
        },
        {
          path: '/settings/admins/edit/:id',
          name: 'settings_admins_edit',
          meta: {
            requiresAuth: true
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
            requiresAuth: true
          },
          component: () => import('./views/Settings/Roles/All/Index.vue')
        },
        {
          path: '/settings/roles/add',
          name: 'settings_roles_add',
          meta: {
            requiresAuth: true
          },
          component: () => import('./views/Settings/Roles/Add/Index.vue')
        },
        {
          path: '/settings/roles/edit/:id',
          name: 'settings_roles_edit',
          meta: {
            requiresAuth: true
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
          path: '/pages/error-404',
          name: 'pageError404',
          meta: {
            requiresAuth: false
          },
          component: () => import('@/views/pages/Error404.vue')
        },
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ],
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = "none";
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let auth_data = window.ls.getFromStorage('auth_data');
    // this route requires auth, check if logged in
    if (!auth_data) {
      console.log('s')
      // next()
      next({
        name: 'login', // query: {redirect: to.fullPath}
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
});


export default router
