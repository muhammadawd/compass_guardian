export default [
  {
    header: 'app',
    i18n: "",
  },
  {
    url: null,
    name: "control_panel",
    permission:'ALLOW_ALL',
    icon: "HomeIcon",
    i18n: "",
    submenu: [
      {
        url: '/home_teacher',
        name: "home",
        permission:'ALLOW_ALL',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    header: 'app_core',
    i18n: "",
  },
  {
    url: null,
    name: "questions_bank",
    permission:'ALLOW_ALL',
    icon: "StarIcon",
    i18n: "",
    submenu: [
      {
        url: '/questions_bank',
        name: "questions_bank",
        permission:'ALLOW_ALL',
        slug: "",
        i18n: "",
      },
      {
        url: '/teacher_exams',
        name: "teacher_exams",
        permission:'ALLOW_ALL',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: '/teacher_all_exams',
    name: "teacher_all_exams",
    permission:'ALLOW_ALL',
    icon: "SunsetIcon",
    i18n: "",
  },
]
