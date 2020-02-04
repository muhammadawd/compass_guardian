(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217aaa"],{c865:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout--main",class:[t.navbarClasses,t.footerClasses,{"app-page":t.isAppPage}]},[r("vx-sidebar",{attrs:{sidebarItems:t.sidebarItems,logo:a("a4ef"),parent:".layout--main"}}),r("div",{class:[t.contentAreaClass,{"show-overlay":t.bodyOverlay}],attrs:{id:"content-area"}},[r("div",{attrs:{id:"content-overlay"}}),r("div",{staticClass:"content-wrapper"},[r("the-navbar",{class:[{"text-white":t.isNavbarDark&&!t.isThemeDark},{"text-base":!t.isNavbarDark&&t.isThemeDark}],attrs:{navbarColor:t.navbarColor}}),r("div",{staticClass:"router-view"},[r("div",{staticClass:"router-content",class:{"mt-0":"hidden"==t.navbarType}},[r("transition",{attrs:{name:t.routerTransition}},[t.$route.meta.breadcrumb||t.$route.meta.pageTitle?r("div",{staticClass:"router-header flex flex-wrap items-center mb-6"},[r("div",{staticClass:"content-area__heading",class:{"pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light":t.$route.meta.breadcrumb}},[r("h2",{staticClass:"mb-1"},[t._v(t._s(t.routeTitle))])]),t.$route.meta.breadcrumb?r("vx-breadcrumb",{staticClass:"ml-4 md:block hidden"}):t._e(),r("vs-dropdown",{staticClass:"ml-auto md:block hidden cursor-pointer",attrs:{"vs-trigger-click":""}},[r("vs-button",{attrs:{radius:"",icon:"icon-settings","icon-pack":"feather"}}),r("vs-dropdown-menu",{staticClass:"w-32"},[r("vs-dropdown-item",[r("div",{staticClass:"flex items-center",on:{click:function(e){return t.$router.push("/pages/profile")}}},[r("feather-icon",{staticClass:"inline-block mr-2",attrs:{icon:"UserIcon",svgClasses:"w-4 h-4"}}),r("span",[t._v("Profile")])],1)]),r("vs-dropdown-item",[r("div",{staticClass:"flex items-center",on:{click:function(e){return t.$router.push("/apps/todo")}}},[r("feather-icon",{staticClass:"inline-block mr-2",attrs:{icon:"CheckSquareIcon",svgClasses:"w-4 h-4"}}),r("span",[t._v("Tasks")])],1)]),r("vs-dropdown-item",[r("div",{staticClass:"flex items-center",on:{click:function(e){return t.$router.push("/apps/email")}}},[r("feather-icon",{staticClass:"inline-block mr-2",attrs:{icon:"MailIcon",svgClasses:"w-4 h-4"}}),r("span",[t._v("Inbox")])],1)])],1)],1)],1):t._e()]),r("div",{staticClass:"content-area__content"},[t.hideScrollToTop?t._e():r("back-to-top",{attrs:{bottom:"5%",visibleoffset:"500"}},[r("vs-button",{staticClass:"shadow-lg",attrs:{"icon-pack":"feather",icon:"icon-arrow-up"}})],1),r("transition",{attrs:{name:t.routerTransition,mode:"out-in"}},[r("router-view",{on:{changeRouteTitle:t.changeRouteTitle}})],1)],1)],1)])],1),r("the-footer")],1)],1)},i=[],s=(a("6762"),a("2fdb"),a("337e")),o=a("9834"),n=a("4e8e"),c=a("1dff"),d=[{header:"app",i18n:""},{url:null,name:"control_panel",icon:"HomeIcon",i18n:"",submenu:[{url:"/home_teacher",name:"home",slug:"",i18n:""}]},{header:"app_core",i18n:""},{url:null,name:"questions_bank",icon:"StarIcon",i18n:"",submenu:[{url:"/questions_bank",name:"questions_bank",slug:"",i18n:""},{url:"/teacher_exams",name:"teacher_exams",slug:"",i18n:""}]}],l=a("6afc"),u={data:function(){return{navbarType:c["a"].navbarType||"floating",navbarColor:c["a"].navbarColor||"#fff",footerType:c["a"].footerType||"static",routerTransition:c["a"].routerTransition||"none",isNavbarDark:!0,routeTitle:this.$route.meta.pageTitle,sidebarItems:d,disableCustomizer:c["a"].disableCustomizer,windowWidth:window.innerWidth,hideScrollToTop:c["a"].hideScrollToTop,disableThemeTour:c["a"].disableThemeTour}},mounted:function(){},watch:{$route:function(){this.routeTitle=this.$route.meta.pageTitle},isThemeDark:function(t){"#fff"==this.navbarColor&&t?this.updateNavbarColor("#10163a"):this.updateNavbarColor("#fff")}},computed:{isAppPage:function(){return!!this.$route.path.includes("/apps/")},isThemeDark:function(){return"dark"==this.$store.state.theme},sidebarWidth:function(){return this.$store.state.sidebarWidth},bodyOverlay:function(){return this.$store.state.bodyOverlay},contentAreaClass:function(){return"default"==this.sidebarWidth?"content-area-default":"reduced"==this.sidebarWidth?"content-area-reduced":this.sidebarWidth?"content-area-full":void 0},navbarClasses:function(){return{"navbar-hidden":"hidden"==this.navbarType,"navbar-sticky":"sticky"==this.navbarType,"navbar-static":"static"==this.navbarType,"navbar-floating":"floating"==this.navbarType}},footerClasses:function(){return{"footer-hidden":"hidden"==this.footerType,"footer-sticky":"sticky"==this.footerType,"footer-static":"static"==this.footerType}}},methods:{changeRouteTitle:function(t){this.routeTitle=t},updateNavbarColor:function(t){this.navbarColor=t,this.isNavbarDark="#fff"!=t},handleWindowResize:function(t){this.windowWidth=t.currentTarget.innerWidth,this.setSidebarWidth()},setSidebarWidth:function(){this.windowWidth<1200?(this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE",!1),this.$store.dispatch("updateSidebarWidth","no-sidebar"),this.disableThemeTour=!0):this.windowWidth<1200?this.$store.dispatch("updateSidebarWidth","reduced"):this.$store.commit("TOGGLE_IS_SIDEBAR_ACTIVE",!0)},toggleHideScrollToTop:function(t){this.hideScrollToTop=t}},components:{VxSidebar:s["a"],TheNavbar:o["a"],TheFooter:n["a"],BackToTop:l["a"]},created:function(){this.setSidebarWidth(),"#fff"==this.navbarColor&&this.isThemeDark?this.updateNavbarColor("#10163a"):this.updateNavbarColor(this.navbarColor)}},h=u,b=a("2877"),p=Object(b["a"])(h,r,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d217aaa.7ddbaa2c.js.map