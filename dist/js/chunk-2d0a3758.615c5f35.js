(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3758"],{"01ef":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"knowledge-base-page"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[a("vx-card",{staticClass:"text-right"},[a("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[a("span",{staticClass:"text-bold"},[e._v(e._s(e.$ml.get("edit_questions_bank")))])]),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("stages"))+"\n              "),a("span",{staticClass:"star"},[e._v("*")])]),a("multiselect",{attrs:{options:e.stages,multiple:!1,"close-on-select":!0,"open-direction":"bottom","clear-on-select":!1,"preserve-search":!0,placeholder:e.$ml.get("search"),"custom-label":e.customStageLabel,"track-by":"id","preselect-first":!0},model:{value:e.selectedStage,callback:function(t){e.selectedStage=t},expression:"selectedStage"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"stage_id_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("subjects"))+"\n              "),a("span",{staticClass:"star"},[e._v("*")])]),a("multiselect",{attrs:{options:e.subjects,multiple:!1,"close-on-select":!0,"clear-on-select":!1,"preserve-search":!0,placeholder:e.$ml.get("search"),"custom-label":e.customLabel,"track-by":"id","preselect-first":!0},model:{value:e.selectedSubjects,callback:function(t){e.selectedSubjects=t},expression:"selectedSubjects"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"subject_id_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("question_type"))+"\n              "),a("span",{staticClass:"star"},[e._v("*")])]),a("vs-select",{staticClass:"w-full",attrs:{disabled:!0},on:{change:function(t){return e.changeQuestionType()}},model:{value:e.dataModel.type,callback:function(t){e.$set(e.dataModel,"type",t)},expression:"dataModel.type"}},[a("vs-select-item",{attrs:{value:"mcq",text:e.$ml.get("mcq")}}),a("vs-select-item",{attrs:{value:"true_false",text:e.$ml.get("true_false")}}),a("vs-select-item",{attrs:{value:"text",text:e.$ml.get("_text")}})],1),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"type_error"}})],1),a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("question_degree"))+"\n              "),a("span",{staticClass:"star"},[e._v("*")])]),a("vs-input",{staticClass:"w-full",model:{value:e.dataModel.degree,callback:function(t){e.$set(e.dataModel,"degree",t)},expression:"dataModel.degree"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"degree_error"}})],1),a("div",{staticClass:"vx-col w-full mb-base"},[a("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("question"))+"\n              "),a("span",{staticClass:"star"},[e._v("*")])]),a("vs-textarea",{attrs:{rows:"5"},model:{value:e.dataModel.name,callback:function(t){e.$set(e.dataModel,"name",t)},expression:"dataModel.name"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"name_error"}}),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4"},[a("label",{staticClass:"vs-input--label"},[e._v(e._s(e.$ml.get("image")))]),a("input",{ref:"file",staticClass:"vs-inputx vs-input--input normal",attrs:{type:"file"},on:{change:function(t){return e.handleFileQuestionUpload()}}})]),a("div",{staticClass:"vx-col w-full mb-base"},[e.dataModel.file_path?a("a",{staticClass:"text-bold",attrs:{href:e.dataModel.file_path.path,target:"_blank"}},[e._v("\n                  "+e._s(e.$ml.get("show_image")))]):e._e()])])],1)]),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"answers_error"}}),"mcq"==e.dataModel.type?a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full mb-base"},[a("div",{staticClass:"vx-col w-full mb-base"},[a("vs-button",{staticClass:"text-bold",attrs:{color:"primary",type:"filled","icon-pack":"feather",icon:"icon-plus"},on:{click:function(t){return e.dataModel.answers.push({value:"",is_correct:0})}}},[e._v("\n                "+e._s(e.$ml.get("add_answers"))+"\n              ")]),a("br")],1),a("div",{staticClass:"vx-col w-full mb-base"},[a("div",{staticClass:"vx-row"},e._l(e.dataModel.answers,(function(t,s){return a("div",{key:s,staticClass:"vx-col md:w-1/4 mb-base",staticStyle:{position:"relative"}},[a("label",{staticClass:"vs-input--label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataModel.answers[s].is_correct,expression:"dataModel.answers[key].is_correct"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.dataModel.answers[s].is_correct)?e._i(e.dataModel.answers[s].is_correct,"1")>-1:e.dataModel.answers[s].is_correct},on:{change:function(t){var a=e.dataModel.answers[s].is_correct,l=t.target,o=!!l.checked;if(Array.isArray(a)){var n="1",i=e._i(a,n);l.checked?i<0&&e.$set(e.dataModel.answers[s],"is_correct",a.concat([n])):i>-1&&e.$set(e.dataModel.answers[s],"is_correct",a.slice(0,i).concat(a.slice(i+1)))}else e.$set(e.dataModel.answers[s],"is_correct",o)}}}),e._v("\n                    "+e._s(e.$ml.get("answer"))),a("span",{staticClass:"star"},[e._v("*")])]),a("vs-input",{staticClass:"w-full",model:{value:e.dataModel.answers[s].value,callback:function(t){e.$set(e.dataModel.answers[s],"value",t)},expression:"dataModel.answers[key].value"}}),a("input",{ref:"image"+s,refInFor:!0,staticClass:"vs-inputx vs-input--input normal",attrs:{type:"file"},on:{change:function(t){return e.handleFileUpload(s)}}}),a("vs-button",{staticStyle:{position:"absolute",left:"0",top:"22px"},attrs:{color:"danger",type:"filled",icon:"delete"},on:{click:function(t){return e.deleteRow(s)}}}),e.dataModel.answers[s].file_path?a("div",{staticClass:"text-center mt-2",staticStyle:{"box-shadow":"1px 2px 12px #aaa","border-radius":"90px 0 90px",height:"350px",overflow:"hidden",display:"inline-block",background:""}},[a("img",{staticStyle:{margin:"40px auto","vertical-align":"middle",width:"60%","max-height":"400px"},attrs:{src:e.dataModel.answers[s].file_path.path,alt:""}})]):e._e(),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"answers."+s+".value_error"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"answers."+s+".is_correct_error"}}),a("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"answers."+s+".file_error"}})],1)})),0)])])]):e._e(),"true_false"==e.dataModel.type?a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col md:w-1/4 mb-base"},[a("vs-select",{staticClass:"w-full",attrs:{label:e.$ml.get("answer")},on:{change:function(t){return e.changeQuestionTruefalse()}},model:{value:e.dataModel.true_false,callback:function(t){e.$set(e.dataModel,"true_false",t)},expression:"dataModel.true_false"}},[a("vs-select-item",{attrs:{value:"true",text:e.$ml.get("true")}}),a("vs-select-item",{attrs:{value:"false",text:e.$ml.get("false")}})],1)],1)]):e._e(),"text"==e.dataModel.type?a("div",{staticClass:"vx-row"},[e.dataModel.answers[0]?a("div",{staticClass:"vx-col w-full mb-base"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.dataModel.answers[0].is_correct,expression:"dataModel.answers[0].is_correct"}],attrs:{type:"hidden",value:"1"},domProps:{value:e.dataModel.answers[0].is_correct},on:{input:function(t){t.target.composing||e.$set(e.dataModel.answers[0],"is_correct",t.target.value)}}}),a("vs-textarea",{attrs:{label:e.$ml.get("answer"),rows:"5"},model:{value:e.dataModel.answers[0].value,callback:function(t){e.$set(e.dataModel.answers[0],"value",t)},expression:"dataModel.answers[0].value"}})],1):e._e()]):e._e(),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full text-center mb-base"},[a("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:e.loading,type:"filled",vslor:"primary"},on:{click:e.editQuestion}},[e._v("\n              "+e._s(e.$ml.get("edit"))+"\n            ")])],1)])],1)],1)])])},l=[],o=a("8e5f"),n=a.n(o),i=(a("e607"),{components:{Multiselect:n.a},data:function(){return{dataModel:{type:"mcq",answers:[]},teacher:{},q_types:["mcq","true_false","text"],subjects:[],selectedSubjects:null,stages:[],selectedStage:null,findId:null,findModelId:null,loading:!1}},computed:{},mounted:function(){var e=JSON.parse(window.ls.getFromStorage("auth_data"));this.findModelId=this.$route.params.id,this.findId=e.user.id,this.findTeacher(),this.getAllStages(),this.findQuestionBank()},methods:{handleFileQuestionUpload:function(){var e=this;e.dataModel.file=e.$refs.file.files[0]},handleFileUpload:function(e){var t=this;t.dataModel.answers[e].file=t.$refs["image".concat(e)][0].files[0]},deleteRow:function(e){var t=this;t.dataModel.answers.splice(e,1)},customLabel:function(e){var t=e.translated;return"".concat(t.title)},customStageLabel:function(e){var t=e.translated;return"".concat(t.title)},getAllStages:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_STAGES).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,t.status?e.stages=t.data.stages.data:e.stages=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.stages=[]}))}catch(t){console.log(t)}},changeQuestionType:function(){console.log(this.dataModel.type)},changeQuestionTruefalse:function(){var e=this,t=0,a=0;"true"==e.dataModel.true_false?(t=1,a=0):(t=0,a=1),e.dataModel.answers[0]={value:"true",is_correct:t},e.dataModel.answers[1]={value:"false",is_correct:a}},findQuestionBank:function(){var e=this,t=e.findModelId;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_QUESTION+"/".concat(t)).then((function(t){if(e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,t.status){if(console.log(t.data.question),e.dataModel=t.data.question,"true_false"==t.data.question.type){var a=t.data.question.answers,s="";a=_.each(a,(function(e,t){if("1"==e.is_correct)return s=e.value})),console.log(a),e.dataModel.true_false=s}return e.selectedSubjects=t.data.question.subject,void(e.selectedStage=t.data.question.stage)}})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(a){console.log(a)}},findTeacher:function(){var e=this,t=e.findId;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS+"/".concat(t)).then((function(t){if(e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,t.status)return e.teacher=t.data.teacher,void(e.subjects=t.data.teacher.subjects)})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(a){console.log(a)}},getAllSubjects:function(){var e=this;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,console.log(t),t.status?e.subjects=t.data.subjects.data:e.subjects=[]})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e),e.subjects=[]}))}catch(t){console.log(t)}},editQuestion:function(){var e=this;e.openLoadingContained();var t=e.dataModel;t.stage_id=e.selectedStage?e.selectedStage.id:"",t.subject_id=e.selectedSubjects?e.selectedSubjects.id:"";var a=new FormData;$.each(t,(function(e,t){a.append(e,t||"")})),$.each(t.answers,(function(e,t){a.append("answers[".concat(e,"][file]"),t.file?t.file:""),a.append("answers[".concat(e,"][value]"),t.value?t.value:""),a.append("answers[".concat(e,"][is_correct]"),t.is_correct?1:0)})),$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.EDIT_QUESTION,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){if(t=t.data,t.status)return window.helper.showMessage("success",e),e.$router.push({name:"questions_bank"}),null;e.closeLoadingContained()})).catch((function(t){e.closeLoadingContained(),window.helper.handleError(t,e)}))}catch(s){console.log(s)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var e=this;setTimeout((function(){e.loading=!1,e.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),r=i,d=a("2877"),c=Object(d["a"])(r,s,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0a3758.615c5f35.js.map