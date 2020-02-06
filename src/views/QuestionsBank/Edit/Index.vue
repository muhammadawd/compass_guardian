<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('edit_questions_bank')}}</span>
          </vs-alert>
          <div class="vx-row">
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
              <label class="vs-input--label">{{$ml.get('question_type')}}
                <span class="star">*</span>
              </label>
              <vs-select class="w-full" v-model="dataModel.type" :disabled="true"
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
              <vs-textarea v-model="dataModel.name" rows="5"></vs-textarea>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
              <div class="vx-row">
                <div class="vx-col md:w-1/4">
                  <label class="vs-input--label">{{$ml.get('image')}}</label>
                  <input type="file" :ref="`file`" class="vs-inputx vs-input--input normal"
                         v-on:change="handleFileQuestionUpload()">
                </div>
                <div class="vx-col w-full mb-base">
                  <a v-if="dataModel.file_path" class="text-bold" :href="dataModel.file_path.path" target="_blank">
                    {{$ml.get('show_image')}}</a>
                </div>
              </div>
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
                  <div class="vx-col md:w-1/4 mb-base" style="position: relative"
                       v-for="(answer,key) in dataModel.answers"
                       :key="key">
                    <label class="vs-input--label">
                      <input type="checkbox" value="1" v-model="dataModel.answers[key].is_correct">
                      {{$ml.get('answer')}}<span class="star">*</span>
                    </label>
                    <vs-input class="w-full" v-model="dataModel.answers[key].value"></vs-input>
                    <input type="file" :ref="`image`+key" class="vs-inputx vs-input--input normal"
                           v-on:change="handleFileUpload(key)">
                    <vs-button color="danger" type="filled" icon="delete" @click="deleteRow(key)"
                               style="position: absolute;left: 0;top:22px;"></vs-button>
                    <div class="text-center mt-2" v-if="dataModel.answers[key].file_path"
                         style="box-shadow: 1px 2px 12px #aaa;border-radius: 90px 0 90px;height: 350px;overflow: hidden;display: inline-block;background: ">
                      <img :src="dataModel.answers[key].file_path.path"
                           style="margin: 40px auto;vertical-align: middle;width:60%;max-height: 400px" alt="">
                    </div>
                    <span class="span-text-validation text-danger text-bold" :id="`answers.${key}.value_error`"></span>
                    <span class="span-text-validation text-danger text-bold"
                          :id="`answers.${key}.is_correct_error`"></span>
                    <span class="span-text-validation text-danger text-bold" :id="`answers.${key}.file_error`"></span>
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
                         @click="editQuestion" type="filled" vslor="primary">
                {{$ml.get('edit')}}
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
        findId: null,
        findModelId: null,
        loading: false
      }
    },
    computed: {},
    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      this.findModelId = this.$route.params.id;
      this.findId = auth_data.user.id;
      this.findTeacher()
      this.getAllStages()
      // this.getAllSubjects()
      this.findQuestionBank()
    },
    methods: {
      handleFileQuestionUpload() {
        let vm = this;
        vm.dataModel.file = vm.$refs.file.files[0];
      },
      handleFileUpload(key) {
        let vm = this;
        vm.dataModel.answers[key].file = vm.$refs[`image${key}`][0].files[0];
      },
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
        // this.dataModel.answers = []
        console.log(this.dataModel.type)
        // if (this.dataModel.type == 'text') {
        //   this.dataModel.answers = [{
        //     value: '',
        //     is_correct: 1
        //   }];
        // }
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
      findQuestionBank() {

        let vm = this;
        let id = vm.findModelId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_QUESTION + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                console.log(response.data.question)
                vm.dataModel = response.data.question
                if (response.data.question.type == 'true_false') {
                  let answers = response.data.question.answers;
                  let current = '';
                  answers = _.each(answers, (item, key) => {
                    if (item.is_correct == '1') return current = item.value
                  })
                  console.log(answers)
                  vm.dataModel.true_false = current
                }

                vm.selectedSubjects = response.data.question.subject
                vm.selectedStage = response.data.question.stage
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
      editQuestion() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.stage_id = vm.selectedStage ? vm.selectedStage.id : '';
        request_data.subject_id = vm.selectedSubjects ? vm.selectedSubjects.id : '';
        let form_data = new FormData();
        // let answers = request_data.answers;
        // delete request_data.answers;
        $.each(request_data, (key, value) => {
          form_data.append(key, value ? value : '')
        })

        $.each(request_data.answers, (i, answer) => {
          form_data.append(`answers[${i}][file]`, answer.file ? answer.file : '');
          form_data.append(`answers[${i}][value]`, answer.value ? answer.value : '');
          form_data.append(`answers[${i}][is_correct]`, answer.is_correct ? 1 : 0);
        })

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_QUESTION, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then((response) => {
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
