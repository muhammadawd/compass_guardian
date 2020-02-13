<template>
  <div>

    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="vx-row  text-right">
          <div class="vx-col md:w-1/4 mb-base">
            <label class="vs-input--label">{{$ml.get('stages')}}</label>
            <multiselect class="d-print-none" v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true"
                         open-direction="bottom"
                         :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                         :custom-label="customStageLabel"
                         track-by="id" :preselect-first="true">
            </multiselect>
            <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            <h6 class="hidden d-print-block">{{selectedStage ? selectedStage.translated.title : ''}}</h6>
          </div>
          <div class="vx-col md:w-1/4 mb-base">
            <label class="vs-input--label">{{$ml.get('class_room')}}</label>
            <multiselect class="d-print-none" v-model="selectedClassRooms" :options="classRooms" :multiple="isMulti" open-direction="bottom"
                         :close-on-select="true"
                         :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                         :custom-label="customStageLabel"
                         track-by="id" :preselect-first="true">
            </multiselect>
            <span class="span-text-validation text-danger text-bold" id="class_room_id_error"></span>
            <span class="span-text-validation text-danger text-bold" id="class_room_ids_error"></span>
            <h6 class="hidden d-print-block">{{selectedClassRooms ? selectedClassRooms.translated.title : ''}}</h6>
          </div>
          <div class="vx-col md:w-1/4 mb-base hidden">
            <label class="vs-input--label">{{$ml.get('students')}}</label>
            <multiselect class="d-print-none" v-model="selectedStudent" :options="students" open-direction="bottom"
                         :close-on-select="true"
                         :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                         :custom-label="customStudentLabel"
                         track-by="id" :preselect-first="true">
            </multiselect>
            <span class="span-text-validation text-danger text-bold" id="student_id_error"></span>
            <span class="span-text-validation text-danger text-bold" id="student_term_id_error"></span>
            <h6 class="hidden d-print-block">{{selectedStudent ? selectedStudent.name : ''}}</h6>
          </div>
          <div class="vx-col w-full mb-base btn-group d-print-none" dir="ltr">
            <vs-button @click="getAllStudents()">
              <i class="fa fa-search"></i>
            </vs-button>
            <vs-button color="warning" onclick="window.print()">
              <i class="fa fa-print"></i>
            </vs-button>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mt--7">
      <div class="row ">
        <div class="col">
          <div class="card shadow border-0">
            <div class="map-canvas"
                 style="min-height: 600px;">
              <div class="table-responsive">
                <vs-table stripe :data="students">
                  <template slot="header">
                    <h3>

                    </h3>
                  </template>
                  <template slot="thead">
                    <vs-th width="220px">
                      {{$ml.get('code')}}
                    </vs-th>
                    <vs-th>
                      {{$ml.get('name')}}
                    </vs-th>
                    <vs-th>
                      {{$ml.get('father_name')}}
                    </vs-th>
                    <vs-th>
                      {{$ml.get('father_phone')}}
                    </vs-th>
                    <vs-th>
                      {{$ml.get('username')}}
                    </vs-th>
                    <vs-th>
                      {{$ml.get('password')}}
                    </vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(item, indextr) in data">

                      <vs-td :data="item.code">
                        {{item.code}}
                      </vs-td>

                      <vs-td :data="item.name">
                        {{item.name}}
                      </vs-td>
                      <vs-td :data="item.parent.father_name">
                        {{item.parent.father_name}}
                      </vs-td>
                      <vs-td :data="item.parent.father_phone">
                        {{item.parent.father_phone}}
                      </vs-td>
                      <vs-td :data="item.username">
                        {{item.username}}
                      </vs-td>
                      <vs-td :data="item.password">
                        {{item.password}}
                      </vs-td>


                    </vs-tr>
                  </template>
                </vs-table>
                <!--                <table class="table vs-table&#45;&#45;content">-->
                <!--                  <thead>-->
                <!--                  <tr>-->
                <!--                    <th>{{$ml.get('teachers')}}</th>-->
                <!--                    <th>{{$ml.get('subjects')}}</th>-->
                <!--                    <th>{{$ml.get('homework')}}</th>-->
                <!--                    <th>{{$ml.get('scientific_attachments')}}</th>-->
                <!--                  </tr>-->
                <!--                  </thead>-->
                <!--                  <tbody>-->
                <!--                  <tr v-for="(item,key) in homeworks" :key="key">-->
                <!--                    <td>-->
                <!--                      <slot v-if="item.scientific_attachment">-->
                <!--                        {{item.scientific_attachment.teacher ? item.scientific_attachment.teacher.name : '-'}}-->
                <!--                      </slot>-->
                <!--                    </td>-->
                <!--                    <td>-->
                <!--                      <slot v-if="item.scientific_attachment">-->
                <!--                        {{item.scientific_attachment.subject ? item.scientific_attachment.subject.translated.title :-->
                <!--                        '-'}}-->
                <!--                      </slot>-->
                <!--                    </td>-->
                <!--                    <td>{{item.title}}</td>-->
                <!--                    <td>-->
                <!--                      <slot v-if="item.scientific_attachment">-->
                <!--                        {{item.scientific_attachment.translated.title}}-->
                <!--                      </slot>-->
                <!--                    </td>-->
                <!--                  </tr>-->
                <!--                  </tbody>-->
                <!--                </table>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'

  export default {
    data() {
      return {
        itemsPerPage: 20,
        isMounted: false,

        homeworks: [],
        students: [],
        selectedStudent: null,
        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,
        isMulti: false,
      }
    },
    mounted() {
      let vm = this;
      vm.getAllStages()
    },
    watch: {
      selectedStage: function (newStage, oldStage) {
        // if (oldStage != null) {
        this.selectedClassRooms = null;
        this.classRooms = newStage.class_rooms;
        // this.getAllStudents();
        // }
      },
      selectedClassRooms: function (newClass, oldClass) {
        // if (oldStage != null) {
        this.getAllStudents();
        // }
      }
    },
    components: {Multiselect},
    computed: {},
    methods: {
      customStageLabel({translated}) {
        return `${translated.title}`
      },
      customStudentLabel({name}) {
        return `${name}`
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
      getAllStudents() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let stage_id = vm.selectedStage ? vm.selectedStage.id : -1;
        let class_room_id = vm.selectedClassRooms ? vm.selectedClassRooms.id : -1;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENTS, {
            params: {
              stage_id: stage_id,
              class_room_id: class_room_id,
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
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
      getAllStudentHomework() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let stage_id = vm.selectedStage ? vm.selectedStage.id : -1;
        let class_room_id = vm.selectedClassRooms ? vm.selectedClassRooms.id : -1;
        let student_term_id = vm.selectedStudent ? vm.selectedStudent.student_term.id : -1;

        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_HOMEWORK_REPORT, {
            params: {
              stage_id: stage_id,
              class_room_id: class_room_id,
              student_term_id: student_term_id,
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.homeworks = response.data.homeworks;
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
    }
  }
</script>

<style scoped>

</style>
