(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c8bbc39"],{"24f7":function(e,t,s){"use strict";var a=s("3b83"),r=s.n(a);r.a},"3b83":function(e,t,s){},cb7e:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"data-list-container",attrs:{id:"data-list-thumb-view"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full"},[s("vx-card",{staticClass:"text-center cursor-pointer"},[s("vs-table",{ref:"table",attrs:{multiple:"",pagination:"","max-items":e.itemsPerPage,search:"",data:e.magazines},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data;return e._l(a,(function(t,a){return s("vs-tr",{key:a,attrs:{data:t}},[s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.title_ar)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[e._v("\n                "+e._s(t.title_en)+"\n              ")]),s("vs-td",{staticClass:"text-right"},[s("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[s("vs-button",{attrs:{type:"line",color:"danger"},on:{click:function(s){return e.deleteSingle(t.id)}}},[s("i",{staticClass:"fa fa-times"})]),s("vs-button",{attrs:{type:"line",color:"primary"},on:{click:function(s){return e.$router.push({name:"magazine_edit",params:{id:t.id}})}}},[s("i",{staticClass:"fa fa-edit"})])],1)])],1)}))}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},[s("div",{staticClass:"flex flex-wrap-reverse items-center flex-grow justify-between",attrs:{slot:"header"},slot:"header"},[s("div",{staticClass:"flex flex-wrap-reverse items-center"},[s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.$router.push({name:"magazine_add"})}}},[e._v("\n                "+e._s(e.$ml.get("add_new"))+"\n              ")])],1),s("vs-dropdown",{staticClass:"cursor-pointer mb-4 ml-4",attrs:{"vs-trigger-click":""}},[s("div",{staticClass:"p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium",attrs:{dir:"ltr"}},[s("span",{staticClass:"mr-2"},[e._v(e._s(e.currentPage*e.itemsPerPage-(e.itemsPerPage-1))+" - "+e._s(e.magazines.length-e.currentPage*e.itemsPerPage>0?e.currentPage*e.itemsPerPage:e.magazines.length)+" of "+e._s(e.magazines.length))]),s("feather-icon",{attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),s("vs-dropdown-menu",[s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=5}}},[s("span",[e._v("5")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=10}}},[s("span",[e._v("10")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=15}}},[s("span",[e._v("15")])]),s("vs-dropdown-item",{on:{click:function(t){e.itemsPerPage=20}}},[s("span",[e._v("20")])])],1)],1)],1),s("template",{slot:"thead"},[s("vs-th",[e._v(e._s(e.$ml.get("title_ar")))]),s("vs-th",[e._v(e._s(e.$ml.get("title_en")))]),s("vs-th",{attrs:{width:"15%"}})],1)],2)],1),s("vs-button",{staticClass:"mt-4",attrs:{disabled:0==e.selected.length},on:{click:function(t){return e.deleteSelected()}}},[e._v("\n        "+e._s(e.$ml.get("delete_selected"))+"\n      ")])],1)])])},r=[],n={data:function(){return{magazines:[],selected:[],itemsPerPage:5,isMounted:!1}},mounted:function(){this.isMounted=!0,this.getAllMagazine()},computed:{currentPage:function(){return this.isMounted?this.$refs.table.currentx:0}},methods:{getAllMagazine:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_MAGAZINE).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status?e.magazines=t.data.magazines.data:e.magazines=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.magazines=[]}))}catch(t){console.log(t)}},deleteSelected:function(){this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:this.acceptAlert})},acceptAlert:function(){var e=this,t=e.selected;e.$root.$children[0].$refs.loader.show_loader=!0,t=_.map(t,"id"),console.log(t);try{window.serviceAPI.API().post(window.serviceAPI.DELETE_MAGAZINE,{ids:t}).then((function(s){e.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(e.magazines=window.helper.deleteMulti(t,e.magazines),location.reload())})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}},deleteSingle:function(e){var t=this;this.$vs.dialog({type:"confirm",color:"danger",title:this.$ml.get("confirm"),text:this.$ml.get("are_sure"),acceptText:this.$ml.get("yes"),cancelText:this.$ml.get("no"),accept:function(){t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().post(window.serviceAPI.DELETE_MAGAZINE,{ids:[e]}).then((function(s){t.$root.$children[0].$refs.loader.show_loader=!1,s=s.data,s.status&&(t.magazines=window.helper.deleteMulti([e],t.magazines),location.reload())})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}}})}}},i=n,o=(s("24f7"),s("2877")),l=Object(o["a"])(i,a,r,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-1c8bbc39.0e6286e5.js.map