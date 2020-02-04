(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7bd0156"],{"4d2b":function(e,t,s){"use strict";var a=s("7055"),l=s.n(a);l.a},"4ed8":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"text-center cursor-pointer"},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/4 mb-base text-right"},[s("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("date")))]),s("flat-pickr",{staticClass:"w-full",attrs:{config:{mode:"range"},label:e.$ml.get("end_date")},model:{value:e.filterModel.date,callback:function(t){e.$set(e.filterModel,"date",t)},expression:"filterModel.date"}})],1),s("div",{staticClass:"vx-col w-full md:w-1/5 mb-base text-right"},[s("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("type")))]),s("vs-select",{staticClass:"w-full",model:{value:e.filterModel.type,callback:function(t){e.$set(e.filterModel,"type",t)},expression:"filterModel.type"}},[s("vs-select-item",{attrs:{value:"leave",text:e.$ml.get("leave")}}),s("vs-select-item",{attrs:{value:"vacancy",text:e.$ml.get("vacancy")}})],1)],1),s("div",{staticClass:"vx-col md:w-1/5 mb-base text-right"},[s("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("status")))]),s("vs-select",{staticClass:"w-full",model:{value:e.filterModel.status_id,callback:function(t){e.$set(e.filterModel,"status_id",t)},expression:"filterModel.status_id"}},e._l(e.status,(function(e,t){return s("vs-select-item",{key:t,attrs:{value:e.id,text:e.translated.title}})})),1)],1),s("div",{staticClass:"vx-col md:w-1/2 mb-base text-right"},[s("vs-button",{attrs:{color:"primary",type:"border","icon-pack":"feather",icon:"icon-search"},on:{click:e.getAllTeacherLeaves}})],1)]),s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":e.itemsPerPage,search:"",data:e.teacher_leaves},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,(function(t,a){return s("vs-tr",{key:a,attrs:{data:t}},[s("vs-td",{staticClass:"text-right"},[t.teacher?s("span",[e._v("\n                  "+e._s(t.teacher.name)+"\n                ")]):e._e()]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(e.$ml.get(t.type))+"\n              ")]),s("vs-td",{staticClass:"text-right"},[t.status?s("span",[s("div",{staticClass:"con-vs-chip ml-auto  con-color",class:e.getStatusClass(t.status.name),staticStyle:{color:"rgba(255, 255, 255, 0.9)"}},[s("span",{staticClass:"text-chip vs-chip--text"},[e._v(e._s(t.status.translated.title))])])]):e._e()]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.start_date)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.end_date)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[s("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(s){return e.deleteSingle(t.id)}}},[s("i",{staticClass:"fa fa-times"})]),s("vs-button",{attrs:{type:"line",color:"primary"},on:{click:function(s){return e.$router.push({name:"teacher_leave_edit",params:{id:t.id}})}}},[s("i",{staticClass:"fa fa-edit"})])],1)])],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.$router.push({name:"teacher_leave_add"})}}},[e._v("\n                "+e._s(e.$ml.get("add_new"))+"\n              ")])],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 ml-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium",attrs:{dir:"ltr"}},[s("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.itemsPerPage-(e.itemsPerPage-1))+" - "+e._s(e.teacher_leaves.length-e.currentPage*e.itemsPerPage>0?e.currentPage*e.itemsPerPage:e.teacher_leaves.length)+" of "+e._s(e.teacher_leaves.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=5}}},[s("span",[e._v("5")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=10}}},[s("span",[e._v("10")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=15}}},[s("span",[e._v("15")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=20}}},[s("span",[e._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",[e._v(e._s(e.$ml.get("name")))]),s("vs-th",[e._v(e._s(e.$ml.get("type")))]),s("vs-th",[e._v(e._s(e.$ml.get("status")))]),s("vs-th",[e._v(e._s(e.$ml.get("start_date")))]),s("vs-th",[e._v(e._s(e.$ml.get("end_date")))]),s("vs-th")],1)],2)],1),s("vs-button",{staticClass:"mt-4",attrs:{disabled:0==e.selected.length},on:{click:function(t){return e.deleteSelected()}}},[e._v("\n        "+e._s(e.$ml.get("delete_selected"))+"\n      ")])],1)])])},l=[],r=(s("7f7f"),s("28a5"),s("c38f")),i=s.n(r),n=(s("0952"),{components:{flatPickr:i.a},data:function(){return{status:[],teacher_leaves:[],selected:[],itemsPerPage:5,isMounted:!1,filterModel:{}}},mounted:function(){this.isMounted=!0,this.getAllStatus(),this.getAllTeacherLeaves()},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{getAllStatus:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STATUS).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status?e.status=t.data.status.teacher_leave:e.status=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.status=[]}))}catch(t){console.log(t)}},getStatusClass:function(e){return"accepted"==e?"vs-chip-success":"rejected"==e?"vs-chip-danger":"vs-chip-warning"},prepareFilter:function(e){var t=e.date,s=null,a=null;if(t){var l=t.split(" to ");s=l[0],a=l[1]}return{status_id:e.status_id,type:e.type,start_date:s,end_date:a||s}},getAllTeacherLeaves:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;var t=e.prepareFilter(e.filterModel);try{window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHER_LEAVES,{params:t}).then((function(t){if(e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,t.status)return e.teacher_leaves=t.data.teacherLeaves.data,void _.transform(t.data.teacherLeaves.data,(function(e,t,s){t.teacher_name=t.teacher?t.teacher.name:"",t.status_name=t.status.translated.title,e[s]=t}),{});e.teacher_leaves=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.teacher_leaves=[]}))}catch(s){console.log(s)}},deleteSelected:function(){this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:this.acceptAlert})},acceptAlert:function(){var e=this,t=e.selected;e.$root.$children[0].$refs.loader.show_loader=!0,t=_.map(t,"id"),console.log(t);try{window.serviceAPI.API().post(window.serviceAPI.DELETE_TEACHER_LEAVES,{ids:t}).then((function(s){e.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(e.teacher_leaves=window.helper.deleteMulti(t,e.teacher_leaves),location.reload())})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}},deleteSingle:function(e){var t=this;this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:function(){t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().post(window.serviceAPI.DELETE_TEACHER_LEAVES,{ids:[e]}).then((function(s){t.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(t.teacher_leaves=window.helper.deleteMulti([e],t.teacher_leaves),location.reload())})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}}})}}}),c=n,o=(s("4d2b"),s("2877")),d=Object(o["a"])(c,a,l,!1,null,null,null);t["default"]=d.exports},7055:function(e,t,s){}}]);
//# sourceMappingURL=chunk-f7bd0156.75da2072.js.map