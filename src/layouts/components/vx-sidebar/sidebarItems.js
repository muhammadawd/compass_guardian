/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default [
  {
    header: 'app',
    i18n: "",
  },
  {
    url: null,
    name: "control_panel",
    permission: 'ALLOW_ALL',
    icon: "HomeIcon",
    i18n: "",
    submenu: [
      {
        url: '/',
        name: "home",
        permission: 'ALLOW_ALL',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    header: "app_core",
    i18n: "",
  },
  {
    url: null,
    name: "management",
    permission: 'operations',
    icon: "FeatherIcon",
    i18n: "",
    submenu: [
      {
        url: '/management/subjects',
        name: "subjects",
        permission: 'all-subject',
        slug: "",
        i18n: "",
      },
      {
        url: '/management/stages',
        name: "stages",
        permission: 'all-stage',
        slug: "",
        i18n: "",
      },
      {
        url: '/management/terms',
        name: "term",
        permission: 'all-term',
        slug: "",
        i18n: "",
      },
      {
        url: '/management/schedule',
        name: "schedule",
        permission: 'all-schedule',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: '/teachers',
    name: "teachers",
    permission: 'teachers',
    icon: "UserCheckIcon",
    i18n: "",
  },
  {
    url: '/supervisor',
    name: "supervisor",
    permission: 'supervisors',
    icon: "UserPlusIcon",
    i18n: "",
  },
  {
    url: null,
    name: "parents",
    permission: 'parents',
    icon: "CoffeeIcon",
    i18n: "",
    submenu: [
      {
        url: '/parents',
        name: "parents",
        permission: 'all-parent',
        slug: "",
        i18n: "",
      },
      {
        url: '/parents/complaints',
        name: "parents_complaints",
        permission: 'all-parent-complaint',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: null,
    name: "students",
    permission: 'students',
    icon: "UserIcon",
    i18n: "",
    submenu: [
      {
        url: '/students',
        name: "students",
        permission: 'all-student',
        i18n: "",
      },
      {
        url: '/students_update_stage',
        name: "students_update_stage",
        permission: 'ALLOW_ALL',
        i18n: "",
      },
      {
        url: '/place_student',
        name: "place_student",
        permission: 'create-student-term',
        i18n: "",
      },
    ]
  },
  {
    url: '/scientific_attachment',
    name: "scientific_attachment",
    permission: 'books',
    icon: "BookIcon",
    i18n: "",
  },
  {
    url: '/magazine',
    name: "magazine",
    permission: 'magazines',
    icon: "FileTextIcon",
    i18n: "",
  },
  {
    url: '/teacher_leave',
    name: "teacher_leave",
    permission: 'teacher-leave',
    icon: "FramerIcon",
    i18n: "",
  },
  {
    url: '/student_leave',
    name: "student_leave",
    permission: 'student-leave',
    icon: "LayoutIcon",
    i18n: "",
  },
  {
    url: null,
    name: "attendance",
    permission: 'absence',
    icon: "GridIcon",
    i18n: "",
    submenu: [
      {
        url: '/attendance_teacher',
        name: "attendance_teacher",
        permission: 'all-teacher-absence',
        slug: "",
        i18n: "",
      },
      {
        url: '/attendance_student',
        name: "attendance_student",
        permission: 'all-student-absence',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: null,
    name: "notifications",
    permission: 'alerts',
    icon: "GlobeIcon",
    i18n: "",
    submenu: [
      {
        url: '/teacher_notifications',
        name: "teacher_notifications",
        permission: 'all-teacher-alert',
        slug: "",
        i18n: "",
      },
      {
        url: '/students_notifications',
        name: "student_notifications",
        permission: 'all-student-alert',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: null,
    name: "reports",
    permission: 'reports',
    icon: "CommandIcon",
    i18n: "",
    submenu: [
      {
        url: '/reports/homework_report',
        name: "homework_report",
        permission: 'report-homework',
        slug: "",
        i18n: "",
      },
      {
        url: '/reports/student_class_report',
        name: "student_class_report",
        permission: 'report-classrooms',
        slug: "",
        i18n: "",
      },
      {
        url: '/reports/student_exam_report',
        name: "student_exam_report",
        permission: 'report-student-exam',
        slug: "",
        i18n: "",
      },
      {
        url: '/reports/teacher_complaints_report',
        name: "teacher_complaints_report",
        permission: 'report-teacher-complaint',
        slug: "",
        i18n: "",
      },
      {
        url: '/reports/teacher_leaves_report',
        name: "teacher_leaves_report",
        permission: 'report-teacher-leave',
        slug: "",
        i18n: "",
      },
      {
        url: '/reports/student_leaves_report',
        name: "student_leaves_report",
        permission: 'report-student-leave',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    header: "setting",
    i18n: "",
  },
  {
    url: null,
    name: "settings",
    icon: "SettingsIcon",
    permission: 'setting',
    i18n: "",
    submenu: [
      {
        url: '/settings/admins',
        name: "admins",
        permission: 'all-admin',
        slug: "",
        i18n: "",
      },
      {
        url: '/settings/roles',
        name: "roles",
        permission: 'all-role',
        slug: "",
        i18n: "",
      },
    ]
  },
]
