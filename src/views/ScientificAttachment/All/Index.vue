<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col md:w-1/4 mb-base">
        <vx-card class=" cursor-pointer">
          <vs-select v-model="current_stage" :label="$ml.get('stage')" @change="getAllSubjects()">
            <vs-select-item v-for="(item ,k) in stages" :value="item.id" :text="item.translated.title"
                            :key="k"></vs-select-item>
          </vs-select>
          <vs-collapse type="margin">
            <vs-collapse-item v-for="(item , key) in subjects" :key="key">
              <div slot="header">
                {{item.translated.title}}
                <vs-button size="small" class="float-left" color="primary" @click="getAllScientificAttachment(item.id)"
                           :disabled="item.scientific_attachments.length == 0">
                  {{$ml.get('all')}}
                </vs-button>
              </div>
              <vs-list v-if="item.scientific_attachments.length == 0">
                <vs-list-item :title="$ml.get('no_data')"></vs-list-item>
              </vs-list>
              <vs-list v-for="(attachment,_key) in item.scientific_attachments" :key="_key">
                <vs-list-item :title="attachment.translated.title"
                              :subtitle="(attachment.teacher ? attachment.teacher.name : '') + ' - ' + (attachment.term ? attachment.term.translated.title : '')"></vs-list-item>
              </vs-list>
            </vs-collapse-item>
          </vs-collapse>
        </vx-card>
      </div>
      <div class="vx-col md:w-3/4 mb-base">
        <vx-card class="text-center cursor-pointer">

          <vs-table ref="table" multiple v-model="selected" pagination :max-items="itemsPerPage" search
                    :data="scientificAttachments">

            <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

              <div class="flex flex-wrap-reverse items-center">

                <!-- ADD NEW -->
                <vs-button color="primary" class="text-bold" type="filled" icon-pack="feather" icon="icon-plus"
                           v-if="hasAccessPermission('create-attachment')"
                           @click="$router.push({name: 'scientific_attachment_add'})">
                  {{$ml.get('add_new')}}
                </vs-button>
              </div>

              <!-- ITEMS PER PAGE -->
              <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 ml-4">
                <div dir="ltr"
                     class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
                  <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ scientificAttachments.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : scientificAttachments.length }} of {{ scientificAttachments.length }}</span>
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
              <vs-th>{{$ml.get('title_ar')}}</vs-th>
              <vs-th>{{$ml.get('title_en')}}</vs-th>
              <vs-th>{{$ml.get('teachers')}}</vs-th>
              <vs-th width="15%"></vs-th>
            </template>

            <template slot-scope="{data}">
              <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                <vs-td class="text-right">
                  {{tr.title_ar}}
                </vs-td>
                <vs-td class="text-right">
                  {{tr.title_en}}
                </vs-td>
                <vs-td class="text-right">
                  <slot v-if="tr.teacher">
                    {{tr.teacher.name}}
                  </slot>
                </vs-td>
                <vs-td class="text-right">
                  <div class="btn-group" dir="ltr">
                    <vs-button @click="deleteSingle(tr.id)" type="line" v-if="hasAccessPermission('delete-attachment')"
                               color="danger">
                      <i class="fa fa-times"></i>
                    </vs-button>
                    <vs-button @click="$router.push({name:'scientific_attachment_edit',params:{id:tr.id}})" type="line"
                               v-if="hasAccessPermission('show-attachment')"
                               color="primary">
                      <i class="fa fa-edit"></i>
                    </vs-button>
                  </div>
                </vs-td>
              </vs-tr>
            </template>
          </vs-table>
        </vx-card>
        <vs-button @click="deleteSelected()" class="mt-4" v-if="hasAccessPermission('delete-attachment')"
                   :disabled="selected.length == 0">
          {{$ml.get('delete_selected')}}
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        scientificAttachments: [],
        selected: [],
        subjects: [],
        stages: [],
        itemsPerPage: 5,
        current_stage: '',
        isMounted: false,
      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllSubjects()
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
    methods: {
      hasAccessPermission(permission) {
        return window.helper.hasAccessPermission(permission);
      },
      getAllStages() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STAGES)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
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
      getAllSubjects() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let stage_id = vm.current_stage;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS, {
            params: {
              stage_id: stage_id,
              attachment: true
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.subjects = response.data.subjects.data;
                return
              }
              vm.subjects = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.subjects = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      getAllScientificAttachment(subject_id) {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        let stage_id = vm.current_stage;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_SCIENTIFIC_ATTACHMENT, {
            params: {
              subject_id: subject_id,
              stage_id: stage_id,
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.scientificAttachments = response.data.scientificAttachments.data;
                return
              }
              vm.scientificAttachments = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.scientificAttachments = [];
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
          window.serviceAPI.API().post(window.serviceAPI.DELETE_SCIENTIFIC_ATTACHMENT, {
            ids: ids
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.scientificAttachments = window.helper.deleteMulti(ids, vm.scientificAttachments)
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
              window.serviceAPI.API().post(window.serviceAPI.DELETE_SCIENTIFIC_ATTACHMENT, {
                ids: [id]
              })
                .then((response) => {
                  vm.$root.$children[0].$refs.loader.show_loader = false;
                  response = response.data;
                  if (response.status) {
                    vm.scientificAttachments = window.helper.deleteMulti([id], vm.scientificAttachments)
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
