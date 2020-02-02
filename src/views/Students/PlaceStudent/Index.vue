<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <vx-card class="text-center cursor-pointer">

          <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search
                    :data="students">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

              <div class="flex flex-wrap-reverse  items-center">

                <div class="vx-row  text-right">
                  <div class="vx-col md:w-1/2 mb-base">
                    <label class="vs-input--label">{{$ml.get('stages')}}</label>
                    <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true" open-direction="bottom"
                                 :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                                 :custom-label="customStageLabel"
                                 track-by="id" :preselect-first="true">
                    </multiselect>
                    <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
                  </div>
                  <div class="vx-col md:w-1/2 mb-base">
                    <label class="vs-input--label">{{$ml.get('class_room')}}</label>
                    <multiselect v-model="selectedClassRooms" :options="classRooms" :multiple="isMulti" open-direction="bottom"
                                 :close-on-select="true"
                                 :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                                 :custom-label="customStageLabel"
                                 track-by="id" :preselect-first="true">
                    </multiselect>
                    <span class="span-text-validation text-danger text-bold" id="class_room_id_error"></span>
                    <span class="span-text-validation text-danger text-bold" id="class_room_ids_error"></span>
                  </div>
                  <div class="vx-col md:w-1/1 mb-base">
                    <!-- ADD NEW -->
                    <vs-button color="primary" class="text-bold m-4" :disabled="selected.length != 0"
                               @click="addStudentClass()">
                      {{$ml.get('place_auto_student')}}
                    </vs-button>
                    <vs-button @click="addStudentClass()" class="text-bold m-4" :disabled="selected.length == 0">
                      {{$ml.get('place_selected_student')}}
                    </vs-button>
                  </div>
                </div>


              </div>

              <!-- ITEMS PER PAGE -->
              <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 ml-4">
                <div dir="ltr"
                     class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                  <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ students.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : students.length }} of {{ students.length }}</span>
                  <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4"/>
                </div>
                <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
                <vs-dropdown-menu>

                  <vs-dropdown-item @click="itemsPerPage=5">
                    <span>5</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage=10">
                    <span>10</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage=15">
                    <span>15</span>
                  </vs-dropdown-item>
                  <vs-dropdown-item @click="itemsPerPage=20">
                    <span>20</span>
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </div>

            <span class="span-text-validation text-danger text-bold" id="student_ids_error"></span>

            <template slot="thead">
              <vs-th>{{$ml.get('name')}}</vs-th>
              <vs-th>{{$ml.get('age')}}</vs-th>
              <vs-th>{{$ml.get('father_name')}}</vs-th>
              <vs-th>{{$ml.get('father_phone')}}</vs-th>
              <vs-th>{{$ml.get('class_room')}}</vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td class="text-right">
                  {{tr.name}}
                </vs-td>
                <vs-td class="text-right">
                  {{tr.age}}
                </vs-td>
                <vs-td class="text-right">
                  <slot v-if="tr.parent">
                    {{tr.parent.father_name}}
                  </slot>
                </vs-td>
                <vs-td class="text-right">
                  <slot v-if="tr.parent">
                    {{tr.parent.father_phone}}
                  </slot>
                </vs-td>
                <vs-td class="text-right">
                  <slot v-if="tr.student_term">
                    {{tr.student_term.class_room.translated.title}}
                  </slot>
                  <slot v-if="!tr.student_term">
                    -
                  </slot>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
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
        students: [],
        selected: [],
        itemsPerPage: 20,
        isMounted: false,

        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,
        isMulti: true,

      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllStudents()
      this.getAllStages()
    },
    computed: {
      currentPage() {
        if (this.isMounted) {
          return this.$refs.table.currentx
        }
        return 0
      },
    },
    watch: {
      selected: function (n, o) {
        this.selectedClassRooms = null;
        n.length > 0 ? this.isMulti = false : this.isMulti = true;
      },
      selectedStage: function (newStage, oldStage) {
        // if (oldStage != null) {
        this.selectedClassRooms = null;
        this.classRooms = newStage.class_rooms;
        this.getAllStudents();
        // }
      }
    },
    methods: {
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
      getAllStudents() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let stage_id = vm.selectedStage ? vm.selectedStage.id : -1;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENTS, {
            params: {
              stage_id: stage_id
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
      addStudentClass() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let stage_id = vm.selectedStage ? vm.selectedStage.id : null;


        let room_ids = vm.selectedClassRooms ? (_.isArray(vm.selectedClassRooms) ? _.map(vm.selectedClassRooms, 'id') : [vm.selectedClassRooms.id]) : [];
        let ids = vm.selected;
        ids = _.map(ids, 'id');
        $('.span-text-validation').text('');

        let request_data = {
          student_ids: ids,
          stage_id: stage_id,
          class_room_ids: room_ids
        };

        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_STUDENT_CLASS, request_data)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
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
      deleteSelected() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure'),
          acceptText: this.$ml.get('yes'),
          cancelText: this.$ml.get('no'),
          accept: this.acceptAlert
        })
      },
      acceptAlert() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let ids = vm.selected;
        ids = _.map(ids, 'id');
        try {
          window.serviceAPI.API().post(window.serviceAPI.DELETE_STUDENTS, {
            ids: ids
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.students = window.helper.deleteMulti(ids, vm.students)
                location.reload()
              }
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      },
      deleteSingle(id) {
        let vm = this;
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure'),
          acceptText: this.$ml.get('yes'),
          cancelText: this.$ml.get('no'),
          accept: () => {
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().post(window.serviceAPI.DELETE_STUDENTS, {
            ids: [id]
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.students = window.helper.deleteMulti([id], vm.students)
                location.reload()
              }
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
        }
        })
      },
    },
  }
</script>

<style lang="scss">
  #data-list-thumb-view {
    .vs-con-table {

      .vs-table--header {
        display: flex;
        flex-wrap: wrap-reverse;
        margin-left: 1.5rem;
        margin-right: 1.5rem;

        > span {
          display: flex;
          flex-grow: 1;
        }

        .vs-table--search {
          padding-top: 0;

          .vs-table--search-input {
            padding: 0.9rem 2.5rem;
            font-size: 1rem;

            & + i {
              left: 1rem;
            }

            &:focus + i {
              left: 1rem;
            }
          }
        }
      }

      .vs-table {
        border-collapse: separate;
        border-spacing: 0 1.3rem;
        padding: 0 1rem;


        tr {
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);

          td {
            padding: 10px;

            &:first-child {
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }

            &:last-child {
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }

            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: center;
              }

              .product-img {
                height: 110px;
              }
            }
          }

          td.td-check {
            padding: 20px !important;
          }
        }
      }

      .vs-table--thead {
        th {
          padding-top: 0;
          padding-bottom: 0;

          .vs-table-text {
            text-transform: uppercase;
            font-weight: 600;
          }
        }

        th.td-check {
          padding: 0 15px !important;
        }

        tr {
          background: none;
          box-shadow: none;
        }
      }

      .vs-table--pagination {
        justify-content: center;
      }
    }
  }
</style>
