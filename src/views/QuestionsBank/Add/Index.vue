<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('add_questions_bank')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('subjects')}}
                <span class="star">*</span>
              </label>
              <multiselect v-model="selectedSubjects" :options="subjects" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="subject_id_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}
                <span class="star">*</span>
              </label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true"
                           open-direction="bottom"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('question_type')}}
                <span class="star">*</span>
              </label>
              <vs-select class="w-full" v-model="dataModel.type"
                         @change="changeQuestionType()">
                <vs-select-item value="mcq" :text="$ml.get('mcq')"></vs-select-item>
                <vs-select-item value="true_false" :text="$ml.get('true_false')"></vs-select-item>
                <vs-select-item value="text" :text="$ml.get('_text')"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="type_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('question_degree')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.degree"/>
              <span class="span-text-validation text-danger text-bold" id="degree_error"></span>
            </div>
            <div class="vx-col w-full mb-base">
              <label class="vs-input--label">{{$ml.get('question')}}
                <span class="star">*</span>
              </label>
              <vs-textarea v-model="dataModel.name"
                           rows="5"></vs-textarea>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
            </div>
          </div>

          <span class="span-text-validation text-danger text-bold" id="answers_error"></span>
          <div class="vx-row" v-if="dataModel.type == 'mcq'">
            <div class="vx-col w-full mb-base">
              <div class="vx-col w-full mb-base">
                <vs-button color="primary" class="text-bold" type="filled" icon-pack="feather" icon="icon-plus"
                           @click="dataModel.answers.push({value: '',is_correct:0})">
                  {{$ml.get('add_answers')}}
                </vs-button>
                <br>
              </div>
              <div class="vx-col w-full mb-base">
                <div class="vx-row">
                  <div class="vx-col md:w-1/4 mb-base" style="position:relative;"
                       v-for="(answer,key) in dataModel.answers"
                       :key="key">
                    <label class="vs-input--label">
                      <input type="checkbox" value="1" v-model="dataModel.answers[key].is_correct">
                      {{$ml.get('answer')}} <span class="star">*</span>
                    </label>
                    <vs-input class="w-full" v-model="dataModel.answers[key].value"></vs-input>
                    <vs-button color="danger" type="filled" icon="delete" @click="deleteRow(key)"
                               style="position: absolute;left: 0;top:22px;"></vs-button>
                    <span class="span-text-validation text-danger text-bold" :id="`answers.${key}.value_error`"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="vx-row" v-if="dataModel.type == 'true_false'">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-select class="w-full" :label="$ml.get('answer')" v-model="dataModel.true_false"
                         @change="changeQuestionTruefalse()">
                <vs-select-item value="true" :text="$ml.get('true')"></vs-select-item>
                <vs-select-item value="false" :text="$ml.get('false')"></vs-select-item>
              </vs-select>
            </div>
          </div>

          <div class="vx-row" v-if="dataModel.type == 'text'">
            <div class="vx-col w-full mb-base" v-if="dataModel.answers[0]">
              <input type="hidden" v-model="dataModel.answers[0].is_correct" value="1">
              <vs-textarea v-model="dataModel.answers[0].value" :label="$ml.get('answer')" rows="5"></vs-textarea>
            </div>
          </div>


          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="addQuestion" type="filled" vslor="primary">
                {{$ml.get('add')}}
              </vs-button>
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
        dataModel: {
          type: 'mcq',
          answers: []
        },
        teacher: {},
        q_types: ['mcq', 'true_false', 'text'],
        subjects: [],
        selectedSubjects: null,
        stages: [],
        selectedStage: null,
        loading: false
      }
    },
    computed: {},
    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      this.findId = auth_data.user.id;
      this.findTeacher()
      this.getAllStages()
      // this.getAllSubjects()
    },
    methods: {
      deleteRow(key) {
        let vm = this;
        vm.dataModel.answers.splice(key, 1)
      },
      customLabel({translated}) {
        return `${translated.title}`
      },
      customStageLabel({translated}) {
        return `${translated.title}`
      },
      getAllStages() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STAGES)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.stages = response.data.stages.data;
                // vm.classRooms = vm.stages.length > 0 ? vm.stages[0].class_rooms : [];
                return
              }
              vm.stages = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.stages = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      changeQuestionType() {
        this.dataModel.answers = []
        console.log(this.dataModel.type)
        if (this.dataModel.type == 'text') {
          this.dataModel.answers = [{
            value: '',
            is_correct: 1
          }];
        }
      },
      changeQuestionTruefalse() {
        let vm = this;
        let tflag = 0;
        let fflag = 0;
        if (vm.dataModel.true_false == 'true') {
          tflag = 1;
          fflag = 0;
        } else {
          tflag = 0;
          fflag = 1;
        }
        vm.dataModel.answers[0] = {
          value: 'true',
          is_correct: tflag
        }
        vm.dataModel.answers[1] = {
          value: 'false',
          is_correct: fflag
        }
      },
      findTeacher() {

        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.teacher = response.data.teacher
                vm.subjects = response.data.teacher.subjects
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
      getAllSubjects() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.subjects = response.data.subjects.data;
                return
              }
              vm.subjects = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.subjects = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      addQuestion() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.stage_id = vm.selectedStage ? vm.selectedStage.id : '';
        request_data.subject_id = vm.selectedSubjects ? vm.selectedSubjects.id : '';

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_QUESTION, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'questions_bank'});
                return null;
              }
              vm.closeLoadingContained()
            }).catch((error) => {
            vm.closeLoadingContained()
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
</style>
