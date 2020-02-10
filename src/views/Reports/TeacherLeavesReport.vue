<template>
  <div>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/4 mb-base text-right">
        <label class="vs-input--label">{{$ml.get('date')}}</label>
        <flat-pickr class="w-full"
                    :config="{mode:'range'}"
                    v-model="filterModel.date" :label="$ml.get('end_date')"></flat-pickr>
      </div>
      <div class="vx-col w-full md:w-1/5 mb-base text-right">
        <label class="vs-input--label">{{$ml.get('type')}}</label>
        <vs-select class="w-full" v-model="filterModel.type">
          <vs-select-item value="leave" :text="$ml.get('leave')"></vs-select-item>
          <vs-select-item value="vacancy" :text="$ml.get('vacancy')"></vs-select-item>
        </vs-select>
      </div>
      <div class="vx-col md:w-1/5 mb-base text-right">
        <label class="vs-input--label">{{$ml.get('status')}}</label>
        <vs-select class="w-full" v-model="filterModel.status_id">
          <vs-select-item v-for="(state,key) in status" :value="state.id" :key="key"
                          :text="state.translated.title"></vs-select-item>
        </vs-select>
      </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="vx-row  text-right">
          <div class="vx-col w-full mb-base btn-group d-print-none" dir="ltr">
            <vs-button @click="getAllTeacherLeaves()">
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
                <vs-table stripe :data="teacher_leaves">
                  <template slot="header">
                    <h3>

                    </h3>
                  </template>
                  <template slot="thead">
                    <vs-th width="220px">
                      {{$ml.get('name')}}
                    </vs-th>
                    <vs-th>{{$ml.get('type')}}</vs-th>
                    <vs-th>{{$ml.get('status')}}</vs-th>
                    <vs-th>{{$ml.get('start_date')}}</vs-th>
                    <vs-th>{{$ml.get('end_date')}}</vs-th>
                  </template>

                  <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                      <vs-td class="text-right">
                        <span v-if="tr.teacher">
                          {{tr.teacher.name}}
                        </span>
                      </vs-td>
                      <vs-td class="text-right">
                        {{$ml.get(tr.type)}}
                      </vs-td>
                      <vs-td class="text-right">
                        <span v-if="tr.status">
                          <div class="con-vs-chip ml-auto  con-color" :class="getStatusClass(tr.status.name)"
                               style="color: rgba(255, 255, 255, 0.9);">
                            <span class="text-chip vs-chip--text">{{tr.status.translated.title}}</span>
                          </div>

                        </span>
                      </vs-td>
                      <vs-td class="text-right">
                        {{tr.start_date}}
                      </vs-td>
                      <vs-td class="text-right">
                        {{tr.end_date}}
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
        teacher_leaves: [],
        selected: [],
        itemsPerPage: 5,
        isMounted: false,
        filterModel: {}
      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllStatus()
      this.getAllTeacherLeaves()
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
      prepareFilter(model) {

        let date = model.date;
        let start_date = null;
        let end_date = null;

        if (date) {
          let arr = date.split(" to ");
          start_date = arr[0];
          end_date = arr[1];
        }

        return {
          status_id: model.status_id,
          type: model.type,
          start_date: start_date,
          end_date: end_date ? end_date : start_date,
        }
      },
      getAllTeacherLeaves() {
        let vm = this;

        vm.$root.$children[0].$refs.loader.show_loader = true;
        let params = vm.prepareFilter(vm.filterModel);
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHER_LEAVES, {
            params: params
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.teacher_leaves = response.data.teacherLeaves.data;
                _.transform(response.data.teacherLeaves.data, function (result, value, key) {
                  // console.log(result, value, key);
                  value.teacher_name = value.teacher ? value.teacher.name : '';
                  value.status_name = value.status.translated.title;
                  result[key] = value;
                }, {});
                return
              }
              vm.teacher_leaves = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.teacher_leaves = [];
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
          window.serviceAPI.API().post(window.serviceAPI.DELETE_TEACHER_LEAVES, {
            ids: ids
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.teacher_leaves = window.helper.deleteMulti(ids, vm.teacher_leaves)
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
              window.serviceAPI.API().post(window.serviceAPI.DELETE_TEACHER_LEAVES, {
                ids: [id]
              })
                .then((response) => {
                  vm.$root.$children[0].$refs.loader.show_loader = false;
                  response = response.data;
                  if (response.status) {
                    vm.teacher_leaves = window.helper.deleteMulti([id], vm.teacher_leaves)
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
