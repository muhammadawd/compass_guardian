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
            <span class="text-bold">{{$ml.get('edit_category')}}</span>
          </vs-alert>

          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('title_ar')" v-model="dataModel.title_ar"/>
              <span class="span-text-validation text-danger text-bold" id="title_ar_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('title_en')" v-model="dataModel.title_en"/>
              <span class="span-text-validation text-danger text-bold" id="title_en_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                <label class="vs-input--label">{{$ml.get('image')}}</label>
                <div class="vs-con-input">
                  <input type="file" accept="image/*" ref="image" class="vs-inputx vs-input--input normal"
                         v-on:change="handleFileUpload()">
                  <span class="span-text-validation text-danger text-bold" id="image_error"></span>
                </div>
                <a v-if="dataModel.image_path" target="_blank" class="text-bold" :href="dataModel.image_path">{{$ml.get('show_image')}}</a>
              </div>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/2 mb-base">
              <vs-textarea :label="$ml.get('description_ar')" class="w-full"
                           :label-placeholder="$ml.get('description_ar')" v-model="dataModel.description_ar"/>
              <span class="span-text-validation text-danger text-bold" id="description_ar_error"></span>
            </div>
            <div class="vx-col md:w-1/2 mb-base">
              <vs-textarea :label="$ml.get('description_en')" class="w-full"
                           :label-placeholder="$ml.get('description_en')" v-model="dataModel.description_en"/>
              <span class="span-text-validation text-danger text-bold" id="description_en_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="editCategory" type="filled" vslor="primary">
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

  export default {
    data() {
      return {
        findId: '',
        loading: false,
        dataModel: {}
      }
    },
    mounted() {
      this.findId = this.$route.params.id;
      this.findCategory();
    },
    computed: {},
    methods: {
      findCategory() {
        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_CATEGORIES + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = vm.prepareModel(response.data.category)
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
      prepareModel(model) {

        let arabic = _.map(model.details, function (o) {
          if (o.lang == "ar") return o;
        });
        arabic = _.without(arabic, undefined)

        let english = _.map(model.details, function (o) {
          if (o.lang == "en") return o;
        });
        english = _.without(english, undefined)

        console.log(english)
        let prepared = {
          id: model.id,
          title_ar: arabic.length > 0 && arabic[0].title !== 'null' ? arabic[0].title : '',
          title_en: english.length > 0 && english[0].title !== 'null' ? english[0].title : '',
          description_ar: arabic.length > 0 && arabic[0].description !== 'null' ? arabic[0].description : '',
          description_en: english.length > 0 && english[0].description !== 'null' > 0 ? english[0].description : '',
          image_path: model.image_path,
        };
        return prepared
      },
      handleFileUpload() {
        let vm = this;
        vm.dataModel.image = vm.$refs.image.files[0];
      },
      editCategory() {
        let vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        $('.span-text-validation').text('');
        let form_data = new FormData();
        $.each(request_data, (key, value) => {
          form_data.append(key, value)
        })
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_CATEGORIES, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'meals_categories'});
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
