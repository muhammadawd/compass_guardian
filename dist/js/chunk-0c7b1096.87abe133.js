(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7b1096"],{"4c23":function(e,t,s){},"750a":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"text-center cursor-pointer"},[s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":e.itemsPerPage,search:"",data:e.supervisors},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.data;return e._l(r,(function(t,r){return s("vs-tr",{key:r,attrs:{data:t}},[s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.name)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.username)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.bus_number)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.ssn)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.phone)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[e.hasAccessPermission("delete-supervisor")?s("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(s){return e.deleteSingle(t.id)}}},[s("i",{staticClass:"fa fa-times"})]):e._e(),e.hasAccessPermission("attach-student-supervisor")?s("vs-button",{staticClass:"text-bold",attrs:{type:"line",color:"warning"},on:{click:function(s){return e.$router.push({name:"supervisor_students",params:{id:t.id}})}}},[e._v("\n                    "+e._s(e.$ml.get("attach_students"))+"\n                  ")]):e._e(),e.hasAccessPermission("show-supervisor")?s("vs-button",{attrs:{type:"line",color:"primary"},on:{click:function(s){return e.$router.push({name:"supervisor_edit",params:{id:t.id}})}}},[s("i",{staticClass:"fa fa-edit"})]):e._e()],1)])],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[e.hasAccessPermission("create-supervisor")?s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.$router.push({name:"supervisor_add"})}}},[e._v("\n                "+e._s(e.$ml.get("add_new"))+"\n              ")]):e._e()],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 ml-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium",attrs:{dir:"ltr"}},[s("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.itemsPerPage-(e.itemsPerPage-1))+" - "+e._s(e.supervisors.length-e.currentPage*e.itemsPerPage>0?e.currentPage*e.itemsPerPage:e.supervisors.length)+" of "+e._s(e.supervisors.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=5}}},[s("span",[e._v("5")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=10}}},[s("span",[e._v("10")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=15}}},[s("span",[e._v("15")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=20}}},[s("span",[e._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",[e._v(e._s(e.$ml.get("name")))]),s("vs-th",[e._v(e._s(e.$ml.get("username")))]),s("vs-th",[e._v(e._s(e.$ml.get("bus_number")))]),s("vs-th",[e._v(e._s(e.$ml.get("ssn")))]),s("vs-th",[e._v(e._s(e.$ml.get("phone")))]),s("vs-th",{attrs:{width:"250px"}})],1)],2)],1),e.hasAccessPermission("delete-supervisor")?s("vs-button",{staticClass:"mt-4",attrs:{disabled:0==e.selected.length},on:{click:function(t){return e.deleteSelected()}}},[e._v("\n        "+e._s(e.$ml.get("delete_selected"))+"\n      ")]):e._e()],1)])])},i=[],o={data:function(){return{supervisors:[],selected:[],itemsPerPage:5,isMounted:!1}},mounted:function(){this.isMounted=!0,this.getAllSuperviors()},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{hasAccessPermission:function(e){return window.helper.hasAccessPermission(e)},getAllSuperviors:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SUPERVISOR).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status?e.supervisors=t.data.supervisors.data:e.supervisors=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.supervisors=[]}))}catch(t){console.log(t)}},deleteSelected:function(){this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:this.acceptAlert})},acceptAlert:function(){var e=this,t=e.selected;e.$root.$children[0].$refs.loader.show_loader=!0,t=_.map(t,"id"),console.log(t);try{window.serviceAPI.API().post(window.serviceAPI.DELETE_SUPERVISOR,{ids:t}).then((function(s){e.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(e.supervisors=window.helper.deleteMulti(t,e.supervisors),location.reload())})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}},deleteSingle:function(e){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0,this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:function(){try{window.serviceAPI.API().post(window.serviceAPI.DELETE_SUPERVISOR,{ids:[e]}).then((function(s){t.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(t.supervisors=window.helper.deleteMulti([e],t.supervisors),location.reload())})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}}})}}},n=o,a=(s("c137"),s("2877")),c=Object(a["a"])(n,r,i,!1,null,null,null);t["default"]=c.exports},c137:function(e,t,s){"use strict";var r=s("4c23"),i=s.n(r);i.a}}]);
//# sourceMappingURL=chunk-0c7b1096.87abe133.js.map