<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">
                {{$ml.get('your_result_p')}}
            </span>
          </vs-alert>
          <div class="vx-row" v-if="dataModel.exam">
            <div class="vx-col w-full mb-base">
              <div class="vx-card bg-primary-gradient p-0 m-0 text-center"><!---->
                <div class="vx-card__collapsible-content vs-con-loading__container">
                  <div class="vx-card__body m-0">
                    <h3 class="text-bold text-right">
                      {{dataModel.exam.subject.translated.title}}<br>
                      <span class="text-info"
                            style="font-size: 18px">{{dataModel.exam.name}}</span>
                      <br>
                      <span class="mt-2" style="font-size: 14px">{{dataModel.exam.created_at}}</span>
                    </h3>
                    <br>
                    <div class="vx-row text-center " style="background: #fff;width: 250px">
                      <div class="vx-col w-full text-center" dir="ltr">
                        <h1 class="text-bold mt-3">{{parseFloat(dataModel.degree).toFixed(2)}} /
                          {{parseFloat(dataModel.exam ? dataModel.exam.degree : 0
                          ).toFixed(2)}}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </vx-card>

        <vx-card class="text-right mt-3 mb-4" v-if="dataModel.questions" style="background: #efefef">
          <div class="vx-row">
            <div class="vx-col w-full mb-base" v-for="(que , current_question_index) in dataModel.questions" :key="current_question_index">
              <h1 class="text-bold mb-3">{{dataModel.questions[current_question_index].question.name}}</h1>
              <div class="vx-row" v-if="dataModel.questions[current_question_index].question.type == 'mcq'">
                <div class="vx-col w-full mb-base">
                  <div class="vx-row">
                    <div class="vx-col md:w-1/4 mb-base"
                         v-for="(answer,key) in dataModel.questions[current_question_index].question.answers"
                         :key="key">
                      <label class="vs-input--label" :for="`check-${answer.id}${key}`" style="cursor: pointer">
                        <input type="checkbox" :id="`check-${answer.id}${key}`"
                               @change="updateStorageModel(dataModel.questions[current_question_index].question,dataModel.questions[current_question_index].question.answers[key])"
                               v-model="dataModel.questions[current_question_index].question.answers[key].is_correct"
                               value="1">
                        <div class="text-center mt-2"
                             v-if="dataModel.questions[current_question_index].question.answers[key].file_path"
                             style="box-shadow: 1px 2px 12px #aaa;border-radius: 90px 0 90px;width:100%;height: 350px;overflow: hidden;display: inline-block;background: #fff">
                          <p class="text-center text-bold mt-2 text-primary" style="font-size: 15px">
                            {{dataModel.questions[current_question_index].question.answers[key].answer_value}}</p>
                          <img
                            :src="dataModel.questions[current_question_index].question.answers[key].file_path.path"
                            style="margin: 20px auto;vertical-align: middle;width:60%;max-height: 400px" alt="">
                        </div>
                        <div class="text-center mt-2 p-3"
                             v-if="!dataModel.questions[current_question_index].question.answers[key].file_path"
                             style="box-shadow: 1px 2px 12px #aaa;border-radius: 10px;width:100%;background: #fff">
                          <p class="text-center text-bold mt-2 text-info" style="font-size: 18px">
                            {{dataModel.questions[current_question_index].question.answers[key].answer_value}}</p>
                        </div>
                      </label>
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

              <vs-divider/>
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
        current_question_index: 0,
        loading:
          false,
      }
    },
    computed: {},
    mounted() {
      this.findStudentExams();
    },
    methods: {
      findStudentExams() {
        let vm = this;
        let id = vm.$route.params.id;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_STUDENT_EXAM_ID + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.studentExam;
                console.log(vm.dataModel)
                return
              }
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      },
      openLoadingContained() {
        this.loading = true;
        this.$vs.loading({
          background: '#000',
          color: '#fff',
          container: "#button-with-loading",
          scale: 0.45
        })
      },
      closeLoadingContained() {
        setTimeout(() => {
          this.loading = false;
          this.$vs.loading.close("#button-with-loading > .con-vs-loading")
        }, 100);
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

  [id^=check-] {
    display: none;
  }

  [id^=check-] ~ div {
    filter: grayscale(100%);
  }

  [id^=check-]:checked ~ div {
    filter: grayscale(0);
    border: 2px dashed #1f89e0;
  }
</style>
