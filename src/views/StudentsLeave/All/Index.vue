<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <vx-card class="text-center cursor-pointer">

          <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search
                    :data="student_leaves">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

              <div class="flex flex-wrap-reverse items-center">

                <!-- ADD NEW -->
                <vs-button color="primary" class="text-bold" type="filled" icon-pack="feather" icon="icon-plus"
                           @click="$router.push({name: 'student_leave_add'})">
                  {{$ml.get('add_new')}}
                </vs-button>
              </div>

              <!-- ITEMS PER PAGE -->
              <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 ml-4">
                <div dir="ltr"
                     class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                  <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ student_leaves.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : student_leaves.length }} of {{ student_leaves.length }}</span>
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

            <template slot="thead">
              <vs-th>{{$ml.get('students')}}</vs-th>
              <vs-th>{{$ml.get('teachers')}}</vs-th>
              <vs-th>{{$ml.get('start_date')}}</vs-th>
              <vs-th>{{$ml.get('end_date')}}</vs-th>
              <vs-th>{{$ml.get('notes')}}</vs-th>
              <vs-th></vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
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
                  {{tr.start_date}}
                </vs-td>
                <vs-td class="text-right">
                  {{tr.end_date}}
                </vs-td>
                <vs-td class="text-right">
                  {{tr.notes}}
                </vs-td>
                <vs-td class="text-right">
                  <div class="btn-group" dir="ltr">
                    <vs-button @click="deleteSingle(tr.id)" type="line"
                               color="danger">
                      <i class="fa fa-times"></i>
                    </vs-button>
                    <vs-button @click="$router.push({name:'student_leave_edit',params:{id:tr.id}})" type="line"
                               color="primary">
                      <i class="fa fa-edit"></i>
                    </vs-button>
                  </div>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
        <vs-button @click="deleteSelected()" class="mt-4" :disabled="selected.length == 0">
          {{$ml.get('delete_selected')}}
        </vs-button>
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
                  value.teacher_name = value.teacher.name;
                  value.student_name = value.student_term.student.name;
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
