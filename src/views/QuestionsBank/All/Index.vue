<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <div class="vs-alert bg-danger text-white text-bold" v-if="displayError">
          <div id="error_delete_error"></div>
        </div>
        <vx-card class="text-center cursor-pointer">
          <div class="vs-row">
            <div class="vx-col md:w-1/4 text-right mb-base">
              <label class="vs-input--label">{{$ml.get('subjects')}}
                <span class="star">*</span>
              </label>
              <multiselect v-model="selectedSubjects" :options="subjects" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="subject_id_error"></span>
            </div>
            <div class="vx-col w-full text-right mb-base">
              <vs-button color="primary" type="border" icon="search" @click="getAllQuestions()"></vs-button>
              <br>
            </div>
          </div>
          <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search
                    :data="questions">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

              <div class="flex flex-wrap-reverse items-center">

                <!-- ADD NEW -->
                <vs-button color="primary" class="text-bold" type="filled" icon-pack="feather" icon="icon-plus"
                           @click="$router.push({name: 'add_questions_bank'})">
                  {{$ml.get('add_new')}}
                </vs-button>
              </div>

              <!-- ITEMS PER PAGE -->
              <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 ml-4">
                <div dir="ltr"
                     class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                  <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ questions.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : questions.length }} of {{ questions.length }}</span>
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
              <vs-th>{{$ml.get('name')}}</vs-th>
              <vs-th>{{$ml.get('subjects')}}</vs-th>
              <vs-th>{{$ml.get('stages')}}</vs-th>
              <vs-th>{{$ml.get('question_degree')}}</vs-th>
              <vs-th>{{$ml.get('question_type')}}</vs-th>
              <vs-th></vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td class="text-right">
                  {{tr.name}}
                </vs-td>
                <vs-td class="text-right">
                  <slot v-if="tr.subject">
                    {{tr.subject.translated.title}}
                  </slot>
                </vs-td>
                <vs-td class="text-right">
                  <slot v-if="tr.stage">
                    {{tr.stage.translated.title}}
                  </slot>
                </vs-td>
                <vs-td class="text-right">
                  {{tr.degree}}
                </vs-td>
                <vs-td class="text-right">
                  {{$ml.get(tr.type)}}
                </vs-td>
                <vs-td class="text-right">
                  <div class="btn-group" dir="ltr">
                    <vs-button @click="deleteSingle(tr.id)" type="line"
                               color="danger">
                      <i class="fa fa-times"></i>
                    </vs-button>
                    <vs-button @click="$router.push({name:'edit_questions_bank',params:{id:tr.id}})" type="line"
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
  import Multiselect from 'vue-multiselect'
  import 'vue-multiselect/dist/vue-multiselect.min.css'


  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        questions: [],
        selected: [],
        subjects: [],
        selectedSubjects: null,
        itemsPerPage: 5,
        isMounted: false,
        displayError: false,
      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllQuestions()
      this.findTeacher()
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
      customLabel({translated}) {
        return `${translated.title}`
      },
      findTeacher() {

        let vm = this;
        let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
        let findId = auth_data.user.id;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS + `/${findId}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.subjects = response.data.teacher.subjects
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
      getAllQuestions() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let subject_id = vm.selectedSubjects ? vm.selectedSubjects.id : '';
        let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
        let teacher_id = auth_data.user.id;

        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_QUESTION, {
            params:{
              subject_id: subject_id,
              teacher_id: teacher_id,
            },
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.questions = response.data.questions.data;
                return
              }
              vm.questions = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.questions = [];
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
        vm.displayError = false
        vm.$root.$children[0].$refs.loader.show_loader = true;
        ids = _.map(ids, 'id');
        console.log(ids)
        try {
          window.serviceAPI.API().post(window.serviceAPI.DELETE_QUESTION, {
            ids: ids
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.questions = window.helper.deleteMulti(ids, vm.questions)
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
        vm.displayError = false
        vm.$root.$children[0].$refs.loader.show_loader = true;
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure'),
          acceptText: this.$ml.get('yes'),
          cancelText: this.$ml.get('no'),
          accept: () => {
            try {
              window.serviceAPI.API().post(window.serviceAPI.DELETE_QUESTION, {
                ids: [id]
              })
                .then((response) => {
                  vm.$root.$children[0].$refs.loader.show_loader = false;
                  response = response.data;
                  if (response.status) {
                    vm.questions = window.helper.deleteMulti([id], vm.questions)
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
