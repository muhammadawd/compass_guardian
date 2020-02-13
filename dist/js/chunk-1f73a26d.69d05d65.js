(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f73a26d"],{"732c":function(t,e,s){"use strict";var n=s("cadc"),i=s.n(n);i.a},"8ccf":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"text-center cursor-pointer"},[s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.notifications},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.data;return t._l(n,(function(e,n){return s("vs-tr",{key:n,attrs:{data:e}},[s("vs-td",{staticClass:"text-right"},[t._v("\n                "+t._s(t.getStudents(e.student_terms))+"\n\n              ")]),s("vs-td",{staticClass:"text-right"},[t._v("\n                "+t._s(e.notes)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[t.hasAccessPermission("delete-student-alert")?s("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(s){return t.deleteSingle(e.id)}}},[s("i",{staticClass:"fa fa-times"})]):t._e()],1)])],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[t.hasAccessPermission("create-student-alert")?s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(e){return t.$router.push({name:"students_notifications_add"})}}},[t._v("\n                "+t._s(t.$ml.get("add_new"))+"\n              ")]):t._e()],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 ml-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium",attrs:{dir:"ltr"}},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.notifications.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.notifications.length)+" of "+t._s(t.notifications.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=5}}},[s("span",[t._v("5")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[s("span",[t._v("10")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[s("span",[t._v("15")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[s("span",[t._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",[t._v(t._s(t.$ml.get("students")))]),s("vs-th",[t._v(t._s(t.$ml.get("notes")))]),s("vs-th",{attrs:{width:"15%"}})],1)],2)],1),t.hasAccessPermission("delete-student-alert")?s("vs-button",{staticClass:"mt-4",attrs:{disabled:0==t.selected.length},on:{click:function(e){return t.deleteSelected()}}},[t._v("\n        "+t._s(t.$ml.get("delete_selected"))+"\n      ")]):t._e()],1)])])},i=[],o={data:function(){return{notifications:[],selected:[],itemsPerPage:5,isMounted:!1}},mounted:function(){this.isMounted=!0,this.getAllNotifications()},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{hasAccessPermission:function(t){return window.helper.hasAccessPermission(t)},getStudents:function(t){return t.length?_.map(t,"student.name"):"-"},getAllNotifications:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENT_NOTIFICATIONS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.notifications=e.data.studentAlerts.data:t.notifications=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.notifications=[]}))}catch(e){console.log(e)}},deleteSelected:function(){this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:this.acceptAlert})},acceptAlert:function(){var t=this,e=t.selected;t.$root.$children[0].$refs.loader.show_loader=!0,e=_.map(e,"id"),console.log(e);try{window.serviceAPI.API().post(window.serviceAPI.DELETE_STUDENT_NOTIFICATIONS,{ids:e}).then((function(s){t.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(t.notifications=window.helper.deleteMulti(e,t.notifications),location.reload())})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}},deleteSingle:function(t){var e=this;this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:function(){e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().post(window.serviceAPI.DELETE_STUDENT_NOTIFICATIONS,{ids:[t]}).then((function(s){e.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(e.notifications=window.helper.deleteMulti([t],e.notifications),location.reload())})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}}})}}},r=o,a=(s("732c"),s("2877")),c=Object(a["a"])(r,n,i,!1,null,null,null);e["default"]=c.exports},cadc:function(t,e,s){}}]);
//# sourceMappingURL=chunk-1f73a26d.69d05d65.js.map