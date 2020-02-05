<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('student_notifications')}}</span>
          </vs-alert>

          <div class="vx-row">
            <!--            <div class="vx-col md:w-1/4 mb-base">-->
            <!--              <label class="vs-input&#45;&#45;label">{{$ml.get('teachers')}}</label>-->
            <!--              <vs-select class="w-full" v-model="dataModel.teacher_id">-->
            <!--                <vs-select-item v-for="(item , key) in teachers" :key="key" :value="item.id" :text="item.name"></vs-select-item>-->
            <!--              </vs-select>-->
            <!--              <span class="span-text-validation text-danger text-bold" id="teacher_id_error"></span>-->
            <!--            </div>-->
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('stages')}}</label>
              <multiselect v-model="selectedStage" :options="stages" :multiple="false" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customStageLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="stage_id_error"></span>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
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
            <div class="vx-col md:w-1/3  mb-base">
              <label class="vs-input--label">{{$ml.get('students')}}</label>
              <multiselect v-model="selectedStudents" :options="students" :multiple="true" :close-on-select="true" open-direction="bottom"
                           :clear-on-select="true" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="student_id_error"></span>
              <span class="span-text-validation text-danger text-bold" id="student_ids_error"></span>
              <span class="span-text-validation text-danger text-bold" id="student_term_ids_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                <label class="vs-input--label">{{$ml.get('images')}}</label>
                <div class="vs-con-input">
                  <input type="file" ref="image" accept="image/*"  class="vs-inputx vs-input--input normal" multiple
                         v-on:change="handleFileUpload()">
                  <span class="span-text-validation text-danger text-bold" id="images_error"></span>
                </div>
              </div>
            </div>
            <div class="vx-col md:w-3/4  mb-base">
              <label class="vs-input--label">{{$ml.get('notes')}} <span class="star">*</span></label>
              <vs-textarea v-model="dataModel.notes" rows="7"></vs-textarea>
              <span class="span-text-validation text-danger text-bold" id="notes_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading"
                         class="vs-con-loading__container vs-button-dark text-bold" :disabled="loading"
                         @click="addNotifications" type="filled" vslor="primary">
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
    data() {
      return {
        loading: false,
        dataModel: {},

        images: [],
        stages: [],
        selectedStage: null,
        classRooms: [],
        selectedClassRooms: null,

        students: [],
        selectedStudents: []
      }
    },
    components: {Multiselect},
    mounted() {
      this.getAllStudents();
      this.getAllStages()
    },
    watch: {
      selectedStage: function (newStage, oldStage) {
        this.selectedClassRooms = null;
        this.classRooms = newStage.class_rooms;
      }
    },
    methods: {
      customLabel({name}) {
        return `${name}`
      },
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
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENTS, {
            params: {
              student_term: 1
            }
          })
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
      handleFileUpload() {
        let vm = this;
        vm.images = vm.$refs.image.files;
      },
      addNotifications() {
        let vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        let student_ids = vm.selectedStudents;
        request_data.student_term_ids = _.map(student_ids, 'student_term.id');
        request_data.class_room_id = vm.selectedClassRooms ? vm.selectedClassRooms.id : null;

        let form_data = new FormData();
        $.each(request_data, (key, value) => {
          form_data.append(key, value ? value : '')
        })
        $.each(request_data.student_term_ids, (i, id) => {
          form_data.append(`student_term_ids[${i}]`, id);
        })
        $.each(vm.images, (i, file) => {
          form_data.append(`images[${i}]`, file);
        })
        $('.span-text-validation').text('');

        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_STUDENT_NOTIFICATIONS, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'students_notifications'});
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
