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
            <span class="text-bold">{{$ml.get('add_menu_item')}}</span>
          </vs-alert>

          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <label class="vs-input--label">{{$ml.get('category')}}</label>
              <multiselect v-model="dataModel.category" :placeholder="$ml.get('choose_category')" label="title"
                           track-by="id" class="multiselect__container"
                           :options="categories" :option-height="104" :show-labels="false">
                <template slot="singleLabel" slot-scope="props">
                  <img class="option__image" :src="props.option.image_path" alt="...">
                  <span class="option__desc">
                    <span class="option__title">{{ props.option.translated.title }}</span>
                  </span>
                </template>
                <template slot="option" slot-scope="props">
                  <img class="option__image" :src="props.option.image_path" alt="...">
                  <div class="option__desc">
                    <span class="option__title">{{ props.option.translated.title }}</span>
                    <!--                    <div class="option__small">{{ props.option.translated.description }}</div>-->
                  </div>
                </template>
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="category_id_error"></span>
            </div>
            <div class="vx-col md:w-3/4 mb-base">
              <label class="vs-input--label">{{$ml.get('extra_options')}}</label>
              <multiselect v-model="extraOptionsValues" :options="extraOptions" :multiple="true"
                           :close-on-select="false"
                           :clear-on-select="false" :preserve-search="true" :placeholder="$ml.get('choose')"
                           label="title_ar"
                           track-by="id" :preselect-first="true">
              </multiselect>
              <span class="span-text-validation text-danger text-bold" id="extra_option_ids_error"></span>
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
            <div class="vx-col md:w-1/4 mb-base">
              <div class="vs-component vs-con-input-label vs-input w-full vs-input-primary">
                <label class="vs-input--label">{{$ml.get('image')}}</label>
                <div class="vs-con-input">
                  <input type="file" accept="image/*" ref="image" class="vs-inputx vs-input--input normal"
                         v-on:change="handleFileUpload()">
                  <span class="span-text-validation text-danger text-bold" id="main_image_error"></span>
                </div>
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
              <div class="text-right">
                <vs-button type="border" color="primary" @click="addOption()">
                  <i class="fa fa-plus"></i>
                </vs-button>
              </div>
              <span class="span-text-validation text-danger text-bold" id="option_values_error"></span>
              <vs-table :data="dataModel.option_values">

                <template slot="thead">
                  <vs-th></vs-th>
                  <vs-th>{{$ml.get('price')}}</vs-th>
                  <vs-th>{{$ml.get('discount')}}</vs-th>
                  <vs-th>{{$ml.get('expiration_date')}}</vs-th>
                  <vs-th>{{$ml.get('images')}}</vs-th>
                  <vs-th width="30%">{{$ml.get('options')}}</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      <vs-button type="border" color="danger" @click="removeOption(indextr)">
                        <i class="fa fa-minus"></i>
                      </vs-button>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.option_values[indextr].price"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values.'+indextr+'.price_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.option_values[indextr].discount"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values.'+indextr+'.discount_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <flat-pickr class="w-full vs-inputx vs-input--input normal"
                                  v-model="dataModel.option_values[indextr].expiration_date"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values.'+indextr+'.expiration_date_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <input type="file" accept="image/*" :ref="'myImages_'+indextr"
                             class="vs-inputx vs-input--input normal" multiple
                             v-on:change="handleFileUploadRow(indextr)">
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values.'+indextr+'.images_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <multiselect v-model="dataModel.option_values[indextr].option_value_details" :options="options"
                                   :multiple="true"
                                   group-values="option_values" :customLabel="customLabel" :show-labels="false"
                                   group-label="title_ar" :group-select="false" :placeholder="$ml.get('choose')"
                                   track-by="id" label="id"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
                      </multiselect>

                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values.'+indextr+'.option_value_details_error'"></span>
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
                         @click="addMenuItem" type="filled" vslor="primary">
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

  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';
  import Multiselect from 'vue-multiselect'
  import vueMultiSelect from 'vue-multi-select';
  import 'vue-multi-select/dist/lib/vue-multi-select.css';


  export default {
    data() {
      return {
        dataModel: {
          title_ar: '',
          title_en: '',
          description_ar: '',
          description_en: '',
          main_image: '',
          option_values: [],
          extra_options_ids: [],
        },
        categories: [],
        options: [],
        loading: false,
        extraOptions: [],
        extraOptionsValues: [],
      }
    },
    components: {
      flatPickr,
      vueMultiSelect,
      Multiselect,
    },
    computed: {},
    mounted() {
      this.getAllCategories()
      this.getAllOptions()
      this.getAllExtraOptions()
    },
    methods: {
      customLabel(o) {
        return `${o.translated.title} ${o.unit ? o.unit.translated.title : ''}`
      },
      handleFileUpload() {
        let vm = this;
        vm.dataModel.main_image = vm.$refs.image.files[0];
      },
      handleFileUploadRow(index) {
        let vm = this;
        let images = [];
        $.each(vm.$refs['myImages_' + index][0].files, function (index, item) {
          images.push(item)
        });
        vm.dataModel.option_values[index].images = images;
      },
      removeOption(id) {
        const vm = this;
        let data = vm.dataModel.option_values;
        vm.dataModel.option_values = _.remove(data, (o, i) => {
          return i == id;
        });
        vm.dataModel.option_values = data;
      },
      addOption() {
        const vm = this;
        vm.dataModel.option_values.push(
          {
            price: '',
            discount: '',
            expiration_date: '',
            images: []
          }
        );
      },
      addMenuItem() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.category_id = vm.dataModel.category ? vm.dataModel.category.id : null;
        let extra_options_ids = vm.extraOptionsValues ? vm.extraOptionsValues : [];
        extra_options_ids = _.map(extra_options_ids, 'id');
        request_data.extra_options_ids = extra_options_ids;

        let form_data = vm.prepareDataToSend(request_data)
        // return request_data;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_MENU, form_data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'menu_items'});
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
      getAllCategories() {
        // ALL_CATEGORIES
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_CATEGORIES)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.categories = response.data.categories.data;
                return
              }
              vm.categories = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.categories = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      getAllOptions() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_OPTIONS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.options = response.data.options.data;
                return
              }
              vm.options = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.options = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      getAllExtraOptions() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_EXTRA_OPTIONS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.extraOptions = response.data.extraOptions.data;
                return
              }
              vm.extraOptions = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.extraOptions = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      prepareDataToSend(model) {

        let form_data = new FormData();
        model.category_id ? form_data.append('category_id', model.category_id) : '';
        model.title_ar ? form_data.append('title_ar', model.title_ar) : '';
        model.title_en ? form_data.append('title_en', model.title_en) : '';
        model.description_ar ? form_data.append('description_ar', model.description_ar) : '';
        model.description_en ? form_data.append('description_en', model.description_en) : '';
        model.main_image ? form_data.append('main_image', model.main_image) : '';
        $.each(model.extra_options_ids, (index, item) => {
          form_data.append(`extra_options_ids[${index}]`, item);
        })
        $.each(model.option_values, (index, item) => {
          item.price ? form_data.append(`option_values[${index}][price]`, item.price) : '';
          item.expiration_date ? form_data.append(`option_values[${index}][expiration_date]`, item.expiration_date) : '';
          item.discount ? form_data.append(`option_values[${index}][discount]`, item.discount) : '';
          $.each(item.images, (key, value) => {
            value ? form_data.append(`option_values[${index}][images][${key}]`, value) : '';
          })
          $.each(item.option_value_details, (key, value) => {
            form_data.append(`option_values[${index}][option_value_details][${key}][option_value_id]`, value.id);
          })
        })
        return form_data;
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
  .option__image {
    width: 150px;
  }

  .multiselect__container {
    z-index: 999 !important;
  }

  [dir=rtl] .multiselect__container {
    z-index: 999999 !important;
  }

  .option__desc, .option__image {
    display: inline-block !important;
    vertical-align: middle !important;
    font-weight: bold !important;
  }

  .option__image {
    max-height: 80px;
    /*margin-right: 10px;*/
    margin-left: 10px;
  }

  .option__small {
    display: block !important;
    font-size: 12px !important;
  }
</style>
