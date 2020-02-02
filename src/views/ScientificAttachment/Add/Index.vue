<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('add_scientific_attachment')}}</span>
          </vs-alert>
          <div class="vx-row">

            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('subjects')}}</label>
              <multiselect v-model="selectedSubjects" :options="subjects" :multiple="false" :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="subject_id_error"></span>
            </div>

            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}</label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true"
                           open-direction="bottom"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('class_room')}}</label>
              <multiselect v-model="selectedClassRooms" :options="classRooms" :multiple="false" open-direction="bottom"
                           :close-on-select="true"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="class_room_id_error"></span>
              <span class="span-text-validation text-danger text-bold" id="class_room_ids_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <vs-input class="w-full" :label="$ml.get('title_ar')" v-model="dataModel.title_ar"/>
              <span class="span-text-validation text-danger text-bold" id="title_ar_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
              <vs-input class="w-full" :label="$ml.get('title_en')" v-model="dataModel.title_en"/>
              <span class="span-text-validation text-danger text-bold" id="title_en_error"></span>
            </div>

            <div class="vx-col md:w-1/4 mb-base">
              <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                <label class="vs-input--label">{{$ml.get('files')}}</label>
                <div class="vs-con-input">
                  <input type="file" ref="image" class="vs-inputx vs-input--input normal" multiple
                         v-on:change="handleFileUpload()">
                  <span class="span-text-validation text-danger text-bold" id="files_error"></span>
                </div>
              </div>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col md:w-1/2 mb-base">
              <label class="vs-input--label">{{$ml.get('description_ar')}}</label>
              <vs-textarea class="w-full" v-model="dataModel.description_ar" rows="6"></vs-textarea>
              <span class="span-text-validation text-danger text-bold" id="description_ar_error"></span>
            </div>
            <div class="vx-col md:w-1/2 mb-base">
              <label class="vs-input--label">{{$ml.get('description_en')}}</label>
              <vs-textarea class="w-full" v-model="dataModel.description_en" rows="6"></vs-textarea>
              <span class="span-text-validation text-danger text-bold" id="description_en_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full mb-base">
              <vs-button color="primary" class="text-bold" type="filled" icon-pack="feather" icon="icon-plus"
                         @click="dataModel.videos.push({url: ''})">
              </vs-button>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base" v-for="(url,key) in dataModel.videos" :key="key">
              <label class="vs-input--label">{{$ml.get('url')}}</label>
              <vs-input class="w-full" v-model="dataModel.videos[key].url"></vs-input>
              <span class="span-text-validation text-danger text-bold" :id="`videos.${key}.url_error`"></span>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="addMagazine" type="filled" vslor="primary">
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
        dataModel: {
          videos: []
        },
        images: [],
        subjects: [],
        selectedSubjects: null,
        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,
        loading: false
      }
    },
    computed: {},
    watch: {
      selectedStage: function (newStage, oldStage) {
        // if (oldStage != null) {
        this.selectedClassRooms = null;
        this.classRooms = newStage.class_rooms;
        this.getAllStudents();
        // }
      }
    },
    mounted() {
      this.getAllStages()
      this.getAllSubjects()
    },
    methods: {
      customLabel({translated}) {
        return `${translated.title}`
      },
      customStageLabel({translated}) {
        return `${translated.title}`
      },
      handleFileUpload() {
        let vm = this;
        vm.images = vm.$refs.image.files;
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
      addMagazine() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.stage_id = vm.selectedStage ? vm.selectedStage.id : '';
        request_data.subject_id = vm.selectedSubjects ? vm.selectedSubjects.id : '';
        request_data.class_room_id = vm.selectedClassRooms ? vm.selectedClassRooms.id : '';

        let form_data = new FormData();
        form_data.append('type', 'main');
        $.each(request_data, (key, value) => {
          form_data.append(key, value ? value : '')
        })
        $.each(request_data.videos, (i, video) => {
          form_data.append(`videos[${i}][url]`, video.url ? video.url : '');
        })
        $.each(vm.images, (i, file) => {
          form_data.append(`files[${i}]`, file);
        })
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_SCIENTIFIC_ATTACHMENT, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'scientific_attachment'});
                return null;
              }
              vm.closeLoadingContained()
            }).catch((error) => {
            vm.closeLoadingContained();
            window.helper.handleError(error, vm);
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
