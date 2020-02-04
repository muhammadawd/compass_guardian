<template>
  <div id="knowledge-base-page">
    <div class="vx-row" >
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <div class="vx-row"
               style="background: linear-gradient(to left, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100));padding: 10px 4px;border-radius: 10px 10px 0">
            <div class="vx-col w-full mb-base ">
              <vs-alert class="mb-4 m-0" style="background: #274b59;color: #fff">
                <span class="text-bold">{{$ml.get('student_exam')}}</span>
              </vs-alert>
            </div>
            <div class="vx-col md:w-1/4 mb-base ">
              <h3 v-if="dataModel.exam" class="text-white text-bold">{{$ml.get('exam_period')}} : <span
                class="text-primary text-bold">{{dataModel.exam.duration}}</span>
                {{$ml.get('mins')}}</h3>
              <!--              <div>{{$ml.get('remain_time')}} : {{timeCounter}}</div>-->
              <div class="vx-card bg-primary-gradient p-0 m-0"><!---->
                <div class="vx-card__collapsible-content vs-con-loading__container">
                  <div class="vx-card__body m-0 ">
                    <div class="vx-row text-center ">
                      <div class="vx-col w-full sm:w-1/3 ">
                        <h3 class="text-bold text-white">{{$ml.get('seconds')}}</h3>
                        <h1 class="text-bold mt-3 text-white">{{timeCounter.seconds}}</h1>
                      </div>
                      <div class="vx-col w-full sm:w-1/3 ">
                        <br>
                        <h1 class="text-bold text-white">:</h1>
                      </div>
                      <div class="vx-col w-full sm:w-1/3 ">
                        <h3 class="text-bold text-white">{{$ml.get('minutes')}}</h3>
                        <h1 class="text-bold mt-3 text-white">{{timeCounter.minutes}}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="vx-col md:w-3/4 text-left mb-base">
              <div class="btn-group" v-if="dataModel.questions" dir="ltr">

                <vs-button :disabled="current_question_index == 0" @click="goPrevious()" ref="loadableButton"
                           id="button-with-loading"
                           class="vs-con-loading__container vs-button-dark text-bold" type="filled" vslor="primary">
                  <i class="fas fa-arrow-left"></i>
                  {{$ml.get('previous')}}
                </vs-button>

                <vs-button ref="loadableButton2" id="button-with-loading2"
                           :disabled="dataModel.questions.length -1 == current_question_index" @click="goNext()"
                           class="vs-con-loading__container vs-button-dark text-bold" type="filled" vslor="primary">
                  {{$ml.get('next')}}
                  <i class="fas fa-arrow-right"></i>
                </vs-button>


                <vs-button ref="loadableButton3" id="button-with-loading3"
                           :disabled="dataModel.questions.length -1 != current_question_index" @click="finishExam()"
                           class="vs-con-loading__container vs-button-primary text-bold" type="filled" vslor="primary">
                  {{$ml.get('finish_exam')}}
                  <i class="fas fa-file"></i>
                </vs-button>

              </div>
            </div>
            <div class="vx-col w-full mb-base">
              <hr class="pb-0">
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col md:w-1/5 mb-base" style="background: rgb(19, 38, 45);color: #fff;padding-left: 0 ">
              <!--           ⓘ  ✘ ✔-->
              <div style="max-height: 420px;overflow-y: scroll;">
                <vs-list>
                  <vs-list-header :title="$ml.get('questions')" class="text-bold" color="info"></vs-list-header>
                  <div v-for="(question , key) in dataModel.questions" :key="key"
                       :style="getCurrentStyle(dataModel.questions,question,key,current_question_index)">
                    <vs-list-header :title="$ml.get('question') + ` ${key+1}`" color="info"></vs-list-header>
                    <vs-list-item :title="`${question.question ? question.question.name : ''}`"
                                  :subtitle="`${question.question ? $ml.get(question.question.type) : ''}`">
                      <template slot="avatar">
                        <vs-avatar :color="getCurrentClass(dataModel.questions,question,key,current_question_index)"
                                   :text="getCurrentSymbol(dataModel.questions,question,key,current_question_index)"/>
                      </template>
                    </vs-list-item>
                  </div>
                </vs-list>
              </div>

            </div>

            <div class="vx-col md:w-4/5 mb-base p-0">

              <vx-card class="text-right mt-3 ml-3 mr-2" v-if="dataModel.questions"
                       style="background: linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))">
                <div class="vx-row">
                  <div class="vx-col w-full text-white">
                    <h1 class="text-bold mb-3 text-white">{{$ml.get('question') + ` ${current_question_index+1}`}}</h1>
                    <h2 class="text-white">{{dataModel.questions[current_question_index].question.name}}</h2>
                  </div>
                </div>
              </vx-card>

              <vx-card class="text-right mt-3 mb-4" v-if="dataModel.questions" style="background: #efefef">
                <div class="vx-row">
                  <div class="vx-col w-full mb-base">
                    <h1 class="text-bold mb-3">{{$ml.get('answer')}}</h1>
                    <!--                                        <h2>{{dataModel.questions[current_question_index].question.answers}}</h2>-->

                    <div class="vx-row" v-if="dataModel.questions[current_question_index].question.type == 'mcq'">
                      <div class="vx-col w-full mb-base">
                        <div class="vx-row">
                          <div class="vx-col md:w-1/4 mb-base"
                               v-for="(answer,key) in dataModel.questions[current_question_index].question.answers"
                               :key="key">
                            <label class="vs-input--label">
                              <input type="checkbox"
                                     @change="updateStorageModel(dataModel.questions[current_question_index].question,dataModel.questions[current_question_index].question.answers[key])"
                                     v-model="dataModel.questions[current_question_index].question.answers[key].is_correct"
                                     value="1">
                              {{$ml.get('answer')}}
                            </label>
                            <vs-input class="w-full" :disabled="true"
                                      v-model="dataModel.questions[current_question_index].question.answers[key].answer_value"></vs-input>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="vx-row"
                         v-if="dataModel.questions[current_question_index].question.type == 'true_false'">
                      <div class="vx-col md:w-1/2 text-center mb-base"
                           v-for="(answer,key) in dataModel.questions[current_question_index].question.answers"
                           :key="key">
                        <input type="radio" :id="`radio-${key}`" name="radio"
                               @change="updateStorageModel(dataModel.questions[current_question_index].question,dataModel.questions[current_question_index].question.answers[key])"
                               v-model="dataModel.questions[current_question_index].question.answers[key].is_correct"
                               value="1">
                        <label :for="`radio-${key}`">
                          <!--                          {{answer.value}}-->

                          <img
                            width="80"
                            v-if="answer.value == 'true'"
                            src="@/assets/images/elements/check.jpg"
                            alt="">
                          <img
                            width="80"
                            v-if="answer.value == 'false'"
                            src="@/assets/images/elements/cross.jpg"
                            alt="">
                          <!--                          <i class="fa fa-credit-card-alt" aria-hidden="true"></i>-->
                        </label>
                        <!--                        <vs-select class="w-full" :label="$ml.get('answer')">-->
                        <!--                          <vs-select-item value="true" :text="$ml.get('true')"></vs-select-item>-->
                        <!--                          <vs-select-item value="false" :text="$ml.get('false')"></vs-select-item>-->
                        <!--                        </vs-select>-->
                      </div>
                    </div>

                    <div class="vx-row" v-if="dataModel.questions[current_question_index].question.type == 'text'">
                      <div class="vx-col w-full mb-base"
                           v-if="dataModel.questions[current_question_index].question.answers[0]">
                        <input type="hidden"
                               v-model="dataModel.questions[current_question_index].question.answers[0].is_correct"
                               value="1">
                        <vs-textarea
                          v-model="dataModel.questions[current_question_index].question.answers[0].answer_value"
                          @keyup="updateStorageModel(dataModel.questions[current_question_index].question,dataModel.questions[current_question_index].question.answers[0])"
                          :label="$ml.get('answer')" style="background: #FFF"
                          rows="5"></vs-textarea>
                      </div>
                    </div>

                  </div>
                </div>
              </vx-card>

              <div style="background-color: rgb(19, 38, 45);overflow: hidden;padding: 10px;margin: 0"
                   v-if="dataModel.questions">
                <vs-button :disabled="current_question_index == 0" @click="goPrevious()" ref="loadableButton"
                           id="button-with-loading4"
                           class="vs-con-loading__container float-left vs-button-border text-bold" type="filled"
                           vslor="primary">
                  <i class="fas fa-arrow-left"></i>
                  {{$ml.get('previous')}}
                </vs-button>

                <vs-button ref="loadableButton2" id="button-with-loading5"
                           :disabled="dataModel.questions.length -1 == current_question_index" @click="goNext()"
                           class="vs-con-loading__container float-right vs-button-border text-bold" type="filled"
                           vslor="primary">
                  {{$ml.get('next')}}
                  <i class="fas fa-arrow-right"></i>
                </vs-button>
              </div>


            </div>
          </div>

        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        dataModel: {},
        loading: false,
        disable: {
          next: false,
          previous: false,
        },
        current_question_index: 0,
        timeCounter: {},
      }
    },
    computed: {},
    mounted() {
      let vm = this;
      vm.dataModel = JSON.parse(window.ls.getFromStorage('current_exam'));

      vm.sideRemove();

      if (!vm.dataModel) {
        vm.$router.push({name: 'all_student_exam'})
      }

      let current_state = 0;
      _.each(vm.dataModel.questions, (question, key) => {
        if (question.question.has_answered) current_state = key
      })
      vm.current_question_index = current_state;

      let interval = setInterval(() => {
        vm.timeCounter = vm.examTimer(vm.dataModel.created_at, vm.dataModel.exam.duration)
        if (vm.timeCounter._seconds <= 0) {
          window.helper.showMessage('error', vm);
          clearInterval(interval)
          vm.$router.push({name: 'all_student_exam'})
          location.reload()
        }
      }, 1000)
    },
    methods: {
      sideRemove() {
        $('#btnSidebarToggler').click();
        $('#content-area').attr('style', 'margin-right: 0 !important');
        $('.vs-sidebar').remove();
        $('.content-area-reduced .vx-navbar-wrapper').css({
          width: '100%'
        });

      },
      updateStorageModel(question, answer) {

        console.log(question, answer)
        question.has_answered = 1;
        if (question.type == 'true_false') {
          _.each(question.answers, (k, i) => {
            k.is_correct = 0;
          })
          answer.is_correct = 1;
        }
        console.log('updated')
        window.ls.saveToStorage('current_exam', this.dataModel)
      },
      getCurrentSymbol(questions, question, question_index, current_index) {
        // ⓘ ✘ ✔
        if (question.question.has_answered) {
          return '✔';
        }
        if (question_index <= current_index) {
          return 'ⓘ';
        }
        return '✘'
      },
      getCurrentClass(questions, question, question_index, current_index) {
        // ⓘ ✘ ✔
        if (question.question.has_answered) {
          return 'success';
        }
        if (question_index <= current_index) {
          return 'primary';
        }
        return 'danger'
      },
      getCurrentStyle(questions, question, question_index, current_index) {
        // ⓘ ✘ ✔
        if (question_index <= current_index) {
          return {
            textDecoration: 'none'
          };
        }
        return {
          textDecoration: 'line-through'
        };
      },
      goPrevious() {
        let vm = this;
        vm.openLoadingContained("#button-with-loading")
        if ((vm.current_question_index != 0)) vm.current_question_index--;
        vm.closeLoadingContained("#button-with-loading > .con-vs-loading")
      },
      goNext() {
        let vm = this;
        vm.openLoadingContained("#button-with-loading2");
        let current_question = vm.dataModel.questions[vm.current_question_index];
        // if (!current_question.question.has_answered) {
        //   window.helper.showMessage('danger', vm, vm.$ml.get('should_ans'));
        // } else {
          let question_length = vm.dataModel.questions.length - 1;
          if (question_length > vm.current_question_index) vm.current_question_index++;
        // }
        vm.closeLoadingContained("#button-with-loading2 > .con-vs-loading")
      },
      prepareData(request_data) {
        // request_data.questions[0].question.answers

        let exams = [];

        _.each(request_data.questions, (questionItem, key) => {

          _.each(questionItem.question.answers, (answerItem, key) => {
            if (questionItem.question.type == 'text') answerItem.is_correct = 1
            if (answerItem.answer_value) {
              exams.push({
                id: questionItem.id,
                answer: questionItem.question.type == 'text' ? answerItem.answer_value : answerItem.id,
                is_correct: answerItem.is_correct ? 1 : 0
              })
            }
          });
        });
        exams = _.filter(exams, function (o) {
          if (o.is_correct) return o;
        });
        return {
          id: request_data.id,
          questions: exams
        }
      },
      finishExam() {
        let vm = this;
        // vm.openLoadingContained("#button-with-loading3")
        let request_data = vm.dataModel;
        let data_to_send = vm.prepareData(request_data);
        console.log(vm.dataModel.questions.length , data_to_send.questions.length)
        if (vm.dataModel.questions.length != data_to_send.questions.length) {
          window.helper.showMessage('danger', vm, 'عليك الاجابة على السؤال اولا');
        }
        return;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.UPDATE_STUDENT_EXAM, data_to_send)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                window.ls.clearAllStorage('current_exam');
                vm.$router.push({name: 'student_exam_result', params: {id: request_data.id}});
                return null;
              }
              location.reload()
              vm.closeLoadingContained("#button-with-loading3 > .con-vs-loading");
            }).catch((error) => {
            vm.closeLoadingContained("#button-with-loading3 > .con-vs-loading");
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      },
      examTimer(start, duration) {
        start = this.$moment(start, 'YYYY-MM-DD HH:mm')
        let end_at = start.add(duration, 'minutes')
        return this.diffTwoDates(end_at.format('YYYY-MM-DD HH:mm'), new Date())
      },
      diffTwoDates(start, end) {
        start = this.$moment(start, 'YYYY.MM.DD HH:mm')
        end = this.$moment(end, 'YYYY.MM.DD HH:mm')
        let seconds = start.diff(end, 'seconds');
        if (seconds < 0) {
          return {
            minutes: 0,
            seconds: 0,
            _seconds: 0,
          }
        }
        return this.fancyTimeFormat(seconds)
      },
      fancyTimeFormat(time) {
        // // Hours, minutes and seconds
        // var hrs = ~~(time / 3600);
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;
        //
        // var ret = "";
        //
        // // if (hrs > 0) {
        // //   ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        // // }
        //
        // ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        // ret += "" + secs;
        return {
          minutes: mins,
          seconds: secs,
          _seconds: time,
        };
      },
      openLoadingContained(selector) {
        this.loading = true;
        this.$vs.loading({
          background: '#000',
          color: '#fff',
          container: selector,
          scale: 0.45
        })
      },
      closeLoadingContained(selector) {
        setTimeout(() => {
          this.loading = false;
          this.$vs.loading.close(selector)
        }, 1000);
      },
    },
  }
</script>

<style lang="scss">
  [id^=radio-] {
    display: none;
  }

  [id^=radio-] + label {
    display: inline-block;
    vertical-align: middle;
    font-size: 50px;
    color: #555;
    cursor: pointer;
    filter: grayscale(100%);
  }

  [id^=radio-]:checked + label {
    color: tomato;
    cursor: text;
    filter: grayscale(0);
  }

</style>
