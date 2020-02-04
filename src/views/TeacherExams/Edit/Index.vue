<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('edit_teacher_exams')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('subjects')}}</label>
              <multiselect v-model="selectedSubjects" :options="subjects" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="subject_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}</label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true"
                           open-direction="bottom" @select="getQuestions()"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('class_room')}}</label>
              <multiselect v-model="selectedClassRooms" :options="classRooms" :multiple="true"
                           open-direction="bottom"
                           :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="class_room_id_error"></span>
              <span class="span-text-validation text-danger text-bold" id="class_room_ids_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <vs-input class="w-full" :label="$ml.get('name')" v-model="dataModel.name"/>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <vs-input class="w-full" :label="$ml.get('exam_period')" v-model="dataModel.duration"/>
              <span class="span-text-validation text-danger text-bold" id="duration_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <label class="vs-input--label">{{$ml.get('date')}}</label>
              <flat-pickr class="w-full" :config="timeConfig" :label="$ml.get('date')"
                          v-model="dataModel.date"></flat-pickr>
              <span class="span-text-validation text-danger text-bold" id="date_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <label class="vs-input--label">{{$ml.get('status')}}</label>
              <vs-select class="w-full" v-model="dataModel.status_id">
                <vs-select-item v-for="(state,key) in status" :value="state.id" :key="key"
                                :text="state.translated.title"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="status_id_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <vs-input class="w-full" :label="$ml.get('question_number')" v-model="dataModel.question_number"/>
              <span class="span-text-validation text-danger text-bold" id="question_number_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <vs-input class="w-full" :label="$ml.get('degree')" v-model="dataModel.degree"/>
              <span class="span-text-validation text-danger text-bold" id="degree_error"></span>
            </div>
            <div class="vx-col w-full mb-base">
              <vs-textarea class="w-full" :label="$ml.get('notes')" v-model="dataModel.notes"/>
              <span class="span-text-validation text-danger text-bold" id="notes_error"></span>
            </div>
          </div>


          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-table ref="table" multiple v-model="selected" :data="questions">

                <template slot="thead">
                  <vs-th>{{$ml.get('question')}}</vs-th>
                  <vs-th>{{$ml.get('type')}}</vs-th>
                  <vs-th>{{$ml.get('question_degree')}}</vs-th>
                  <vs-th></vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="text-right">
                      {{tr.name}}
                    </vs-td>
                    <vs-td class="text-right">
                      {{$ml.get(tr.type)}}
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input v-model="questions[indextr].degree"/>
                    </vs-td>
                  </vs-tr>
                </template>
              </vs-table>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="editExam" type="filled" vslor="primary">
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
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  export default {
    components: {
      Multiselect, flatPickr
    },
    data() {
      return {
        dataModel: {},
        timeConfig: {
          enableTime: true,
          time_24hr: true
        },
        teacher: {},
        q_types: ['mcq', 'true_false', 'text'],
        subjects: [],
        selectedSubjects: null,
        status: [],
        selected: [],
        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,
        findId: null,
        findModelId: null,
        questions: [],
        loading: false
      }
    }, watch: {
      selectedStage: function (newStage, oldStage) {
        if (oldStage != null) {
          this.selectedClassRooms = null;
          this.classRooms = newStage.class_rooms;
        }
      }
    },
    computed: {},
    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      this.findId = auth_data.user.id;
      this.findModelId = this.$route.params.id;
      this.findExam()
      this.findTeacher()
      this.getAllStages()
      this.getAllStatus()
    },
    methods: {
      customLabel({translated}) {
        return `${translated.title}`
      },
      customStageLabel({translated}) {
        return `${translated.title}`
      },
      getAllStatus() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STATUS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.status = response.data.status.exam_status;
                return
              }
              vm.status = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.status = [];
          });
        } catch (e) {
          console.log(e)
        }
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
        let vm = this;
        console.log(vm.dataModel.question_type)
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
      findExam() {

        let vm = this;
        let id = vm.findModelId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_EXAM + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.exam
                vm.selectedSubjects = response.data.exam.subject
                vm.selectedStage = response.data.exam.stage
                vm.selectedClassRooms = response.data.exam.classrooms

                let selected_question = response.data.exam.questions;
                vm.getQuestions(selected_question)

                // console.log(selected_question)

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
      getAllQuestions(filters = {}, selected_questions) {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_QUESTION, {
            params: filters
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.questions = response.data.questions.data;


                // console.log(vm.questions)
                let selected_ids = _.map(selected_questions, 'question_id');
                _.each(vm.questions, function (o) {
                  if (selected_ids.includes(o.id)) {
                    vm.selected.push(o)
                  }
                });

                _.transform(vm.questions, function (result, value, key) {
                  value.question_id = value.id;
                  let r = _.find(selected_questions, ['question_id', value.id]);
                  // console.log(r)
                  if (r) value.degree = r.degree

                  result[key] = value;
                }, {});


                return
              }
              vm.questions = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.questions = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      getQuestions(selected_questions = []) {
        setTimeout(() => {
          let stage_id = this.selectedStage ? this.selectedStage.id : '';
          let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));

          this.getAllQuestions({
            stage_id: stage_id,
            teacher_id: auth_data.user.id
          }, selected_questions)
        }, 100)
      },
      editExam() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.subject_id = vm.selectedSubjects ? vm.selectedSubjects.id : '';
        request_data.stage_id = vm.selectedStage ? vm.selectedStage.id : '';
        let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
        request_data.teacher_id = auth_data.user.id;
        request_data.classroom_ids = vm.selectedClassRooms ? _.map(vm.selectedClassRooms, 'id') : [];
        request_data.questions = vm.selected;

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_EXAM, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'teacher_exams'});
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
