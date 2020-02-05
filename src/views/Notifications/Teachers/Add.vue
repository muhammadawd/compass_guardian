<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('teacher_notifications')}}</span>
          </vs-alert>

          <div class="vx-row">
            <!--            <div class="vx-col md:w-1/4 mb-base">-->
            <!--              <label class="vs-input&#45;&#45;label">{{$ml.get('teachers')}}</label>-->
            <!--              <vs-select class="w-full" v-model="dataModel.teacher_id">-->
            <!--                <vs-select-item v-for="(item , key) in teachers" :key="key" :value="item.id" :text="item.name"></vs-select-item>-->
            <!--              </vs-select>-->
            <!--              <span class="span-text-validation text-danger text-bold" id="teacher_id_error"></span>-->
            <!--            </div>-->
            <div class="vx-col md:w-1/4 mb-base">
              <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                <label class="vs-input--label">{{$ml.get('images')}}</label>
                <div class="vs-con-input">
                  <input type="file" ref="image" accept="image/*" class="vs-inputx vs-input--input normal" multiple
                         v-on:change="handleFileUpload()">
                  <span class="span-text-validation text-danger text-bold" id="images_error"></span>
                </div>
              </div>
            </div>
            <div class="vx-col md:w-3/4 mb-base">
              <label class="vs-input--label">{{$ml.get('teachers')}}</label>
              <multiselect v-model="selectedTeacher" :options="teachers" :multiple="true" :close-on-select="true"
                           open-direction="bottom"
                           :clear-on-select="true" :preserve-search="true" :placeholder="$ml.get('search')"
                           :custom-label="customLabel"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="teacher_id_error"></span>
              <span class="span-text-validation text-danger text-bold" id="teacher_ids_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full mb-base">
              <label class="vs-input--label">{{$ml.get('notes')}} <span>*</span></label>
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
        teachers: [],
        images: [],
        selectedTeacher: [],
      }
    },
    components: {Multiselect},
    mounted() {
      this.getAllTeachers();
    },
    methods: {
      customLabel({name}) {
        return `${name}`
      },
      handleFileUpload() {
        let vm = this;
        vm.images = vm.$refs.image.files;
      },
      getAllTeachers() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_TEACHERS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.teachers = response.data.teachers.data;
                return
              }
              vm.teachers = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.teachers = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      addNotifications() {
        let vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        let teacher_ids = vm.selectedTeacher;
        teacher_ids = _.map(teacher_ids, 'id');

        let form_data = new FormData();
        $.each(request_data, (key, value) => {
          form_data.append(key, value ? value : '')
        })
        $.each(vm.images, (i, file) => {
          form_data.append(`images[${i}]`, file);
        })
        $.each(teacher_ids, (i, val) => {
          form_data.append(`teacher_ids[${i}]`, val);
        })
        $('.span-text-validation').text('');

        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_TEACHER_NOTIFICATIONS, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'teacher_notifications'});
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
