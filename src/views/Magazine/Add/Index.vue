<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('add_magazine')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <label class="vs-input--label">{{$ml.get('title_ar')}}
                <span class="star">*</span>
              </label>
              <vs-input class="w-full"  v-model="dataModel.title_ar"/>
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
              <label class="vs-input--label">{{$ml.get('description_ar')}} <span class="star">*</span></label>
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
        loading: false
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      handleFileUpload() {
        let vm = this;
        vm.images = vm.$refs.image.files;
      },
      addMagazine() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;

        let form_data = new FormData();
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
          window.serviceAPI.API().post(window.serviceAPI.ADD_MAGAZINE, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'magazine'});
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
