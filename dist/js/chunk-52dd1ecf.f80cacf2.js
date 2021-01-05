(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-52dd1ecf"],{"65db":function(e,t,s){},b572:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"text-center cursor-pointer"},[s("div",{staticClass:"vx-col w-full text-right"},[s("vs-select",{attrs:{label:e.$ml.get("term")},on:{change:function(t){return e.getAllSchedules()}},model:{value:e.current_term,callback:function(t){e.current_term=t},expression:"current_term"}},e._l(e.terms,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.id,text:e.translated.title}})})),1)],1),s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":e.itemsPerPage,search:"",data:e.schedules},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return e._l(r,(function(t,r){return s("vs-tr",{key:r,attrs:{data:t}},[s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.name)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[t.class_room?e._t("default",[e._v("\n                  "+e._s(t.class_room.translated.title)+"\n                ")]):e._e()],2),s("vs-td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[e.hasAccessPermission("delete-schedule")?s("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(s){return e.deleteSingle(t.id)}}},[s("i",{staticClass:"fa fa-times"})]):e._e(),e.hasAccessPermission("show-schedule")?s("vs-button",{attrs:{type:"line",color:"primary"},on:{click:function(s){return e.$router.push({name:"management_schedule_edit",params:{id:t.id}})}}},[s("i",{staticClass:"fa fa-edit"})]):e._e()],1)])],1)}))}}],null,!0),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[e.hasAccessPermission("create-schedule")?s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.$router.push({name:"management_schedule_add"})}}},[e._v("\n                "+e._s(e.$ml.get("add_new"))+"\n              ")]):e._e()],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 ml-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium",attrs:{dir:"ltr"}},[s("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.itemsPerPage-(e.itemsPerPage-1))+" - "+e._s(e.schedules.length-e.currentPage*e.itemsPerPage>0?e.currentPage*e.itemsPerPage:e.schedules.length)+" of "+e._s(e.schedules.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=5}}},[s("span",[e._v("5")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=10}}},[s("span",[e._v("10")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=15}}},[s("span",[e._v("15")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=20}}},[s("span",[e._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",{attrs:{width:"40%"}},[e._v(e._s(e.$ml.get("name")))]),s("vs-th",{attrs:{width:"40%"}},[e._v(e._s(e.$ml.get("class_room")))]),s("vs-th")],1)],2)],1),e.hasAccessPermission("delete-schedule")?s("vs-button",{staticClass:"mt-4",attrs:{disabled:0==e.selected.length},on:{click:function(t){return e.deleteSelected()}}},[e._v("\n        "+e._s(e.$ml.get("delete_selected"))+"\n      ")]):e._e()],1)])])},o=[],l={data:function(){return{schedules:[],terms:[],current_term:"",selected:[],itemsPerPage:5,isMounted:!1}},mounted:function(){this.isMounted=!0,this.getAllSchedules(),this.getAllTerms()},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{hasAccessPermission:function(e){return window.helper.hasAccessPermission(e)},getAllTerms:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_TERMS).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status?e.terms=t.data.terms.data:e.terms=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.terms=[]}))}catch(t){console.log(t)}},getAllSchedules:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;var t=e.current_term;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SCHEDULE,{params:{term_id:t}}).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status?e.schedules=t.data.schedules.data:e.schedules=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.schedules=[]}))}catch(s){console.log(s)}},deleteSelected:function(){this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:this.acceptAlert})},acceptAlert:function(){var e=this,t=e.selected;e.$root.$children[0].$refs.loader.show_loader=!0,t=_.map(t,"id"),console.log(t);try{window.serviceAPI.API().post(window.serviceAPI.DELETE_SCHEDULE,{ids:t}).then((function(s){e.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(e.schedules=window.helper.deleteMulti(t,e.schedules),location.reload())})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}},deleteSingle:function(e){var t=this;this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:function(){t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().post(window.serviceAPI.DELETE_SCHEDULE,{ids:[e]}).then((function(s){t.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(t.schedules=window.helper.deleteMulti([e],t.schedules),location.reload())})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}}})}}},n=l,a=(s("ccf1"),s("2877")),c=Object(a["a"])(n,r,o,!1,null,null,null);t["default"]=c.exports},ccf1:function(e,t,s){"use strict";var r=s("65db"),o=s.n(r);o.a}}]);
//# sourceMappingURL=chunk-52dd1ecf.f80cacf2.js.map