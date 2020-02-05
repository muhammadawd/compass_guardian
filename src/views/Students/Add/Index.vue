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
            <span class="text-bold">{{$ml.get('add_students')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('name')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.name"/>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <label class="vs-input--label">{{$ml.get('age')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.age"/>
              <span class="span-text-validation text-danger text-bold" id="age_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('username')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.username"/>
              <span class="span-text-validation text-danger text-bold" id="username_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('password')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" type="password" v-model="dataModel.password"/>
              <span class="span-text-validation text-danger text-bold" id="password_error"></span>
            </div>
            <div class="vx-col md:w-1/6 mb-base">
              <label class="vs-input--label">{{$ml.get('gender')}} <span class="star">*</span></label>
              <vs-select class="w-full" v-model="dataModel.gender">
                <vs-select-item value="male" :text="$ml.get('male')"></vs-select-item>
                <vs-select-item value="female" :text="$ml.get('female')"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="gender_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                <label class="vs-input--label">{{$ml.get('image')}}</label>
                <div class="vs-con-input">
                  <input type="file" accept="image/*" ref="image" class="vs-inputx vs-input--input normal"
                         v-on:change="handleFileUpload()">
                  <span class="span-text-validation text-danger text-bold" id="image_error"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
                <label class="vs-input--label">{{$ml.get('parents')}}
                  <span class="star">*</span>
                </label>
              <multiselect v-model="selectedParent" :options="parents" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customParentLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="parent_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}
                <span class="star">*</span>
              </label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('status')}}
                <span class="star">*</span>
              </label>
              <multiselect v-model="selectedStatus" :options="status" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="status_id_error"></span>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="addParent" type="filled" vslor="primary">
                {{$ml.get('add')}}
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
        dataModel: {},
        status: [],
        parents: [],
        stages: [],
        selectedParent: null,
        selectedStage: null,
        selectedStatus: null,
        loading: false
      }
    },
    computed: {},
    mounted() {
      this.getAllParents()
      this.getAllstatus()
      this.getAllStages()
    },
    methods: {
      customParentLabel({father_name}) {
        return `${father_name}`
      },
      customStageLabel({translated}) {
        return `${translated.title}`
      },
      handleFileUpload() {
        let vm = this;
        vm.dataModel.image = vm.$refs.image.files[0];
      },
      addParent() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.parent_id = vm.selectedParent ? vm.selectedParent.id : '';
        request_data.stage_id = vm.selectedStage ? vm.selectedStage.id : '';
        request_data.status_id = vm.selectedStatus ? vm.selectedStatus.id : '';

        let form_data = new FormData();
        $.each(request_data, (key, value) => {
          form_data.append(key, value)
        })

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_STUDENTS, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'students'});
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
      getAllstatus() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STATUS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.status = response.data.status.student;
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
      getAllParents() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_PARENTS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.parents = response.data.parents.data;
                return
              }
              vm.parents = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.parents = [];
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
