<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="vx-row  text-right">
          <div class="vx-col w-full mb-base btn-group d-print-none" dir="ltr">
<!--            <vs-button @click="getAllStudnetLeaves()">-->
<!--              <i class="fa fa-search"></i>-->
<!--            </vs-button>-->
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
                <vs-table stripe :data="student_leaves">
                  <template slot="header">
                    <h3>

                    </h3>
                  </template>
                  <template slot="thead">
                    <vs-th width="220px">
                      {{$ml.get('students')}}
                    </vs-th>
                    <vs-th>{{$ml.get('teachers')}}</vs-th>
                    <vs-th>{{$ml.get('type')}}</vs-th>
                    <vs-th>{{$ml.get('date')}}</vs-th>
                    <vs-th>{{$ml.get('notes')}}</vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                      <vs-td class="text-right">
                        <slot v-if="tr.student_term">
                          {{tr.student_term.student.name}}
                        </slot>
                      </vs-td>
                      <vs-td class="text-right">
                        <slot v-if="tr.teacher">
                          {{tr.teacher.name}}
                        </slot>
                      </vs-td>
                      <vs-td class="text-right">
                        <div class="con-vs-chip ml-auto  con-color"
                             :class="tr.type == 'vacation' ? 'vs-chip-success':'vs-chip-danger'"
                             style="color: rgba(255, 255, 255, 0.9);">
                          <span class="text-chip vs-chip--text">{{$ml.get(tr.type)}}</span>
                        </div>
                      </vs-td>
                      <vs-td class="text-right">
                        {{tr.date}}
                      </vs-td>
                      <vs-td class="text-right">
                        {{tr.notes}}
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
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  export default {
    components: {
      flatPickr
    },
    data() {
      return {
        status: [],
        student_leaves: [],
        selected: [],
        itemsPerPage: 5,
        isMounted: false,
        filterModel: {}
      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllStatus()
      this.getAllStudnetLeaves()
    },
    computed: {
      currentPage() {
        if (this.isMounted) {
          return this.$refs.table.currentx
        }
        return 0
      },
    },
    methods: {
      hasAccessPermission(permission) {
        return window.helper.hasAccessPermission(permission);
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
                vm.status = response.data.status.teacher_leave;
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
      getStatusClass(status) {
        if (status == 'accepted') {

          return 'vs-chip-success';
        } else if (status == 'rejected') {

          return 'vs-chip-danger';
        } else {

          return 'vs-chip-warning';
        }
      },
      getAllStudnetLeaves() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENT_LEAVES)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.student_leaves = response.data.studentLeaves.data;
                _.transform(response.data.studentLeaves.data, function (result, value, key) {
                  // console.log(result, value, key);
                  value.teacher_name = value.teacher ? value.teacher.name : '';
                  value.student_name = value.student_term ? value.student_term.student.name : '';
                  result[key] = value;
                }, {});
                return
              }
              vm.student_leaves = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.student_leaves = [];
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
        let ids = vm.selected;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        ids = _.map(ids, 'id');
        console.log(ids)
        try {
          window.serviceAPI.API().post(window.serviceAPI.DELETE_STUDENT_LEAVES, {
            ids: ids
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.student_leaves = window.helper.deleteMulti(ids, vm.student_leaves)
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
              window.serviceAPI.API().post(window.serviceAPI.DELETE_STUDENT_LEAVES, {
                ids: [id]
              })
                .then((response) => {
                  vm.$root.$children[0].$refs.loader.show_loader = false;
                  response = response.data;
                  if (response.status) {
                    vm.student_leaves = window.helper.deleteMulti([id], vm.student_leaves)
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

<style scoped>

</style>
