<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('edit_supervisor')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('name')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.name"/>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('username')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.username"/>
              <span class="span-text-validation text-danger text-bold" id="username_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('email')" v-model="dataModel.email"/>
              <span class="span-text-validation text-danger text-bold" id="email_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('password')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" type="password" v-model="dataModel.password"/>
              <span class="span-text-validation text-danger text-bold" id="password_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('age')" v-model="dataModel.age"/>
              <span class="span-text-validation text-danger text-bold" id="age_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('ssn')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.ssn"/>
              <span class="span-text-validation text-danger text-bold" id="ssn_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('phone')" v-model="dataModel.phone"/>
              <span class="span-text-validation text-danger text-bold" id="phone_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('gender')}} <span class="star">*</span></label>
              <vs-select class="w-full" v-model="dataModel.gender">
                <vs-select-item value="male" :text="$ml.get('male')"></vs-select-item>
                <vs-select-item value="female" :text="$ml.get('female')"></vs-select-item>
              </vs-select>
              <span class="span-text-validation text-danger text-bold" id="gender_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('qualification')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.qualification"/>
              <span class="span-text-validation text-danger text-bold" id="qualification_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('bus_number')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.bus_number"/>
              <span class="span-text-validation text-danger text-bold" id="bus_number_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('student_number')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.student_number"/>
              <span class="span-text-validation text-danger text-bold" id="student_number_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('service_location')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.service_location"/>
              <span class="span-text-validation text-danger text-bold" id="service_location_error"></span>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="editSupervisor" type="filled" vslor="primary">
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
        findId: null,
        loading: false
      }
    },
    computed: {},
    mounted() {
      this.findId = this.$route.params.id
      this.findSupervisor()
    },
    methods: {
      customLabel({translated}) {
        return `${translated.title}`
      },
      editSupervisor() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_SUPERVISOR, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'supervisor'});
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
      findSupervisor() {
        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_SUPERVISOR + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.supervisor
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
