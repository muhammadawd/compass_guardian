(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216799"],{c32e:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"knowledge-base-page"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[a("vx-card",{staticClass:"text-right"},[a("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[a("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("edit_parent_complaint")))])]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("teachers")))]),a("multiselect",{attrs:{options:t.teachers,multiple:!1,"close-on-select":!0,"clear-on-select":!0,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customLabel,"track-by":"id","preselect-first":!0},model:{value:t.dataModel.teacher,callback:function(e){t.$set(t.dataModel,"teacher",e)},expression:"dataModel.teacher"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"teacher_id_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("end_date")))]),a("flat-pickr",{staticClass:"w-full",attrs:{label:t.$ml.get("end_date")},model:{value:t.dataModel.end_at,callback:function(e){t.$set(t.dataModel,"end_at",e)},expression:"dataModel.end_at"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"end_at_error"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full text-center mb-base"},[a("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:t.loading,type:"filled",vslor:"primary"},on:{click:function(e){return t.editComplaint()}}},[t._v("\n              "+t._s(t.$ml.get("edit"))+"\n            ")])],1)])],1)],1)])])},s=[],n=(a("7f7f"),a("8e5f")),l=a.n(n),i=(a("e607"),a("c38f")),d=a.n(i),r=(a("0952"),{data:function(){return{findId:"",loading:!1,dataModel:{},teachers:[],selectedTeacher:null}},computed:{},components:{Multiselect:l.a,flatPickr:d.a},mounted:function(){this.findId=this.$route.params.id,this.findComplaint(),this.getAllTeachers()},methods:{customLabel:function(t){var e=t.name;return"".concat(e)},getAllTeachers:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHERS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.teachers=e.data.teachers.data:t.teachers=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.teachers=[]}))}catch(e){console.log(e)}},findComplaint:function(){var t=this,e=t.findId;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_PARENTS_COMPLAINTS+"/".concat(e)).then((function(e){if(t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status)return t.dataModel=e.data.complaint,void(t.selectedTeacher=t.dataModel.teacher)})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(a){console.log(a)}},editComplaint:function(){var t=this;t.openLoadingContained();var e=t.dataModel;e.teacher_id=t.dataModel.teacher?t.dataModel.teacher.id:"",$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.EDIT_PARENTS_COMPLAINTS,e).then((function(e){if(e=e.data,e.status)return window.helper.showMessage("success",t),t.$router.push({name:"parents_complaints"}),null;t.closeLoadingContained()})).catch((function(e){t.closeLoadingContained(),window.helper.handleError(e,t)}))}catch(a){console.log(a)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var t=this;setTimeout((function(){t.loading=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),c=r,h=a("2877"),u=Object(h["a"])(c,o,s,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d216799.6c73995f.js.map