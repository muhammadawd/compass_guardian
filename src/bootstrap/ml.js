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
      are_sure: 'هل انت متأكد سيتم حذف جميع البيانات المرتبطة بها !',
      are_sure_: 'هل انت متأكد !',
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
      class_room: 'اسم الفصل',
      add_teacher: "اضافة مدرس",
      edit_teacher: "تعديل مدرس",
      teachers: "المدرسين",
      years_experience: "سنوات الخبرة",
      qualification: "المؤهل",
      logout: "خروج",
      gender: "الجنس",
      male: "ذكر",
      female: "انثي",
      age: "العمر",
      ssn: "الرقم المدنى",
      parents: 'اولياء الامور',
      add_parents: 'اضافة اولياء الامور',
      edit_parents: 'تعديل اولياء الامور',
      address: 'العنوان',
      father_name: 'اسم الاب',
      father_phone: 'رقم هاتف الاب',
      father_work: 'وظيفة الاب',
      mother_name: 'اسم الام',
      mother_phone: 'رقم هاتف الام',
      mother_work: 'وظيفة الام',
      students: 'الطلاب',
      add_students: 'اضافة طالب',
      edit_students: 'تعديل طالب',
      role: 'الصلاحية',
      add_role: 'اضافة الصلاحية',
      edit_role: 'تعديل الصلاحية',
      term: 'الفصول الدراسية',
      add_term: 'اضافة تيرم',
      edit_term: 'تعديل تيرم',
      roles: 'الصلاحيات',
      status: 'الحالة',
      start_date: 'تاريخ البداية',
      end_date: 'تاريخ النهاية',
      place_student: 'تسكين الطلاب',
      place_auto_student: 'تسكين تلقائي',
      place_selected_student: 'تسكين الطلاب المحددين',
      teacher_complaints: 'شكاوي المدرسين',
      magazine: 'مجلة الروضة',
      add_magazine: 'اضافة الى المجلة',
      edit_magazine: 'تعديل فى المجلة',
      text: 'النص',
      schedule: 'الجدول',
      add_schedule: 'اضافة الجدول',
      edit_schedule: 'تعديل الجدول',
      day: 'اليوم',
      subject_teacher: 'مدرس المادة',
      start_time: 'بداية الفترة',
      end_time: 'انتهاء الفترة',
      is_break: 'راحة',
      type: 'النوع',
      leave: 'استئذان',
      vacancy: 'اجازة',
      teacher_leave: 'الاستئذان والاجازات',
      old_dates: 'التواريخ السابقة',
      date: 'التاريخ',
      attendance: 'الحضور والانصراف',
      attendance_teacher: 'المدرسين',
      attendance_student: 'الطلاب',
      download: 'تحميل',
      attendance_report: 'الحضور والانصراف',
      absent_continue: 'عدد مرات الغياب المتتالى',
      late_number: 'عدد مرات التأخير',
      student_leave: 'استئذان الطلاب',
      notes: 'ملاحظات',
      url: 'الرابط',
      teacher_notifications: 'تنبيهات المدرسين',
      student_notifications: 'تنبيهات الطلاب',
      show_file: 'عرض الملف',
      end_at: 'تاريخ انتهاء الشكوي',
      add_parent_complaint: 'اضافة الشكوي',
      edit_parent_complaint: 'تعديل الشكوي',
      parents_complaints: 'شكاوي اولياء الامور',
      proposal: 'اقتراح',
      complaint: 'شكوي',
      vacation: 'اجازة',
      files: 'ملفات',
      add_classes: 'اضافة فصول',
      rate: 'تقييم',
      sign_in_admin: 'الدخول كمدير مسئول',
      sign_in_teacher: 'الدخول كمدرس',
      sign_in_student: 'الدخول كطالب',
      questions_bank: 'بنك الاسئلة',
      add_questions_bank: 'اضافة اسئلة',
      edit_questions_bank: 'تعديل اسئلة',
      question_header: 'رأس السؤال',
      question_type: 'نوع السؤال',
      mcq: 'سؤال اختياري',
      true_false: 'سؤال صح وخطأ',
      _text: 'سؤال نصي',
      answer: 'الاجابة',
      answers: 'الاجابات',
      true: 'نعم',
      false: 'ﻻ',
      question_degree: 'درجة السؤال',
      question: 'السؤال',
      exam_period: 'مدة الامتحان بالدقائق',
      exam_date: 'تاريخ الامتحان',
      teacher_exams: 'الامتحانات',
      add_teacher_exams: 'اضافة امتحان',
      edit_teacher_exams: 'تعديل الامتحانات',
      scientific_attachment: 'كتب علمية',
      add_scientific_attachment: 'اضافة كتب علمية',
      edit_scientific_attachment: 'تعديل كتب علمية',
      supervisor: 'مشرفين حافلات',
      add_supervisor: 'اضافة مشرف حافلة',
      edit_supervisor: 'تعديل مشرف حافلة',
      bus_number: 'رقم الحافلة',
      student_number: 'عدد الطلاب',
      service_location: 'موقع الخدمة',
      questions: 'اسئلة الامتحان الحالية',
      student_exam: 'امتحانات الطالب',
      all_student_exam: 'امتحانات الطالب',
      previous: 'السابق',
      finish_exam: 'انهاء الامتحان',
      next: 'التالى',
      question_number: 'عدد الاسئلة',
      mins: 'من الدقائق',
      start_exam: 'ابدأ الامتحان',
      remain_time: 'الوقت المتبقى',
      ellipsis_time: 'الوقت المستغرق',
      degree: 'الدرجة',
      sorry: 'عفوا !',
      no_exams: 'ﻻ توجد امتحانات حاليا',
      minutes: 'دقائق',
      seconds: 'ثواني',
      result_soon: 'النتيجة ستظهر قريبا بعد تصحيح بعض الاسئلة النصية',
      your_result: 'نتيجتك',
      your_result_p: 'لقد تم رصد نتيجتك فى اختبار',
      relation: 'صلة القرابة',
      teacher_all_exams: 'تصحيح الامتحانات',
      correct: 'تصحيح  ',
      stage: 'المرحلة الدراسية  ',
      attach_students: 'ربط الطلاب',
      all_student_exam_result: 'نتائج الامتحانات',
      should_ans: 'عليك الاجابة على السؤال اولا'
    })
  ]
})
