(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9766"],{"8e47":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"knowledge-base-page"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[s("vx-card",{staticClass:"text-right"},[s("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[s("span",{staticClass:"text-bold"},[e._v(e._s(e.$ml.get("teacher_all_exams")))])]),0==e.questions.length?s("vs-alert",{staticClass:"mb-4",attrs:{color:"danger"}},[s("h3",{staticClass:"text-bold"},[e._v(e._s(e.$ml.get("no_exams")))])]):e._e(),s("div",{staticClass:"vx-row"},e._l(e.questions,(function(t,a){return s("div",{key:a,staticClass:"vx-col w-full mb-base"},[s("h3",{staticClass:"text-bold"},[e._v(e._s(t.question.name)+" "),s("span",{staticClass:"star"},[e._v("*")])]),s("vs-input",{staticClass:"mb-3",attrs:{type:"number",max:t.exam_question.degree,min:"0",label:e.$ml.get("degree")+" ("+t.exam_question.degree+")"},model:{value:e.questions[a].degree,callback:function(t){e.$set(e.questions[a],"degree",t)},expression:"questions[key].degree"}}),s("span",{staticClass:"span-text-validation text-danger text-bold",attrs:{id:"questions."+a+".degree_error"}}),e._l(t.answers,(function(a,n){return s("vs-textarea",{key:n,attrs:{row:"5",label:e.$ml.get("answer")},model:{value:t.answers[n].answer,callback:function(s){e.$set(t.answers[n],"answer",s)},expression:"question.answers[index].answer"}})})),e.questions.length>a+1?s("hr"):e._e()],2)})),0),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full text-center mb-base"},[s("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading",disabled:0==e.questions.length||e.loading,type:"filled",vslor:"primary"},on:{click:e.correctExam}},[e._v("\n              "+e._s(e.$ml.get("correct"))+"\n            ")])],1)])],1)],1)])])},n=[],o=s("8e5f"),i=s.n(o),l=(s("e607"),s("c38f")),r=s.n(l),d=(s("0952"),{components:{Multiselect:i.a,flatPickr:r.a},data:function(){return{questions:[],findModelSerial:null,loading:!1}},computed:{},mounted:function(){var e=JSON.parse(window.ls.getFromStorage("auth_data"));this.findId=e.user.id,this.findModelSerial=this.$route.params.serial,this.findExam()},methods:{findExam:function(){var e=this,t=e.findModelSerial;e.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS_EXAMS+"/".concat(t),{params:{limit:5}}).then((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,t=t.data,t.status&&(e.questions=t.data.questions.data)})).catch((function(t){e.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(t,e)}))}catch(s){console.log(s)}},correctExam:function(){var e=this;e.openLoadingContained();var t=[];_.each(e.questions,(function(e,s){t.push({id:e.id,degree:e.degree})}));var s={questions:t};$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.UPDATE_TEACHERS_EXAMS,s).then((function(t){if(t=t.data,t.status)return window.helper.showMessage("success",e),location.reload(),null;e.closeLoadingContained()})).catch((function(t){e.closeLoadingContained(),window.helper.handleError(t,e)}))}catch(a){console.log(a)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var e=this;setTimeout((function(){e.loading=!1,e.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),c=d,u=s("2877"),v=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0e9766.51f87bd4.js.map