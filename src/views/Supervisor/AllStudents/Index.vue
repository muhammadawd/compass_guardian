<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <vx-card class="text-center cursor-pointer">

          <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search
                    :data="students">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

              <div class="flex flex-wrap-reverse items-center">

              </div>
            </div>

            <template slot="thead">
              <vs-th>{{$ml.get('name')}}</vs-th>
              <vs-th>{{$ml.get('age')}}</vs-th>
              <vs-th>{{$ml.get('stage')}}</vs-th>
              <vs-th>{{$ml.get('father_name')}}</vs-th>
              <vs-th>{{$ml.get('father_phone')}}</vs-th>
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
                  <slot v-if="tr.stage">
                    {{tr.stage.translated.title}}
                  </slot>
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
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
        <vs-button @click="attachSelected()" class="mt-4" :disabled="selected.length == 0">
          {{$ml.get('attach_students')}}
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        students: [],
        selected: [],
        itemsPerPage: 5,
        isMounted: false,
      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllStudents()
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
      getAllStudents() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENTS)
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
      attachSelected() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure_'),
          acceptText: this.$ml.get('yes'),
          cancelText: this.$ml.get('no'),
          accept: this.acceptAlert
        })
      },
      acceptAlert() {
        let vm = this;
        let ids = vm.selected;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let id = vm.$route.params.id;
        ids = _.map(ids, 'id');
        let request_data = {
          id: id,
          student_ids: ids
        };
        console.log(request_data)

        try {
          window.serviceAPI.API().post(window.serviceAPI.ATTACH_SUPERVISORS, request_data)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'supervisor'});
              }
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
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
