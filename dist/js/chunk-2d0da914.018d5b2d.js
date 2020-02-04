(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0da914"],{"6bc5":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"knowledge-base-page"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[a("vx-card",{staticClass:"text-right"},[a("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[a("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("edit_teacher")))])]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("name")},model:{value:t.dataModel.name,callback:function(e){t.$set(t.dataModel,"name",e)},expression:"dataModel.name"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"name_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("username")},model:{value:t.dataModel.username,callback:function(e){t.$set(t.dataModel,"username",e)},expression:"dataModel.username"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"username_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("email")},model:{value:t.dataModel.email,callback:function(e){t.$set(t.dataModel,"email",e)},expression:"dataModel.email"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"email_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("password"),type:"password"},model:{value:t.dataModel.password,callback:function(e){t.$set(t.dataModel,"password",e)},expression:"dataModel.password"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"password_error"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("age")},model:{value:t.dataModel.age,callback:function(e){t.$set(t.dataModel,"age",e)},expression:"dataModel.age"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"age_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("ssn")},model:{value:t.dataModel.ssn,callback:function(e){t.$set(t.dataModel,"ssn",e)},expression:"dataModel.ssn"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"ssn_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("phone")},model:{value:t.dataModel.phone,callback:function(e){t.$set(t.dataModel,"phone",e)},expression:"dataModel.phone"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"phone_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("gender")))]),a("vs-select",{staticClass:"w-full",model:{value:t.dataModel.gender,callback:function(e){t.$set(t.dataModel,"gender",e)},expression:"dataModel.gender"}},[a("vs-select-item",{attrs:{value:"male",text:t.$ml.get("male")}}),a("vs-select-item",{attrs:{value:"female",text:t.$ml.get("female")}})],1),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"gender_error"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("qualification")},model:{value:t.dataModel.qualification,callback:function(e){t.$set(t.dataModel,"qualification",e)},expression:"dataModel.qualification"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"qualification_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("years_experience")},model:{value:t.dataModel.years_experience,callback:function(e){t.$set(t.dataModel,"years_experience",e)},expression:"dataModel.years_experience"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"years_experience_error"}})],1),a("div",{staticClass:"vx-col md:w-1/2 mb-base"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("subjects")))]),a("multiselect",{attrs:{options:t.subjects,multiple:!0,"close-on-select":!1,"clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedSubjects,callback:function(e){t.selectedSubjects=e},expression:"selectedSubjects"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"subject_ids_error"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full text-center mb-base"},[a("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:t.loading,type:"filled",vslor:"primary"},on:{click:t.editTeacher}},[t._v("\n              "+t._s(t.$ml.get("edit"))+"\n            ")])],1)])],1)],1)])])},l=[],o=a("8e5f"),d=a.n(o),i=(a("e607"),{components:{Multiselect:d.a},data:function(){return{dataModel:{title_ar:"",title_en:"",class_rooms:[]},subjects:[],selectedSubjects:[],findId:null,loading:!1}},computed:{},mounted:function(){this.findId=this.$route.params.id,this.getAllSubjects(),this.findTeacher()},methods:{customLabel:function(t){var e=t.translated;return"".concat(e.title)},findTeacher:function(){var t=this,e=t.findId;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS+"/".concat(e)).then((function(e){if(t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status)return t.dataModel=e.data.teacher,void(t.selectedSubjects=e.data.teacher.subjects)})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(a){console.log(a)}},editTeacher:function(){var t=this;t.openLoadingContained();var e=t.dataModel,a=t.selectedSubjects,s=_.map(a,"id");e.subject_ids=s,$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.EDIT_TEACHERS,e).then((function(e){if(e=e.data,e.status)return window.helper.showMessage("success",t),t.$router.push({name:"teachers"}),null;t.closeLoadingContained()})).catch((function(e){t.closeLoadingContained(),window.helper.handleError(e,t)}))}catch(l){console.log(l)}},getAllSubjects:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.subjects=e.data.subjects.data:t.subjects=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.subjects=[]}))}catch(e){console.log(e)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var t=this;setTimeout((function(){t.loading=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),n=i,c=a("2877"),r=Object(c["a"])(n,s,l,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0da914.018d5b2d.js.map