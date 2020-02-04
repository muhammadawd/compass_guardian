(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22999b"],{ddaf:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"knowledge-base-page"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[s("vx-card",{staticClass:"text-right"},[s("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[s("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("add_scientific_attachment")))])]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/4 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("subjects")))]),s("multiselect",{attrs:{options:t.subjects,multiple:!1,"close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedSubjects,callback:function(e){t.selectedSubjects=e},expression:"selectedSubjects"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"subject_id_error"}})],1),s("div",{staticClass:"vx-col md:w-1/4 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("stages")))]),s("multiselect",{attrs:{options:t.stages,multiple:!1,"close-on-select":!0,"open-direction":"bottom","clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customStageLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedStage,callback:function(e){t.selectedStage=e},expression:"selectedStage"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"stage_id_error"}})],1),s("div",{staticClass:"vx-col md:w-1/4 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("class_room")))]),s("multiselect",{attrs:{options:t.classRooms,multiple:!1,"open-direction":"bottom","close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customStageLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedClassRooms,callback:function(e){t.selectedClassRooms=e},expression:"selectedClassRooms"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"class_room_id_error"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"class_room_ids_error"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/3 mb-base"},[s("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("title_ar")},model:{value:t.dataModel.title_ar,callback:function(e){t.$set(t.dataModel,"title_ar",e)},expression:"dataModel.title_ar"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"title_ar_error"}})],1),s("div",{staticClass:"vx-col md:w-1/3 mb-base"},[s("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("title_en")},model:{value:t.dataModel.title_en,callback:function(e){t.$set(t.dataModel,"title_en",e)},expression:"dataModel.title_en"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"title_en_error"}})],1),s("div",{staticClass:"vx-col md:w-1/4 mb-base"},[s("div",{staticClass:"vs-component vs-con-input-label vs-input w-full vs-input-primary"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("files")))]),s("div",{staticClass:"vs-con-input"},[s("input",{ref:"image",staticClass:"vs-inputx vs-input--input normal",attrs:{type:"file",multiple:""},on:{change:function(e){return t.handleFileUpload()}}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"files_error"}})])])])]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/2 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("description_ar")))]),s("vs-textarea",{staticClass:"w-full",attrs:{rows:"6"},model:{value:t.dataModel.description_ar,callback:function(e){t.$set(t.dataModel,"description_ar",e)},expression:"dataModel.description_ar"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"description_ar_error"}})],1),s("div",{staticClass:"vx-col md:w-1/2 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("description_en")))]),s("vs-textarea",{staticClass:"w-full",attrs:{rows:"6"},model:{value:t.dataModel.description_en,callback:function(e){t.$set(t.dataModel,"description_en",e)},expression:"dataModel.description_en"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"description_en_error"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full mb-base"},[s("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(e){return t.dataModel.videos.push({url:""})}}})],1)]),s("div",{staticClass:"vx-row"},t._l(t.dataModel.videos,(function(e,a){return s("div",{key:a,staticClass:"vx-col md:w-1/4 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("url")))]),s("vs-input",{staticClass:"w-full",model:{value:t.dataModel.videos[a].url,callback:function(e){t.$set(t.dataModel.videos[a],"url",e)},expression:"dataModel.videos[key].url"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"videos."+a+".url_error"}})],1)})),0),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full text-center mb-base"},[s("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:t.loading,type:"filled",vslor:"primary"},on:{click:t.addMagazine}},[t._v("\n              "+t._s(t.$ml.get("add"))+"\n            ")])],1)])],1)],1)])])},l=[],o=s("8e5f"),i=s.n(o),n=(s("e607"),{components:{Multiselect:i.a},data:function(){return{dataModel:{videos:[]},images:[],subjects:[],selectedSubjects:null,stages:[],selectedStage:null,classRooms:[],selectedClassRooms:null,loading:!1}},computed:{},watch:{selectedStage:function(t,e){this.selectedClassRooms=null,this.classRooms=t.class_rooms,this.getAllStudents()}},mounted:function(){this.getAllStages(),this.getAllSubjects()},methods:{customLabel:function(t){var e=t.translated;return"".concat(e.title)},customStageLabel:function(t){var e=t.translated;return"".concat(e.title)},handleFileUpload:function(){var t=this;t.images=t.$refs.image.files},getAllSubjects:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.subjects=e.data.subjects.data:t.subjects=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.subjects=[]}))}catch(e){console.log(e)}},getAllStages:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STAGES).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status?t.stages=e.data.stages.data:t.stages=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.stages=[]}))}catch(e){console.log(e)}},addMagazine:function(){var t=this;t.openLoadingContained();var e=t.dataModel;e.stage_id=t.selectedStage?t.selectedStage.id:"",e.subject_id=t.selectedSubjects?t.selectedSubjects.id:"",e.class_room_id=t.selectedClassRooms?t.selectedClassRooms.id:"";var s=new FormData;s.append("type","main"),$.each(e,(function(t,e){s.append(t,e||"")})),$.each(e.videos,(function(t,e){s.append("videos[".concat(t,"][url]"),e.url?e.url:"")})),$.each(t.images,(function(t,e){s.append("files[".concat(t,"]"),e)})),$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.ADD_SCIENTIFIC_ATTACHMENT,s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){if(e=e.data,e.status)return window.helper.showMessage("success",t),t.$router.push({name:"scientific_attachment"}),null;t.closeLoadingContained()})).catch((function(e){t.closeLoadingContained(),window.helper.handleError(e,t)}))}catch(a){console.log(a)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var t=this;setTimeout((function(){t.loading=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),c=n,d=s("2877"),r=Object(d["a"])(c,a,l,!1,null,null,null);e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d22999b.9ce427b9.js.map