(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cc7c8"],{"4dac":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"knowledge-base-page"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[a("vx-card",{staticClass:"text-right"},[a("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[a("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("edit_schedule")))])]),a("div",{staticClass:"vx-row  text-right"},[a("div",{staticClass:"vx-col md:w-1/3 mb-base"},[a("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("name")},model:{value:t.dataModel.name,callback:function(e){t.$set(t.dataModel,"name",e)},expression:"dataModel.name"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"name_error"}})],1),a("div",{staticClass:"vx-col md:w-1/3 mb-base"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("stages")))]),a("multiselect",{attrs:{options:t.stages,multiple:!1,"close-on-select":!0,"open-direction":"bottom","clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),maxHeight:80,"custom-label":t.customStageLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedStage,callback:function(e){t.selectedStage=e},expression:"selectedStage"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"stage_id_error"}})],1),a("div",{staticClass:"vx-col md:w-1/3 mb-base"},[a("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("class_room")))]),a("multiselect",{attrs:{options:t.classRooms,multiple:!1,"open-direction":"bottom","close-on-select":!0,maxHeight:80,"clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customStageLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedClassRooms,callback:function(e){t.selectedClassRooms=e},expression:"selectedClassRooms"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"class_room_id_error"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"class_room_ids_error"}})],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full text-center mb-base"},[a("div",{staticClass:"text-right"},[a("vs-button",{attrs:{type:"border",color:"primary"},on:{click:function(e){return t.addOption()}}},[a("i",{staticClass:"fa fa-plus"})])],1),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details_error"}}),a("vs-table",{attrs:{data:t.dataModel.details},scopedSlots:t._u([{key:"default",fn:function(e){var s=e.data;return t._l(s,(function(e,s){return a("vs-tr",{key:s},[a("vs-td",[a("vs-button",{attrs:{type:"border",color:"danger"},on:{click:function(e){return t.removeOption(s)}}},[a("i",{staticClass:"fa fa-minus"})])],1),a("vs-td",{staticClass:"text-right"},[a("vs-select",{staticClass:"w-full",model:{value:t.dataModel.details[s].day_id,callback:function(e){t.$set(t.dataModel.details[s],"day_id",e)},expression:"dataModel.details[indextr].day_id"}},t._l(t.days,(function(t,e){return a("vs-select-item",{key:e,attrs:{value:t.id,text:t.translated.title}})})),1),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details."+s+".day_id_error"}})],1),a("vs-td",{staticClass:"text-right"},[a("vs-select",{staticClass:"w-full",on:{change:function(e){return t.changeBreak(t.dataModel.details[s])}},model:{value:t.dataModel.details[s].is_break,callback:function(e){t.$set(t.dataModel.details[s],"is_break",e)},expression:"dataModel.details[indextr].is_break"}},[a("vs-select-item",{attrs:{value:"1",text:t.$ml.get("yes")}}),a("vs-select-item",{attrs:{value:"0",text:t.$ml.get("no")}})],1),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details."+s+".is_break_error"}})],1),a("vs-td",{staticClass:"text-right"},[a("multiselect",{attrs:{options:t.teachers,multiple:!1,"open-direction":"bottom",disabled:0!=t.dataModel.details[s].is_break,placeholder:t.$ml.get("search"),"track-by":"id",label:"name"},model:{value:t.dataModel.details[s].teacher,callback:function(e){t.$set(t.dataModel.details[s],"teacher",e)},expression:"dataModel.details[indextr].teacher"}},[a("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v("Oops! No elements found. Consider changing the search query.")])]),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details."+s+".teacher_id_error"}})],1),a("vs-td",{staticClass:"text-right"},[a("multiselect",{attrs:{options:t.subjects,multiple:!1,"open-direction":"bottom",disabled:0!=t.dataModel.details[s].is_break,placeholder:t.$ml.get("search"),"track-by":"id","custom-label":t.customLabel},model:{value:t.dataModel.details[s].subject,callback:function(e){t.$set(t.dataModel.details[s],"subject",e)},expression:"dataModel.details[indextr].subject"}},[a("span",{attrs:{slot:"noResult"},slot:"noResult"},[t._v("Oops! No elements found. Consider changing the search query.")])]),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details."+s+".subject_id_error"}})],1),a("vs-td",{staticClass:"text-right"},[a("flat-pickr",{staticClass:"vs-inputx vs-input--input normal w-full",attrs:{config:t.timeConfig},model:{value:t.dataModel.details[s].start_time,callback:function(e){t.$set(t.dataModel.details[s],"start_time",e)},expression:"dataModel.details[indextr].start_time"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details."+s+".start_time_error"}})],1),a("vs-td",{staticClass:"text-right"},[a("flat-pickr",{staticClass:"vs-inputx vs-input--input normal w-full",attrs:{config:t.timeConfig},model:{value:t.dataModel.details[s].end_time,callback:function(e){t.$set(t.dataModel.details[s],"end_time",e)},expression:"dataModel.details[indextr].end_time"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"details."+s+".end_time_error"}})],1)],1)}))}}])},[a("template",{slot:"thead"},[a("vs-th"),a("vs-th",{attrs:{width:"15%"}},[t._v(t._s(t.$ml.get("day")))]),a("vs-th",{attrs:{width:"10%"}},[t._v(t._s(t.$ml.get("is_break")))]),a("vs-th",{attrs:{width:"20%"}},[t._v(t._s(t.$ml.get("teachers")))]),a("vs-th",{attrs:{width:"20%"}},[t._v(t._s(t.$ml.get("subjects")))]),a("vs-th",[t._v(t._s(t.$ml.get("start_time")))]),a("vs-th",[t._v(t._s(t.$ml.get("end_time")))])],1)],2)],1)]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full text-center mb-base"},[t.hasAccessPermission("update-schedule")?a("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:t.loading,type:"filled",vslor:"primary"},on:{click:t.addSchedule}},[t._v("\n              "+t._s(t.$ml.get("edit"))+"\n            ")]):t._e()],1)])],1)],1)])])},l=[],o=a("8e5f"),i=a.n(o),d=(a("e607"),a("c38f")),r=a.n(d),n=(a("0952"),{components:{Multiselect:i.a,flatPickr:r.a},data:function(){return{dataModel:{name:"",class_room_id:"",details:[]},days:[],stages:[],selectedStage:null,classRooms:[],selectedClassRooms:null,teachers:[],subjects:[],loading:!1,findId:null,timeConfig:{enableTime:!0,noCalendar:!0,dateFormat:"H:i:S",time_24hr:!0}}},watch:{selectedStage:function(t,e){null!=e&&(this.selectedClassRooms=null,this.classRooms=t.class_rooms)}},computed:{},mounted:function(){$("table").removeClass("vs-table--tbody-table"),this.findId=this.$route.params.id,this.findSchedule(),this.getAllStages(),this.getAllTeachers(),this.getAllDays(),this.getAllSubjects()},methods:{hasAccessPermission:function(t){return window.helper.hasAccessPermission(t)},changeBreak:function(t){return 1==t.is_break&&(t.subject_id=null,t.subject=null,t.teacher_id=null,t.teacher=null),t},customStageLabel:function(t){var e=t.translated;return"".concat(e.title)},customLabel:function(t){var e=t.translated;return"".concat(e.title)},getAllSubjects:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.subjects=e.data.subjects.data:t.subjects=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.subjects=[]}))}catch(e){console.log(e)}},findSchedule:function(){var t=this,e=t.findId;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_SCHEDULE+"/".concat(e)).then((function(e){if(t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status)return t.dataModel=e.data.schedule,t.selectedStage=e.data.schedule.class_room.stage,void(t.selectedClassRooms=e.data.schedule.class_room)})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(a){console.log(a)}},removeOption:function(t){var e=this,a=e.dataModel.details;e.dataModel.details=_.remove(a,(function(e,a){return a==t})),e.dataModel.details=a},getAllStages:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STAGES).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status?t.stages=e.data.stages.data:t.stages=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.stages=[]}))}catch(e){console.log(e)}},addOption:function(){var t=this;t.dataModel.details.push({day_id:1,is_break:0,subject_id:"",teacher_id:"",start_time:"",end_time:""})},prepareRequestData:function(t){return $.each(t.details,(function(t,e){console.log(e),e.subject&&e.subject.pivot&&(e.teacher_id=e.subject.pivot.teacher_id,e.subject_id=e.subject.pivot.subject_id)})),t},addSchedule:function(){var t=this;t.openLoadingContained();var e=t.dataModel,a=t.selectedClassRooms?t.selectedClassRooms.id:null;e.class_room_id=a,_.each(e.details,(function(t,e){t.teacher&&(t.teacher_id=t.teacher.id),t.subject&&(t.subject_id=t.subject.id)})),t.prepareRequestData(e),console.log(e),$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.EDIT_SCHEDULE,e).then((function(e){if(e=e.data,e.status)return window.helper.showMessage("success",t),t.$router.push({name:"management_schedule"}),null;t.closeLoadingContained()})).catch((function(e){t.closeLoadingContained(),window.helper.handleError(e,t)}))}catch(s){console.log(s)}},getAllTeachers:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHERS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status?t.teachers=e.data.teachers.data:t.teachers=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.teachers=[]}))}catch(e){console.log(e)}},getAllDays:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_DAYS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status?t.days=e.data.days:t.days=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.days=[]}))}catch(e){console.log(e)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var t=this;setTimeout((function(){t.loading=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),c=n,u=a("2877"),h=Object(u["a"])(c,s,l,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d0cc7c8.a25a32db.js.map