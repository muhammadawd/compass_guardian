<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('teacher_leave')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('teachers')}} <span class="star">*</span></label>
              <multiselect v-model="selectedTeacher" :options="teachers" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="true" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="teacher_id_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <label class="vs-input--label">{{$ml.get('type')}} <span class="star">*</span></label>
              <vs-select class="w-full" v-model="dataModel.type">
                <vs-select-item value="leave" :text="$ml.get('leave')"></vs-select-item>
                <vs-select-item value="vacancy" :text="$ml.get('vacancy')"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="type_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('start_date')}} <span class="star">*</span></label>
              <flat-pickr class="w-full" :config="timeConfig" :label="$ml.get('start_date')"
                          v-model="dataModel.start_date"></flat-pickr>
              <span class="span-text-validation text-danger text-bold" id="start_date_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('end_date')}} <span class="star">*</span></label>
              <flat-pickr class="w-full" :config="timeConfig" :label="$ml.get('end_date')"
                          v-model="dataModel.end_date"></flat-pickr>
              <span class="span-text-validation text-danger text-bold" id="end_date_error"></span>
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
      this.getAllTeachers();
    },
    methods: {
      getAllTeachers() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHERS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
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
        request_data.teacher_id = vm.selectedTeacher ? vm.selectedTeacher.id : null;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_TEACHER_LEAVES, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'teacher_leave'});
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
