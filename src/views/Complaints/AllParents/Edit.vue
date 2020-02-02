<!-- =========================================================================================
    File Name: KnowledgeBase.vue
    Description: Knowledge Base Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('edit_parent_complaint')}}</span>
          </vs-alert>

          <div class="vx-row">
            <div class="vx-col md:w-1/6 mb-base">

              <label class="vs-input--label">{{$ml.get('type')}}</label>
              <vs-select  class="w-full"  v-model="dataModel.type">
                <vs-select-item value="complaint" :text="$ml.get('complaint')"></vs-select-item>
                <vs-select-item value="proposal" :text="$ml.get('proposal')"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="type_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">

              <label class="vs-input--label">{{$ml.get('teachers')}}</label>
              <multiselect v-model="dataModel.teacher" :options="teachers" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="true" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="teacher_id_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('end_date')}}</label>
              <flat-pickr class="w-full" :label="$ml.get('end_date')"
                          v-model="dataModel.end_at"></flat-pickr>
              <span class="span-text-validation text-danger text-bold" id="end_at_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('rate')}}</label>
              <h3>{{dataModel.rate ? dataModel.rate : 0}}/5</h3>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col   mb-base">
              <label class="vs-input--label">{{$ml.get('text')}}</label>
              <h3>{{dataModel.text}}</h3>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading" @click="editComplaint()"
                         class="vs-con-loading__container vs-button-dark text-bold" type="filled" vslor="primary">
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
    data() {
      return {
        findId: '',
        loading: false,
        dataModel: {},
        teachers: [],
        selectedTeacher: null,
      }
    },
    computed: {},
    components: {Multiselect, flatPickr},
    mounted() {
      this.findId = this.$route.params.id;
      this.findComplaint();
      this.getAllTeachers();
    },
    methods: {
      customLabel({name}) {
        return `${name}`
      },
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
      findComplaint() {

        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_PARENTS_COMPLAINTS + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.complaint
                vm.selectedTeacher = vm.dataModel.teacher;
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
      editComplaint() {
        let vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.teacher_id = vm.dataModel.teacher ? vm.dataModel.teacher.id : '';
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_PARENTS_COMPLAINTS, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'parents_complaints'});
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
