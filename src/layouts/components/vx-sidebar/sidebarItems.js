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
    // tag: "2",
    // tagColor: "primary",
    icon: "HomeIcon",
    i18n: "",
    submenu: [
      {
        url: '/',
        name: "home",
        slug: "",
        i18n: "",
      },
      // {
      //   url: '/10',
      //   name: "notifications",
      //   slug: "",
      //   i18n: "",
      // },
      // {
      //   url: '/11',
      //   name: "statistics",
      //   slug: "",
      //   i18n: "",
      // },
    ]
  },
  {
    header: "app_core",
    i18n: "",
  },
  {
    url: null,
    name: "meals",
    // tag: "2",
    // tagColor: "primary",
    icon: "CoffeeIcon",
    i18n: "",
    submenu: [
      {
        url: '/meals/categories',
        name: "categories",
        slug: "",
        i18n: "",
      },
      {
        url: '/meals/units',
        name: "units",
        slug: "",
        i18n: "",
      },
      {
        url: '/meals/extra_options',
        name: "extra_options",
        slug: "",
        i18n: "",
      },
      {
        url: '/meals/options',
        name: "options",
        slug: "",
        i18n: "",
      },
      // {
      //   url: '/meals/all_items',
      //   name: "all_items",
      //   slug: "",
      //   i18n: "",
      // },
    ]
  },
  {
    url: null,
    name: "menu",
    // tag: "2",
    // tagColor: "primary",
    icon: "GridIcon",
    i18n: "",
    submenu: [
      {
        url: '/menu/categories',
        name: "categories",
        slug: "",
        i18n: "",
      },
      {
        url: '/menu/units',
        name: "units",
        slug: "",
        i18n: "",
      },
      {
        url: '/menu/extra_options',
        name: "extra_options",
        slug: "",
        i18n: "",
      },
      {
        url: '/menu/options',
        name: "options",
        slug: "",
        i18n: "",
      },
      {
        url: '/menu/items',
        name: "all_items",
        slug: "",
        i18n: "",
      },
    ]
  },
  {
    url: "/orders",
    name: "orders",
    slug: "",
    icon: "ShoppingCartIcon",
  },
  // {
  //   url: "/50",
  //   name: "subscription",
  //   slug: "",
  //   icon: "SlackIcon",
  // },
  {
    url: "/delivery",
    name: "delivery",
    slug: "",
    icon: "PhoneCallIcon",
  },
  // {
  //   url: "/60",
  //   name: "offers",
  //   slug: "",
  //   icon: "GiftIcon",
  // },
  // {
  //   header: "printing",
  //   i18n: "",
  // },
  // {
  //   url: null,
  //   name: "reports",
  //   // tag: "2",
  //   // tagColor: "primary",
  //   icon: "CalendarIcon",
  //   i18n: "",
  //   submenu: [
  //     {
  //       url: '/70',
  //       name: "uncompleted_order_report",
  //       slug: "",
  //       i18n: "",
  //     },
  //     {
  //       url: '/71',
  //       name: "cancelled_order_report",
  //       slug: "",
  //       i18n: "",
  //     },
  //     {
  //       url: '/72',
  //       name: "subscriptions_report",
  //       slug: "",
  //       i18n: "",
  //     },
  //     {
  //       url: '/73',
  //       name: "user_rates_report",
  //       slug: "",
  //       i18n: "",
  //     },
  //     {
  //       url: '/74',
  //       name: "uses_monthly_report",
  //       slug: "",
  //       i18n: "",
  //     },
  //     {
  //       url: '/75',
  //       name: "orders_monthly_report",
  //       slug: "",
  //       i18n: "",
  //     },
  //   ]
  // },
  {
    header: "setting",
    i18n: "",
  },
  {
    url: null,
    name: "settings",
    // tag: "2",
    // tagColor: "primary",
    icon: "SettingsIcon",
    i18n: "",
    submenu: [
      {
        url: '/settings/admins',
        name: "admins",
        slug: "",
        i18n: "",
      },
      {
        url: '/settings/slider',
        name: "slider",
        slug: "",
        i18n: "",
      },
    ]
  },
  // {
  //   url: "/80",
  //   name: "invoices",
  //   slug: "",
  //   icon: "FileIcon",
  // },
]
