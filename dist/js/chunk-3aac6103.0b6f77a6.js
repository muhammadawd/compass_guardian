(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aac6103"],{2545:function(t,e,s){},"3d96":function(t,e,s){t.exports=s.p+"img/check.2a0565c8.jpg"},ceb7:function(t,e,s){t.exports=s.p+"img/cross.dbc11dd1.jpg"},dfa2:function(t,e,s){"use strict";var n=s("2545"),a=s.n(n);a.a},e7c1:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"knowledge-base-page"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[n("vx-card",{staticClass:"text-right"},[n("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[n("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("student_exam")))])]),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col md:w-1/3 mb-base"},[t.dataModel.exam?n("h3",[t._v(t._s(t.$ml.get("exam_period"))+" : "),n("span",{staticClass:"text-primary text-bold"},[t._v(t._s(t.dataModel.exam.duration))]),t._v("\n              "+t._s(t.$ml.get("mins")))]):t._e(),n("div",{staticClass:"vx-card bg-danger-gradient p-0 m-0"},[n("div",{staticClass:"vx-card__collapsible-content vs-con-loading__container"},[n("div",{staticClass:"vx-card__body m-0 "},[n("div",{staticClass:"vx-row text-center "},[n("div",{staticClass:"vx-col w-full sm:w-1/3 "},[n("h3",{staticClass:"text-bold text-white"},[t._v(t._s(t.$ml.get("seconds")))]),n("h1",{staticClass:"text-bold mt-3 text-white"},[t._v(t._s(t.timeCounter.seconds))])]),n("div",{staticClass:"vx-col w-full sm:w-1/3 "},[n("br"),n("h1",{staticClass:"text-bold text-white"},[t._v(":")])]),n("div",{staticClass:"vx-col w-full sm:w-1/3 "},[n("h3",{staticClass:"text-bold text-white"},[t._v(t._s(t.$ml.get("minutes")))]),n("h1",{staticClass:"text-bold mt-3 text-white"},[t._v(t._s(t.timeCounter.minutes))])])])])])])]),n("div",{staticClass:"vx-col md:w-1/3 mb-base"}),n("div",{staticClass:"vx-col md:w-1/3 text-left mb-base"},[t.dataModel.questions?n("div",{staticClass:"btn-group",attrs:{dir:"ltr"}},[n("vs-button",{ref:"loadableButton",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{disabled:0==t.current_question_index,id:"button-with-loading",type:"filled",vslor:"primary"},on:{click:function(e){return t.goPrevious()}}},[n("i",{staticClass:"fas fa-arrow-left"}),t._v("\n                "+t._s(t.$ml.get("previous"))+"\n              ")]),n("vs-button",{ref:"loadableButton2",staticClass:"vs-con-loading__container vs-button-dark text-bold",attrs:{id:"button-with-loading2",disabled:t.dataModel.questions.length-1==t.current_question_index,type:"filled",vslor:"primary"},on:{click:function(e){return t.goNext()}}},[t._v("\n                "+t._s(t.$ml.get("next"))+"\n                "),n("i",{staticClass:"fas fa-arrow-right"})]),n("vs-button",{ref:"loadableButton3",staticClass:"vs-con-loading__container vs-button-danger text-bold",attrs:{id:"button-with-loading3",disabled:t.dataModel.questions.length-1!=t.current_question_index,type:"filled",vslor:"primary"},on:{click:function(e){return t.finishExam()}}},[t._v("\n                "+t._s(t.$ml.get("finish_exam"))+"\n                "),n("i",{staticClass:"fas fa-file"})])],1):t._e()]),n("div",{staticClass:"vx-col w-full mb-base"},[n("hr",{staticClass:"pb-0"})])]),n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col md:w-1/5 mb-base"},[n("vs-list",[n("vs-list-header",{attrs:{title:t.$ml.get("questions"),color:"info"}}),t._l(t.dataModel.questions,(function(e,s){return n("div",{key:s,style:t.getCurrentStyle(t.dataModel.questions,e,s,t.current_question_index)},[n("vs-list-header",{attrs:{title:t.$ml.get("question")+" "+(s+1),color:"info"}}),n("vs-list-item",{attrs:{title:""+(e.question?e.question.name:""),subtitle:""+(e.question?t.$ml.get(e.question.type):"")}},[n("template",{slot:"avatar"},[n("vs-avatar",{attrs:{color:t.getCurrentClass(t.dataModel.questions,e,s,t.current_question_index),text:t.getCurrentSymbol(t.dataModel.questions,e,s,t.current_question_index)}})],1)],2)],1)}))],2)],1),n("div",{staticClass:"vx-col md:w-4/5 mb-base"},[t.dataModel.questions?n("vx-card",{staticClass:"text-right",staticStyle:{background:"#ccc"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mb-base"},[n("h1",{staticClass:"text-bold mb-3"},[t._v(t._s(t.$ml.get("question")+" "+(t.current_question_index+1)))]),n("h2",[t._v(t._s(t.dataModel.questions[t.current_question_index].question.name))]),n("hr",{staticClass:"m-0 p-0"})])])]):t._e(),t.dataModel.questions?n("vx-card",{staticClass:"text-right mt-3",staticStyle:{background:"#fff"}},[n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mb-base"},[n("h1",{staticClass:"text-bold mb-3"},[t._v(t._s(t.$ml.get("answer")))]),"mcq"==t.dataModel.questions[t.current_question_index].question.type?n("div",{staticClass:"vx-row"},[n("div",{staticClass:"vx-col w-full mb-base"},[n("div",{staticClass:"vx-row"},t._l(t.dataModel.questions[t.current_question_index].question.answers,(function(e,s){return n("div",{key:s,staticClass:"vx-col md:w-1/4 mb-base"},[n("label",{staticClass:"vs-input--label"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataModel.questions[t.current_question_index].question.answers[s].is_correct,expression:"dataModel.questions[current_question_index].question.answers[key].is_correct"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(t.dataModel.questions[t.current_question_index].question.answers[s].is_correct)?t._i(t.dataModel.questions[t.current_question_index].question.answers[s].is_correct,"1")>-1:t.dataModel.questions[t.current_question_index].question.answers[s].is_correct},on:{change:[function(e){var n=t.dataModel.questions[t.current_question_index].question.answers[s].is_correct,a=e.target,i=!!a.checked;if(Array.isArray(n)){var o="1",r=t._i(n,o);a.checked?r<0&&t.$set(t.dataModel.questions[t.current_question_index].question.answers[s],"is_correct",n.concat([o])):r>-1&&t.$set(t.dataModel.questions[t.current_question_index].question.answers[s],"is_correct",n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.dataModel.questions[t.current_question_index].question.answers[s],"is_correct",i)},function(e){return t.updateStorageModel(t.dataModel.questions[t.current_question_index].question,t.dataModel.questions[t.current_question_index].question.answers[s])}]}}),t._v("\n                            "+t._s(t.$ml.get("answer"))+"\n                          ")]),n("vs-input",{staticClass:"w-full",attrs:{disabled:!0},model:{value:t.dataModel.questions[t.current_question_index].question.answers[s].answer_value,callback:function(e){t.$set(t.dataModel.questions[t.current_question_index].question.answers[s],"answer_value",e)},expression:"dataModel.questions[current_question_index].question.answers[key].answer_value"}})],1)})),0)])]):t._e(),"true_false"==t.dataModel.questions[t.current_question_index].question.type?n("div",{staticClass:"vx-row"},t._l(t.dataModel.questions[t.current_question_index].question.answers,(function(e,a){return n("div",{key:a,staticClass:"vx-col md:w-1/2 text-center mb-base"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataModel.questions[t.current_question_index].question.answers[a].is_correct,expression:"dataModel.questions[current_question_index].question.answers[key].is_correct"}],attrs:{type:"radio",id:"radio-"+a,name:"radio",value:"1"},domProps:{checked:t._q(t.dataModel.questions[t.current_question_index].question.answers[a].is_correct,"1")},on:{change:[function(e){return t.$set(t.dataModel.questions[t.current_question_index].question.answers[a],"is_correct","1")},function(e){return t.updateStorageModel(t.dataModel.questions[t.current_question_index].question,t.dataModel.questions[t.current_question_index].question.answers[a])}]}}),n("label",{attrs:{for:"radio-"+a}},["true"==e.value?n("img",{attrs:{width:"80",src:s("3d96"),alt:""}}):t._e(),"false"==e.value?n("img",{attrs:{width:"80",src:s("ceb7"),alt:""}}):t._e()])])})),0):t._e(),"text"==t.dataModel.questions[t.current_question_index].question.type?n("div",{staticClass:"vx-row"},[t.dataModel.questions[t.current_question_index].question.answers[0]?n("div",{staticClass:"vx-col w-full mb-base"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.dataModel.questions[t.current_question_index].question.answers[0].is_correct,expression:"dataModel.questions[current_question_index].question.answers[0].is_correct"}],attrs:{type:"hidden",value:"1"},domProps:{value:t.dataModel.questions[t.current_question_index].question.answers[0].is_correct},on:{input:function(e){e.target.composing||t.$set(t.dataModel.questions[t.current_question_index].question.answers[0],"is_correct",e.target.value)}}}),n("vs-textarea",{staticStyle:{background:"#FFF"},attrs:{label:t.$ml.get("answer"),rows:"5"},on:{keyup:function(e){return t.updateStorageModel(t.dataModel.questions[t.current_question_index].question,t.dataModel.questions[t.current_question_index].question.answers[0])}},model:{value:t.dataModel.questions[t.current_question_index].question.answers[0].answer_value,callback:function(e){t.$set(t.dataModel.questions[t.current_question_index].question.answers[0],"answer_value",e)},expression:"dataModel.questions[current_question_index].question.answers[0].answer_value"}})],1):t._e()]):t._e()])])]):t._e()],1)])],1)],1)])])},a=[],i=s("8e5f"),o=s.n(i),r=(s("e607"),{components:{Multiselect:o.a},data:function(){return{dataModel:{},loading:!1,disable:{next:!1,previous:!1},current_question_index:0,timeCounter:{}}},computed:{},mounted:function(){var t=this;t.dataModel=JSON.parse(window.ls.getFromStorage("current_exam")),t.dataModel||t.$router.push({name:"all_student_exam"});var e=setInterval((function(){t.timeCounter=t.examTimer(t.dataModel.created_at,t.dataModel.exam.duration),t.timeCounter._seconds<=0&&(window.helper.showMessage("error",t),clearInterval(e),t.$router.push({name:"all_student_exam"}))}),1e3)},methods:{updateStorageModel:function(t,e){t.has_answered=1,"true_false"==t.type&&(_.each(t.answers,(function(t,e){t.is_correct=0})),e.is_correct=1),console.log("updated"),window.ls.saveToStorage("current_exam",this.dataModel)},getCurrentSymbol:function(t,e,s,n){return e.question.has_answered?"✔":s<=n?"ⓘ":"✘"},getCurrentClass:function(t,e,s,n){return e.question.has_answered?"success":s<=n?"primary":"danger"},getCurrentStyle:function(t,e,s,n){return s<=n?{textDecoration:"none"}:{textDecoration:"line-through"}},goPrevious:function(){var t=this;t.openLoadingContained("#button-with-loading"),0!=t.current_question_index&&t.current_question_index--,t.closeLoadingContained("#button-with-loading > .con-vs-loading")},goNext:function(){var t=this;t.openLoadingContained("#button-with-loading2");var e=t.dataModel.questions.length-1;e>t.current_question_index&&t.current_question_index++,t.closeLoadingContained("#button-with-loading2 > .con-vs-loading")},prepareData:function(t){t.questions[0].question.answers;var e=[];return _.each(t.questions,(function(t,s){_.each(t.question.answers,(function(s,n){"text"==t.question.type&&(s.is_correct=1),e.push({id:t.id,answer:"text"==t.question.type?s.answer_value:s.id,is_correct:s.is_correct?1:0})}))})),e=_.filter(e,(function(t){if(t.is_correct)return t})),{id:t.id,questions:e}},finishExam:function(){var t=this,e=t.dataModel,s=t.prepareData(e);console.log(s),$(".span-text-validation").text("");try{window.serviceAPI.API().post(window.serviceAPI.UPDATE_STUDENT_EXAM,s).then((function(s){if(s=s.data,s.status)return window.helper.showMessage("success",t),window.ls.clearAllStorage("current_exam"),t.$router.push({name:"student_exam_result",params:{id:e.id}}),null;t.closeLoadingContained("#button-with-loading3 > .con-vs-loading")})).catch((function(e){t.closeLoadingContained("#button-with-loading3 > .con-vs-loading"),window.helper.handleError(e,t)}))}catch(n){console.log(n)}},examTimer:function(t,e){t=this.$moment(t,"YYYY-MM-DD HH:mm");var s=t.add(e,"minutes");return this.diffTwoDates(s.format("YYYY-MM-DD HH:mm"),new Date)},diffTwoDates:function(t,e){t=this.$moment(t,"YYYY.MM.DD HH:mm"),e=this.$moment(e,"YYYY.MM.DD HH:mm");var s=t.diff(e,"seconds");return s<0?{minutes:0,seconds:0,_seconds:0}:this.fancyTimeFormat(s)},fancyTimeFormat:function(t){var e=~~(t%3600/60),s=~~t%60;return{minutes:e,seconds:s,_seconds:t}},openLoadingContained:function(t){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:t,scale:.45})},closeLoadingContained:function(t){var e=this;setTimeout((function(){e.loading=!1,e.$vs.loading.close(t)}),1e3)}}}),d=r,u=(s("dfa2"),s("2877")),l=Object(u["a"])(d,n,a,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=chunk-3aac6103.0b6f77a6.js.map