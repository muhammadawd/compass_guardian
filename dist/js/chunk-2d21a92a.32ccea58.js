(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a92a"],{bba5:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"knowledge-base-page"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[s("vx-card",{staticClass:"text-right"},[s("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[s("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("add_teacher_exams")))])]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col md:w-1/3 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("subjects")))]),s("multiselect",{attrs:{options:t.subjects,multiple:!1,"close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedSubjects,callback:function(e){t.selectedSubjects=e},expression:"selectedSubjects"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"subject_id_error"}})],1),s("div",{staticClass:"vx-col md:w-1/3 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("stages")))]),s("multiselect",{attrs:{options:t.stages,multiple:!1,"close-on-select":!0,"open-direction":"bottom","clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customStageLabel,"track-by":"id","preselect-first":!0},on:{select:function(e){return t.getQuestions()}},model:{value:t.selectedStage,callback:function(e){t.selectedStage=e},expression:"selectedStage"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"stage_id_error"}})],1),s("div",{staticClass:"vx-col md:w-1/3 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("class_room")))]),s("multiselect",{attrs:{options:t.classRooms,multiple:!0,"open-direction":"bottom","close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:t.$ml.get("search"),"custom-label":t.customStageLabel,"track-by":"id","preselect-first":!0},model:{value:t.selectedClassRooms,callback:function(e){t.selectedClassRooms=e},expression:"selectedClassRooms"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"class_room_id_error"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"class_room_ids_error"}})],1),s("div",{staticClass:"vx-col md:w-1/5 mb-base"},[s("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("name")},model:{value:t.dataModel.name,callback:function(e){t.$set(t.dataModel,"name",e)},expression:"dataModel.name"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"name_error"}})],1),s("div",{staticClass:"vx-col md:w-1/5 mb-base"},[s("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("exam_period")},model:{value:t.dataModel.duration,callback:function(e){t.$set(t.dataModel,"duration",e)},expression:"dataModel.duration"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"duration_error"}})],1),s("div",{staticClass:"vx-col md:w-1/4 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("date")))]),s("flat-pickr",{staticClass:"w-full",attrs:{config:t.timeConfig,label:t.$ml.get("date")},model:{value:t.dataModel.date,callback:function(e){t.$set(t.dataModel,"date",e)},expression:"dataModel.date"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"date_error"}})],1),s("div",{staticClass:"vx-col md:w-1/6 mb-base"},[s("label",{staticClass:"vs-input--label"},[t._v(t._s(t.$ml.get("status")))]),s("vs-select",{staticClass:"w-full",model:{value:t.dataModel.status_id,callback:function(e){t.$set(t.dataModel,"status_id",e)},expression:"dataModel.status_id"}},t._l(t.status,(function(t,e){return s("vs-select-item",{key:e,attrs:{value:t.id,text:t.translated.title}})})),1),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"status_id_error"}})],1),s("div",{staticClass:"vx-col md:w-1/6 mb-base"},[s("vs-input",{staticClass:"w-full",attrs:{label:t.$ml.get("question_number")},model:{value:t.dataModel.question_number,callback:function(e){t.$set(t.dataModel,"question_number",e)},expression:"dataModel.question_number"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"question_number_error"}})],1),s("div",{staticClass:"vx-col w-full mb-base"},[s("vs-textarea",{staticClass:"w-full",attrs:{label:t.$ml.get("notes")},model:{value:t.dataModel.notes,callback:function(e){t.$set(t.dataModel,"notes",e)},expression:"dataModel.notes"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"notes_error"}})],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full text-center mb-base"},[s("vs-table",{ref:"table",attrs:{multiple:"",data:t.questions},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.data;return t._l(a,(function(e,a){return s("vs-tr",{key:a,attrs:{data:e}},[s("vs-td",{staticClass:"text-right"},[t._v("\n                    "+t._s(e.name)+"\n                  ")]),s("vs-td",{staticClass:"text-right"},[t._v("\n                    "+t._s(t.$ml.get(e.type))+"\n                  ")]),s("vs-td",{staticClass:"text-right"},[s("vs-input",{model:{value:t.questions[a].degree,callback:function(e){t.$set(t.questions[a],"degree",e)},expression:"questions[indextr].degree"}})],1)],1)}))}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("template",{slot:"thead"},[s("vs-th",[t._v(t._s(t.$ml.get("question")))]),s("vs-th",[t._v(t._s(t.$ml.get("type")))]),s("vs-th",[t._v(t._s(t.$ml.get("question_degree")))]),s("vs-th")],1)],2)],1)]),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full text-center mb-base"},[s("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:t.loading,type:"filled",vslor:"primary"},on:{click:t.addExam}},[t._v("\n              "+t._s(t.$ml.get("add"))+"\n            ")])],1)])],1)],1)])])},l=[],o=s("8e5f"),n=s.n(o),i=(s("e607"),s("c38f")),d=s.n(i),r=(s("0952"),{components:{Multiselect:n.a,flatPickr:d.a},data:function(){return{dataModel:{},timeConfig:{enableTime:!0,time_24hr:!0},teacher:{},q_types:["mcq","true_false","text"],subjects:[],selectedSubjects:null,status:[],selected:[],stages:[],selectedStage:null,classRooms:[],selectedClassRooms:null,questions:[],loading:!1}},watch:{selectedStage:function(t,e){this.selectedClassRooms=null,this.classRooms=t.class_rooms}},computed:{},mounted:function(){var t=JSON.parse(window.ls.getFromStorage("auth_data"));this.findId=t.user.id,this.findTeacher(),this.getAllStages(),this.getAllStatus()},methods:{customLabel:function(t){var e=t.translated;return"".concat(e.title)},customStageLabel:function(t){var e=t.translated;return"".concat(e.title)},getAllStatus:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STATUS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.status=e.data.status.exam_status:t.status=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.status=[]}))}catch(e){console.log(e)}},getAllStages:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STAGES).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status?t.stages=e.data.stages.data:t.stages=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.stages=[]}))}catch(e){console.log(e)}},changeQuestionType:function(){var t=this;console.log(t.dataModel.question_type)},findTeacher:function(){var t=this,e=t.findId;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS+"/".concat(e)).then((function(e){if(t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,e.status)return t.teacher=e.data.teacher,void(t.subjects=e.data.teacher.subjects)})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t)}))}catch(s){console.log(s)}},getAllSubjects:function(){var t=this;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS).then((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,e=e.data,console.log(e),e.status?t.subjects=e.data.subjects.data:t.subjects=[]})).catch((function(e){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(e,t),t.subjects=[]}))}catch(e){console.log(e)}},getAllQuestions:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_QUESTION,{params:t}).then((function(t){if(e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status)return e.questions=t.data.questions.data,void _.transform(t.data.questions.data,(function(t,e,s){e.question_id=e.id,t[s]=e}),{});e.questions=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.questions=[]}))}catch(s){console.log(s)}},getQuestions:function(){var t=this;setTimeout((function(){var e=t.selectedStage?t.selectedStage.id:"",s=JSON.parse(window.ls.getFromStorage("auth_data"));t.getAllQuestions({stage_id:e,teacher_id:s.user.id})}),100)},addExam:function(){var t=this;t.openLoadingContained();var e=t.dataModel;e.subject_id=t.selectedSubjects?t.selectedSubjects.id:"",e.stage_id=t.selectedStage?t.selectedStage.id:"";var s=JSON.parse(window.ls.getFromStorage("auth_data"));e.teacher_id=s.user.id,e.classroom_ids=t.selectedClassRooms?_.map(t.selectedClassRooms,"id"):[],e.questions=t.selected,$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.ADD_EXAM,e).then((function(e){if(e=e.data,e.status)return window.helper.showMessage("success",t),t.$router.push({name:"teacher_exams"}),null;t.closeLoadingContained()})).catch((function(e){t.closeLoadingContained(),window.helper.handleError(e,t)}))}catch(a){console.log(a)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var t=this;setTimeout((function(){t.loading=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),c=r,u=s("2877"),v=Object(u["a"])(c,a,l,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d21a92a.32ccea58.js.map