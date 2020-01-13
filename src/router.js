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
          meta:{
            requiresAuth:true
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
        // Meals Category Routes
        // =============================================================================
        {
          path: '/meals/categories',
          name: 'meals_categories',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Categories/All/Index.vue')
        },
        {
          path: '/menu/categories',
          name: 'menu_categories',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Categories/All/Index.vue')
        },
        {
          path: '/meals/categories/add',
          name: 'meals_categories_add',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Categories/Add/Index.vue')
        },
        {
          path: '/meals/categories/edit/:id',
          name: 'meals_categories_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Categories/Edit/Index.vue')
        },
        // =============================================================================
        // Meals Units Routes
        // =============================================================================
        {
          path: '/meals/units',
          name: 'meals_units',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Units/All/Index.vue')
        },
        {
          path: '/menu/units',
          name: 'menu_units',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Units/All/Index.vue')
        },
        {
          path: '/meals/units/edit/:id',
          name: 'meals_units_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Units/Edit/Index.vue')
        },
        // =============================================================================
        // Meals Extra Options Routes
        // =============================================================================
        {
          path: '/meals/extra_options',
          name: 'meals_extra_options',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/ExtraOptions/All/Index.vue')
        },
        {
          path: '/menu/extra_options',
          name: 'menu_extra_options',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/ExtraOptions/All/Index.vue')
        },
        {
          path: '/meals/extra_options/edit/:id',
          name: 'meals_extra_options_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/ExtraOptions/Edit/Index.vue')
        },
        // =============================================================================
        // Meals options Routes
        // =============================================================================
        {
          path: '/meals/options',
          name: 'meals_options',
          component: () => import('./views/Meals/Options/All/Index.vue')
        },
        {
          path: '/menu/options',
          name: 'menu_options',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Options/All/Index.vue')
        },
        {
          path: '/meals/options/add',
          name: 'meals_options_add',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Options/Add/Index.vue')
        },
        {
          path: '/meals/options/edit/:id',
          name: 'meals_options_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Options/Edit/Index.vue')
        },
        // =============================================================================
        // Menu items Routes
        // =============================================================================
        {
          path: '/menu/items',
          name: 'menu_items',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Menu/All/Index.vue')
        },
        {
          path: '/menu/items/add',
          name: 'menu_items_add',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Menu/Add/Index.vue')
        },
        {
          path: '/menu/items/edit/:id',
          name: 'menu_items_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Meals/Menu/Edit/Index.vue')
        },
        // =============================================================================
        // Settings Admin Routes
        // =============================================================================
        {
          path: '/orders',
          name: 'orders',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Orders/NormalOrders/Index.vue')
        },
        // =============================================================================
        // Settings Admin Routes
        // =============================================================================
        {
          path: '/delivery',
          name: 'delivery',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Delivery/All/Index.vue')
        },
        {
          path: '/delivery/add',
          name: 'delivery_add',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Delivery/Add/Index.vue')
        },
        {
          path: '/delivery/edit/:id',
          name: 'delivery_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Delivery/Edit/Index.vue')
        },
        // =============================================================================
        // Settings Slider Routes
        // =============================================================================
        {
          path: '/settings/slider',
          name: 'settings_slider',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Slider/All/Index.vue')
        },
        {
          path: '/settings/slider/add',
          name: 'settings_slider_add',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Slider/Add/Index.vue')
        },
        {
          path: '/settings/slider/edit/:id',
          name: 'settings_slider_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Slider/Edit/Index.vue')
        },
        // =============================================================================
        // Settings Admin Routes
        // =============================================================================
        {
          path: '/settings/admins',
          name: 'settings_admins',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Admins/All/Index.vue')
        },
        {
          path: '/settings/admins/add',
          name: 'settings_admins_add',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Admins/Add/Index.vue')
        },
        {
          path: '/settings/admins/edit/:id',
          name: 'settings_admins_edit',
          meta:{
            requiresAuth:true
          },
          component: () => import('./views/Settings/Admins/Edit/Index.vue')
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
          meta:{
            requiresAuth:false
          },
          component: () => import('@/views/pages/Login.vue')
        },
        {
          path: '/pages/error-404',
          name: 'pageError404',
          meta:{
            requiresAuth:false
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
