<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('student_leave')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('students')}}</label>
              <multiselect v-model="selectedStudent" :options="students" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="true" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="student_term_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('teachers')}}</label>
              <multiselect v-model="selectedTeacher" :options="teachers" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="true" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="teacher_id_error"></span>
            </div>
            <div class="vx-col md:w-1/5 mb-base">

              <label class="vs-input--label">{{$ml.get('type')}}</label>
              <vs-select  class="w-full"  v-model="dataModel.type">
                <vs-select-item value="leave" :text="$ml.get('leave')"></vs-select-item>
                <vs-select-item value="vacation" :text="$ml.get('vacation')"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="type_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('date')}}</label>
              <flat-pickr class="w-full" :config="timeConfig" :label="$ml.get('date')"
                          v-model="dataModel.date"></flat-pickr>
              <span class="span-text-validation text-danger text-bold" id="date_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('relation')" v-model="dataModel.relation"/>
              <span class="span-text-validation text-danger text-bold" id="relation_error"></span>
            </div>
<!--            <div class="vx-col md:w-1/3 mb-base">-->
<!--              <label class="vs-input&#45;&#45;label">{{$ml.get('end_date')}}</label>-->
<!--              <flat-pickr class="w-full" :config="timeConfig" :label="$ml.get('end_date')"-->
<!--                          v-model="dataModel.end_date"></flat-pickr>-->
<!--              <span class="span-text-validation text-danger text-bold" id="end_date_error"></span>-->
<!--            </div>-->
            <div class="vx-col md:w-1/2 mb-base">
              <vs-textarea class="w-full" :label="$ml.get('notes')"
                           v-model="dataModel.notes"/>
              <span class="span-text-validation text-danger text-bold" id="notes_error"></span>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="addLeave" type="filled" vslor="primary">
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
        subjects: [],
        selectedSubjects: [],
        students: [],
        selectedStudent: null,
        teachers: [],
        selectedTeacher: null,
        loading: false,
        timeConfig: {
          enableTime: true,
          time_24hr: true
        },
      }
    },
    computed: {},
    mounted() {
      this.getAllStudents();
      this.getAllTeachers();
    },
    methods: {
      getAllStudents() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENTS, {
            params: {
              student_term: 1
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.students = response.data.students.data;
                return
              }
              vm.students = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.students = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      getAllTeachers() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHERS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.teachers = response.data.teachers.data;
                return
              }
              vm.teachers = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.teachers = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      customLabel({name}) {
        return `${name}`
      },
      addLeave() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.student_term_id = vm.selectedStudent ? vm.selectedStudent.student_term.id : null;
        request_data.teacher_id = vm.selectedTeacher ? vm.selectedTeacher.id : null;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.CREATE_STUDENT_LEAVES, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'student_leave'});
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
