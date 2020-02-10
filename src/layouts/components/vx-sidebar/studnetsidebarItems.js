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
        url: '/home_student',
        name: "home",
        permission:'ALLOW_ALL',
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: '/all_student_exam',
    name: "all_student_exam",
    permission:'ALLOW_ALL',
    icon: "BookIcon",
    i18n: "",
  },
  {
    url: '/all_student_exam_result',
    name: "all_student_exam_result",
    permission:'ALLOW_ALL',
    icon: "BookIcon",
    i18n: "",
  },
]
