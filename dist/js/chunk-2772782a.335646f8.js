(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2772782a"],{"0713":function(t,e,s){"use strict";var a=s("3b65"),r=s.n(a);r.a},"0a08":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"text-center cursor-pointer"},[s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":t.itemsPerPage,search:"",data:t.exams},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",{staticClass:"text-right"},[t._v("\n                "+t._s(e.name)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[t._v("\n                "+t._s(e.duration)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[t._v("\n                "+t._s(e.start_date)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[t._v("\n                "+t._s(e.end_date)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e.status?t._t("default",[t._v("\n                  "+t._s(e.status.translated.title)+"\n                ")]):t._e()],2),s("vs-td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[s("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(s){return t.deleteSingle(e.id)}}},[s("i",{staticClass:"fa fa-times"})]),s("vs-button",{attrs:{type:"line",color:"primary"},on:{click:function(s){return t.$router.push({name:"edit_teacher_exams",params:{id:e.id}})}}},[s("i",{staticClass:"fa fa-edit"})])],1)])],1)}))}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(e){return t.$router.push({name:"add_teacher_exams"})}}},[t._v("\n                "+t._s(t.$ml.get("add_new"))+"\n              ")])],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 ml-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium",attrs:{dir:"ltr"}},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.currentPage*t.itemsPerPage-(t.itemsPerPage-1))+" - "+t._s(t.exams.length-t.currentPage*t.itemsPerPage>0?t.currentPage*t.itemsPerPage:t.exams.length)+" of "+t._s(t.exams.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=5}}},[s("span",[t._v("5")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=10}}},[s("span",[t._v("10")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=15}}},[s("span",[t._v("15")])]),s("vs-dropdown-item",{on:{click:function(e){t.itemsPerPage=20}}},[s("span",[t._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",[t._v(t._s(t.$ml.get("name")))]),s("vs-th",[t._v(t._s(t.$ml.get("exam_period")))]),s("vs-th",[t._v(t._s(t.$ml.get("start_date")))]),s("vs-th",[t._v(t._s(t.$ml.get("end_date")))]),s("vs-th",[t._v(t._s(t.$ml.get("status")))]),s("vs-th")],1)],2)],1),s("vs-button",{staticClass:"mt-4",attrs:{disabled:0==t.selected.length},on:{click:function(e){return t.deleteSelected()}}},[t._v("\n        "+t._s(t.$ml.get("delete_selected"))+"\n      ")])],1)])])},r=[],n={data:function(){return{exams:[],selected:[],itemsPerPage:5,isMounted:!1}},mounted:function(){this.isMounted=!0,this.getAllExams()},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{getAllExams:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_EXAM).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.exams=e.data.exams.data:t.exams=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.exams=[]}))}catch(e){console.log(e)}},deleteSelected:function(){this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:this.acceptAlert})},acceptAlert:function(){var t=this,e=t.selected;t.$root.$children[0].$refs.loader.show_loader=!0,e=_.map(e,"id"),console.log(e);try{window.serviceAPI.API().post(window.serviceAPI.DELETE_EXAM,{ids:e}).then((function(s){t.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(t.exams=window.helper.deleteMulti(e,t.exams),location.reload())})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}},deleteSingle:function(t){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0,this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:function(){try{window.serviceAPI.API().post(window.serviceAPI.DELETE_EXAM,{ids:[t]}).then((function(s){e.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(e.exams=window.helper.deleteMulti([t],e.exams),location.reload())})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}}})}}},o=n,i=(s("0713"),s("2877")),l=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=l.exports},"3b65":function(t,e,s){}}]);
//# sourceMappingURL=chunk-2772782a.335646f8.js.map