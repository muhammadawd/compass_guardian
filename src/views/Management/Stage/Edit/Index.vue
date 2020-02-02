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
            <span class="text-bold">{{$ml.get('edit_stages')}}</span>
          </vs-alert>

          <div class="vx-row">
            <div class="vx-col md:w-1/2 mb-base">
              <label class="vs-input--label">{{$ml.get('subjects')}}</label>
              <multiselect v-model="selectedSubjects" :options="subjects" :multiple="true" :close-on-select="false"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="subject_ids_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('title_ar')" v-model="dataModel.title_ar"/>
              <span class="span-text-validation text-danger text-bold" id="title_ar_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('title_en')" v-model="dataModel.title_en"/>
              <span class="span-text-validation text-danger text-bold" id="title_en_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <div class="text-right">
                <vs-button type="border" color="primary" @click="addOption()">
                  {{$ml.get('add_classes')}}
                </vs-button>
              </div>
              <span class="span-text-validation text-danger text-bold" id="class_rooms_error"></span>
              <vs-table :data="dataModel.class_rooms">

                <template slot="thead">
                  <vs-th></vs-th>
                  <vs-th>{{$ml.get('title_ar')}}</vs-th>
                  <vs-th>{{$ml.get('title_en')}}</vs-th>
                  <vs-th>{{$ml.get('size')}}</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      <vs-button type="border" color="danger" @click="removeOption(indextr)">
                        <i class="fa fa-minus"></i>
                      </vs-button>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.class_rooms[indextr].title_ar"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'class_rooms.'+indextr+'.title_ar_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.class_rooms[indextr].title_en"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'class_rooms.'+indextr+'.title_en_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.class_rooms[indextr].size"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'class_rooms.'+indextr+'.size_error'"></span>
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
                         @click="editStageValues" type="filled" vslor="primary">
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

  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        dataModel: {
          title_ar: '',
          title_en: '',
          class_rooms: []
        },
        subjects: [],
        selectedSubjects: [],
        findId: null,
        loading: false
      }
    },
    computed: {},
    mounted() {
      this.findId = this.$route.params.id;
      this.getAllSubjects()
      this.findStage()
    },
    methods: {
      customLabel({translated}) {
        return `${translated.title}`
      },
      findStage() {

        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_STAGES+ `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.stage
                vm.selectedSubjects = response.data.stage.subjects
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
        let data = vm.dataModel.class_rooms;
        vm.dataModel.class_rooms = _.remove(data, (o, i) => {
          return i == id;
        });
        vm.dataModel.class_rooms = data;
      },
      addOption() {
        const vm = this;
        vm.dataModel.class_rooms.push(
          {
            title_ar: '',
            title_en: '',
            size: ''
          }
        );
      },
      editStageValues() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        let subject_ids = vm.selectedSubjects;
        let ids = _.map(subject_ids, 'id');
        request_data.subject_ids = ids;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_STAGES, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'management_stages'});
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
      getAllSubjects() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_SUBJECTS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
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
