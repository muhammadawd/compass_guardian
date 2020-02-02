<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('add_teacher_exams')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/5 mb-base">
              <vs-input class="w-full" :label="$ml.get('exam_period')" v-model="dataModel.exam_period"/>
              <span class="span-text-validation text-danger text-bold" id="exam_period_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('date')}}</label>
              <flat-pickr class="w-full" :config="timeConfig" :label="$ml.get('date')"
                          v-model="dataModel.date"></flat-pickr>
              <span class="span-text-validation text-danger text-bold" id="date_error"></span>
            </div>
            <div class="vx-col md:w-1/2 mb-base">
              <label class="vs-input--label">{{$ml.get('subjects')}}</label>
              <multiselect v-model="selectedSubjects" :options="subjects" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="subject_id_error"></span>
            </div>
            <div class="vx-col md:w-1/2 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}</label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true"
                           open-direction="bottom"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/2 mb-base">
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
          </div>


          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-table ref="table" multiple v-model="selected" :data="[]">

                <template slot="thead">
                  <vs-th>{{$ml.get('name')}}</vs-th>
                  <vs-th></vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td class="text-right">
                      {{tr.name}}
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
        selected: [],
        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,
        loading: false
      }
    }, watch: {
      selectedStage: function (newStage, oldStage) {
        // if (oldStage != null) {
        this.selectedClassRooms = null;
        this.classRooms = newStage.class_rooms;
        this.getAllStudents();
        // }
      }
    },
    computed: {},
    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      this.findId = auth_data.user.id;
      this.findTeacher()
      this.getAllStages()
    },
    methods: {
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
