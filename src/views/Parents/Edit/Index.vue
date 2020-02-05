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
            <span class="text-bold">{{$ml.get('add_parents')}}</span>
          </vs-alert>
          <div class="vx-row">
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
              <label class="vs-input--label">{{$ml.get('address')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.address"/>
              <span class="span-text-validation text-danger text-bold" id="address_error"></span>
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
              <label class="vs-input--label">{{$ml.get('father_name')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.father_name"/>
              <span class="span-text-validation text-danger text-bold" id="father_name_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('father_phone')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.father_phone"/>
              <span class="span-text-validation text-danger text-bold" id="father_phone_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('father_work')" v-model="dataModel.father_work"/>
              <span class="span-text-validation text-danger text-bold" id="father_work_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('mother_name')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.mother_name"/>
              <span class="span-text-validation text-danger text-bold" id="mother_name_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('mother_phone')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full" v-model="dataModel.mother_phone"/>
              <span class="span-text-validation text-danger text-bold" id="mother_phone_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('mother_work')" v-model="dataModel.mother_work"/>
              <span class="span-text-validation text-danger text-bold" id="mother_work_error"></span>
            </div>
            <div class="vx-col w-full mb-base">
              <GmapMap
                :center="{lat:29.306993, lng:47.978227}"
                :zoom="7"
                map-type-id="terrain"
                @click="placeMarker"
              >
                <GmapMarker
                  :position="{lat:dataModel.lat,lng:dataModel.lng}"
                  :clickable="true"
                  :draggable="true"
                />
                <!--                @click="center=m.position"-->
              </GmapMap>
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="editParent" type="filled" vslor="primary">
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

  import * as VueGoogleMaps from 'vue2-google-maps'
  import Vue from 'vue'

  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyDUFGuZ9Xk0cQvZJHv_cUm0b0Jr5CgpvWY',
      libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
      // v: '3.26',
    },
  })
  export default {
    components: {
      Multiselect
    },
    data() {
      return {
        dataModel: {
          title_ar: '',
          title_en: '',
          lat: 0,
          lng: 0,
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
      this.findParent()
    },
    methods: {
      customLabel({translated}) {
        return `${translated.title}`
      },
      placeMarker(location) {
        let lat = location.latLng.lat()
        let lng = location.latLng.lng()
        let vm = this;
        vm.dataModel.lat = lat;
        vm.dataModel.lng = lng;
      },
      findParent() {

        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_PARENTS + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.parent;
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
      editParent() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_PARENTS, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'parents'});
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
  .vue-map-container {
    width: 100% !important;
    height: 450px !important;
  }
</style>
