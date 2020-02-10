<template>
  <div>

    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="vx-row  text-right">
          <div class="vx-col md:w-1/4 mb-base">
            <label class="vs-input--label">{{$ml.get('teachers')}}</label>
            <multiselect v-model="selectedTeacher" :options="teachers" open-direction="bottom"
                         :close-on-select="true"
                         :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                         :custom-label="customStudentLabel"
                         track-by="id" :preselect-first="true">
            </multiselect>
            <span class="span-text-validation text-danger text-bold" id="student_id_error"></span>
            <span class="span-text-validation text-danger text-bold" id="student_term_id_error"></span>
          </div>
          <div class="vx-col w-full mb-base btn-group d-print-none" dir="ltr">
            <vs-button @click="getAllTeacherComplaints()">
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
                <vs-table stripe :data="complaints">
                  <template slot="header">
                    <h3>

                    </h3>
                  </template>
                  <template slot="thead">
                    <vs-th width="220px">
                      {{$ml.get('father_name')}}
                    </vs-th>
                    <vs-th>{{$ml.get('text')}}</vs-th>
                    <vs-th>{{$ml.get('teachers')}}</vs-th>
                    <vs-th>{{$ml.get('end_at')}}</vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">

                      <vs-td class="text-right">
                        <slot v-if="tr.parent">
                          {{tr.parent.father_name}}
                        </slot>
                      </vs-td>
                      <vs-td class="text-right">
                        {{tr.text}}
                      </vs-td>
                      <vs-td class="text-right">
                        <slot v-if="tr.teacher">
                          {{tr.teacher.name}}
                        </slot>
                      </vs-td>
                      <vs-td class="text-right">
                        {{tr.end_at}}
                      </vs-td>


                    </vs-tr>
                  </template>
                </vs-table>

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

        complaints: [],
        students: [],
        selectedStudent: null,
        teachers: [],
        selectedTeacher: null,
        isMulti: false,
      }
    },
    mounted() {
      let vm = this;
      vm.getAllTeachers()
      vm.getAllTeacherComplaints()
    },
    watch: {
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
      getAllTeachers() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHERS )
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
      getAllTeacherComplaints() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let teacher_id = vm.selectedTeacher ? vm.selectedTeacher.id : '';
        // let class_room_id = vm.selectedClassRooms ? vm.selectedClassRooms.id : -1;
        // let student_term_id = vm.selectedStudent ? vm.selectedStudent.student_term.id : -1;

        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_PARENTS_COMPLAINTS, {
            params: {
              type: 'complaint',
              teacher_id : teacher_id ,
              // class_room_id: class_room_id,
              // student_term_id: student_term_id,
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.complaints = response.data.complaints.data;
                return
              }
              vm.complaints = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.complaints = [];
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
