import Vue from 'vue'
import {MLInstaller, MLCreate, MLanguage} from 'vue-multilanguage'

Vue.use(MLInstaller);

export default new MLCreate({
  initial: 'ar',
  // development  , production
  save: process.env.NODE_ENV === 'development',
  languages: [
    new MLanguage('en').create({
      ar: 'Arabic language',
      en: 'English language',
      app: 'App',
      control_panel: 'Control Panel',
      home: 'Home',
      notifications: 'Notifications',
      statistics: 'Statistics',
      app_core: 'App Core',
      meals: 'Meals',
      categories: 'Categories',
      units: 'Units',
      options: 'Options',
      menu: 'Menu',
      all_items: 'All Items',
      orders: 'Orders',
      subscription: 'Subscription',
      delivery: 'Delivery',
      offers: 'Offers',
      printing: 'Printing',
      reports: 'Reports',
      invoices: 'Invoices',
      uncompleted_order_report: 'Uncompleted Order Report',
      cancelled_order_report: 'Cancelled Order Report',
      subscriptions_report: 'Subscriptions Report',
      user_rates_report: 'Users Rate Reports',
      uses_monthly_report: 'Uses Monthly Stock Report',
      orders_monthly_report: 'Orders Monthly Report',
      search: 'Search',
      about_categories: 'About Categories',
      search_word: 'Search Work In Description',

    }),

    new MLanguage('ar').create({
      ar: 'اللغة العربية',
      en: 'اللغة الانجليزية',
      app: 'التطبيق',
      control_panel: 'لوحة التحكم',
      home: 'الرئيسية',
      notifications: 'الاشعارات',
      statistics: 'الاحصائيات',
      app_core: 'اساسيات التطبيق',
      meals: 'الوجبات',
      categories: 'التصنيفات',
      units: 'وحدات القياس',
      options: 'الخصائص',
      menu: 'المنيو',
      all_items: 'جميع الاصناف',
      orders: 'الطلبات',
      subscription: 'الاشتراكات',
      delivery: 'عمال التوصيل',
      add_delivery: 'اضافة عمال التوصيل',
      edit_delivery: 'تعديل عمال التوصيل',
      slider: 'معرض الصور',
      add_slider: 'معرض الصور',
      edit_slider: 'معرض الصور',
      offers: 'العروض',
      printing: 'المطبوعات',
      reports: 'التقارير',
      invoices: 'الفواتير',
      uncompleted_order_report: 'الطلبات الغير مكتملة',
      cancelled_order_report: 'الطلبات الملغاة',
      subscriptions_report: 'الاشنراكات وكمية الطعام المطلوبة',
      user_rates_report: 'تقييمات المستخدمين',
      uses_monthly_report: 'المستهلكات الشهرية',
      orders_monthly_report: 'الطلبات الشهرية',
      search: 'البحث',
      about_categories: 'قم بالبحث عن التصنيف المطلوب',
      search_word: 'ابحث عن كلمة او عبارة داخل الوصف',
      add_new: 'اضافة جديد',
      show_all: 'عرض الجميع',
      add_category: 'اضافة تصنيف',
      edit_category: 'تعديل تصنيف',
      title_ar: 'الاسم بالعربية',
      title_en: 'الاسم بالانجليزية',
      description_ar: 'الوصف بالعربية',
      description_en: 'الوصف بالانجليزية',
      image: 'الصورة',
      add_unit: 'اضافة وحدة',
      edit_unit: 'تعديل وحدة',
      cancel: 'الغاء',
      add: 'اضافة',
      edit: 'تعديل',
      add_option: 'اضافة خاصية',
      edit_option: 'تعديل خاصية',
      value: 'القيمة',
      unit: 'الوحدة',
      loading: 'جاري التحميل',
      success: 'نجاح',
      error: 'خطأ',
      success_msg: 'تمت العملية بنجاح',
      error_msg: 'حدث خطأ',
      are_sure: 'هل انت متأكد',
      confirm: 'تأكيد',
      yes: 'نعم',
      no: 'ﻻ',
      show_image: 'عرض الصورة',
      delete_selected: 'حذف المحدد',
      value_ar: 'القيمة بالعربية',
      value_en: 'القيمة بالانجليزية',
      category: 'التصنيف',
      add_menu_item: 'اضافة منتج للقائمة',
      price: 'السعر',
      discount: 'قيمة الخصم',
      expiration_date: 'تاريخ الصلاحية',
      images: 'الصور',
      choose_category: 'اختر التصنيف',
      choose: 'اختر  ',
      setting: ' اعدادات عامة',
      settings: 'الضبط و اﻻعدادات',
      extra_options: 'الاضافات الاخري',
      edit_extra_option: ' تعديل الاضافات الاخري ',
      admins: 'المستخدمين',
      add_admins: 'اضافة مستخدمين',
      edit_admins: 'تعديل مستخدمين',
      name: 'اﻻسم',
      login: 'دخول',
      sign_in: 'تسجيل الدخول',
      username: 'اسم المستخدم',
      email: 'البريد الالكتروني',
      phone: 'رقم الهاتف',
      password: 'كلمة المرور',
      show: 'عرض',

      management: 'ادراة العمليات',
      subjects: 'المواد الدراسية',
      stages: 'المراحل الدراسية',
      add_stages: 'اضافة المراحل الدراسية',
      edit_stages: 'تعديل المراحل الدراسية',
      add_subject: 'اضافة مادة دراسية',
      edit_subject: 'تعديل مادة دراسية',
      size: 'عدد الطلاب بالفصل',
      class_title_ar: 'اسم الفصل بالعربية',
      class_title_en: 'اسم الفصل بالانجليزية',
      add_teacher: "اضافة مدرس",
      edit_teacher: "تعديل مدرس",
      teachers: "المدرسين",
      years_experience: "سنوات الخبرة",
      qualification: "المؤهل",
      gender: "الجنس",
      male: "ذكر",
      female: "انثي",
      age: "العمر",
      ssn: "الرقم المدنى",
    })
  ]
})
