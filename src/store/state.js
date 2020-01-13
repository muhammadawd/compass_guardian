/*=========================================================================================
  File Name: state.js
  Description: Vuex Store - state
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import navbarSearchAndPinList from '@/layouts/components/navbarSearchAndPinList'
import themeConfig from '@/../themeConfig.js'
import colors from '@/../themeConfig.js'

const auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));

const state = {
  isSidebarActive: true,
  breakpoint: null,
  sidebarWidth: "default",
  reduceButton: themeConfig.sidebarCollapsed,
  bodyOverlay: false,
  sidebarItemsMin: false,
  theme: themeConfig.theme || 'semi-dark',
  navbarSearchAndPinList: navbarSearchAndPinList,
  AppActiveUser: {
    id: 0,
    name: auth_data ? auth_data.admin.name : '',
    about: '...',
    role: auth_data ? auth_data.admin.username : '',
    img: 'avatar-s-11.png',
    status: 'online',
  },

  themePrimaryColor: colors.warning,

  starredPages: navbarSearchAndPinList.data.filter((page) => page.highlightAction),
  userRole: null,

  // Can be used to get current window with
  // Note: Above breakpoint state is for internal use of sidebar component
  windowWidth: null,
}

export default state
