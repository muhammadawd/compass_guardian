export default [
  {
    header: 'app',
    i18n: "",
  },
  {
    url: null,
    name: "control_panel",
    icon: "HomeIcon",
    i18n: "",
    submenu: [
      {
        url: '/home_teacher',
        name: "home",
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
    icon: "StarIcon",
    i18n: "",
    submenu: [
      {
        url: '/questions_bank',
        name: "questions_bank",
        slug: "",
        i18n: "",
      },
      {
        url: '/teacher_exams',
        name: "teacher_exams",
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: '/teacher_all_exams',
    name: "teacher_all_exams",
    icon: "SunsetIcon",
    i18n: "",
  },
]
