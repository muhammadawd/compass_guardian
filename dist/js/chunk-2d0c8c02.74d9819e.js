(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8c02"],{"55e1":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"knowledge-base-page"}},[s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col w-full md:w-1/1 mb-base"},[s("vx-card",{staticClass:"text-right"},[s("vs-alert",{staticClass:"mb-4",attrs:{color:"dark"}},[s("span",{staticClass:"text-bold"},[t._v(t._s(t.$ml.get("all_student_exam")))])]),t.dataModel?s("div",{staticClass:"vx-row"},[t.dataModel.textQuestions.length>0?s("div",{staticClass:"vx-col w-full mb-base"},[s("vs-row",{staticClass:"w-full",attrs:{"vs-justify":"center"}},[s("vs-col",{attrs:{type:"flex","vs-justify":"centesr","vs-align":"center"}},[s("vs-card",[s("div",{attrs:{slot:"header"},slot:"header"},[s("vs-alert",{attrs:{active:"true",color:"danger"}},[s("h3",{staticClass:"text-bold pb-4"},[s("span",{staticClass:"text-info",staticStyle:{"font-size":"18px"}},[t._v(t._s(t.dataModel.exam.name))]),s("br"),s("hr",{staticClass:"mb-4"}),t._v("\n                        "+t._s(t.$ml.get("result_soon"))+"\n                      ")])])],1)])],1)],1)],1):t._e()]):t._e(),t.dataModel?s("div",{staticClass:"vx-row"},[0==t.dataModel.textQuestions.length?s("div",{staticClass:"vx-col w-full mb-base"},[s("h2",{staticClass:"text-bold"},[t._v("\n              "+t._s(t.$ml.get("your_result_p"))+" "),s("br"),s("span",{staticClass:"text-info",staticStyle:{"font-size":"18px"}},[t._v(t._s(t.dataModel.exam.name))])]),s("div",{staticClass:"vx-card bg-primary-gradient p-0 m-0 text-center",staticStyle:{width:"150px"}},[s("div",{staticClass:"vx-card__collapsible-content vs-con-loading__container"},[s("div",{staticClass:"vx-card__body m-0"},[s("h3",{staticClass:"text-bold"},[t._v("\n                    "+t._s(t.$ml.get("your_result"))+"\n                  ")]),s("div",{staticClass:"vx-row text-center ",staticStyle:{background:"#fff"}},[s("div",{staticClass:"vx-col w-full text-center"},[s("h1",{staticClass:"text-bold mt-3"},[t._v(t._s(t.dataModel.degree)+" / "+t._s(t.dataModel.exam?t.dataModel.exam.degree:0))])])])])])])]):t._e()]):t._e()],1)],1)])])},o=[],l=s("8e5f"),n=s.n(l),i=(s("e607"),{components:{Multiselect:n.a},data:function(){return{dataModel:{},loading:!1}},computed:{},mounted:function(){this.findStudentExams()},methods:{findStudentExams:function(){var t=this,a=t.$route.params.id;t.$root.$children[0].$refs.loader.show_loader=!0;try{window.serviceAPI.API().get(window.serviceAPI.FIND_STUDENT_EXAM_ID+"/".concat(a)).then((function(a){if(t.$root.$children[0].$refs.loader.show_loader=!1,a=a.data,a.status)return t.dataModel=a.data.studentExam,void console.log(t.dataModel)})).catch((function(a){t.$root.$children[0].$refs.loader.show_loader=!1,window.helper.handleError(a,t)}))}catch(s){console.log(s)}},openLoadingContained:function(){this.loading=!0,this.$vs.loading({background:"#000",color:"#fff",container:"#button-with-loading",scale:.45})},closeLoadingContained:function(){var t=this;setTimeout((function(){t.loading=!1,t.$vs.loading.close("#button-with-loading > .con-vs-loading")}),100)}}}),d=i,c=s("2877"),r=Object(c["a"])(d,e,o,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0c8c02.74d9819e.js.map