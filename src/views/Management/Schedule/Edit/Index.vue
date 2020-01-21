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
            <span class="text-bold">{{$ml.get('edit_schedule')}}</span>
          </vs-alert>

          <div class="vx-row  text-right">
            <div class="vx-col md:w-1/3 mb-base">
              <vs-input class="w-full" :label="$ml.get('name')" v-model="dataModel.name"/>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}</label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('class_room')}}</label>
              <multiselect v-model="selectedClassRooms" :options="classRooms" :multiple="false"
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
              <div class="text-right">
                <vs-button type="border" color="primary" @click="addOption()">
                  <i class="fa fa-plus"></i>
                </vs-button>
              </div>
              <span class="span-text-validation text-danger text-bold" id="details_error"></span>
              <vs-table :data="dataModel.details">

                <template slot="thead">
                  <vs-th></vs-th>
                  <vs-th width="15%">{{$ml.get('day')}}</vs-th>
                  <vs-th width="10%">{{$ml.get('is_break')}}</vs-th>
                  <vs-th width="30%">{{$ml.get('subject_teacher')}}</vs-th>
                  <vs-th>{{$ml.get('start_time')}}</vs-th>
                  <vs-th>{{$ml.get('end_time')}}</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      <vs-button type="border" color="danger" @click="removeOption(indextr)">
                        <i class="fa fa-minus"></i>
                      </vs-button>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-select class="w-full" v-model="dataModel.details[indextr].day_id">
                        <vs-select-item v-for="(day , key) in days" :value="day.id" :key="key"
                                        :text="day.translated.title"></vs-select-item>
                      </vs-select>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'details.'+indextr+'.day_id_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">

                      <vs-select class="w-full" v-model="dataModel.details[indextr].is_break">
                        <vs-select-item value="1" :text="$ml.get('yes')"></vs-select-item>
                        <vs-select-item value="0" :text="$ml.get('no')"></vs-select-item>
                      </vs-select>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'details.'+indextr+'.is_break_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">

                      <multiselect v-model="dataModel.details[indextr].subject" :options="teachers" :multiple="false"
                                   group-values="subjects"
                                   group-label="name" :group-select="false" :placeholder="$ml.get('search')"
                                   track-by="id" label="title_ar"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                      </multiselect>

                      <span class="span-text-validation text-danger text-bold"
                            :id="'details.'+indextr+'.teacher_id_error'"></span>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'details.'+indextr+'.subject_id_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <flat-pickr class="vs-inputx vs-input--input normal w-full"
                                  v-model="dataModel.details[indextr].start_time"
                                  :config="timeConfig"></flat-pickr>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'details.'+indextr+'.start_time_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <flat-pickr class="vs-inputx vs-input--input normal w-full"
                                  v-model="dataModel.details[indextr].end_time"
                                  :config="timeConfig"></flat-pickr>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'details.'+indextr+'.end_time_error'"></span>
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
                         @click="addSchedule" type="filled" vslor="primary">
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
        dataModel: {
          name: '',
          class_room_id: '',
          details: []
        },

        days: [],

        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,

        teachers: [],
        loading: false,
        findId: null,
        timeConfig: {
          enableTime: true,
          noCalendar: true,
          dateFormat: "H:i:S",
          time_24hr: true
        },
      }
    },
    watch: {
      selectedStage: function (newStage, oldStage) {
        if (oldStage!=null){

          this.selectedClassRooms = null;
          this.classRooms = newStage.class_rooms;
        }
      }
    },
    computed: {},
    mounted() {
      $('table').removeClass('vs-table--tbody-table')
      this.findId = this.$route.params.id;
      this.findSchedule()
      this.getAllStages()
      this.getAllTeachers()
      this.getAllDays()
    },
    methods: {
      customStageLabel({translated}) {
        return `${translated.title}`
      },
      customLabel({translated}) {
        return `${translated.title}`
      },
      findSchedule() {

        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_SCHEDULE+ `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.schedule
                vm.selectedStage = response.data.schedule.class_room.stage
                vm.selectedClassRooms = response.data.schedule.class_room
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
      removeOption(id) {
        const vm = this;
        let data = vm.dataModel.details;
        vm.dataModel.details = _.remove(data, (o, i) => {
          return i == id;
        });
        vm.dataModel.details = data;
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
      addOption() {
        const vm = this;
        vm.dataModel.details.push(
          {
            day_id: 1,
            is_break: 0,
            subject_id: '',
            teacher_id: '',
            start_time: '',
            end_time: '',
          }
        );
      },
      prepareRequestData(model) {

        $.each(model.details, (i, row) => {
          console.log(row)
          if (row.subject) {
            if (row.subject.pivot){
              row.teacher_id = row.subject.pivot.teacher_id;
              row.subject_id = row.subject.pivot.subject_id;
            }
          }
        });
        return model;

      },
      addSchedule() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        let room_ids = vm.selectedClassRooms ? vm.selectedClassRooms.id : null;
        request_data.class_room_id = room_ids;

        vm.prepareRequestData(request_data)

        // let subject_ids = vm.selectedSubjects;
        // let ids = _.map(subject_ids, 'id');
        // request_data.subject_ids = ids;
        console.log(request_data)

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_SCHEDULE, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'management_schedule'});
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
      getAllDays() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_DAYS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.days = response.data.days;
                return
              }
              vm.days = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.days = [];
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
