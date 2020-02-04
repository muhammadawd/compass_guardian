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
        url: '/home_student',
        name: "home",
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: '/all_student_exam',
    name: "all_student_exam",
    // tag: "2",
    // tagColor: "primary",
    icon: "BookIcon",
    i18n: "",
  },
  {
    url: '/all_student_exam_result',
    name: "all_student_exam_result",
    // tag: "2",
    // tagColor: "primary",
    icon: "BookIcon",
    i18n: "",
  },
]
