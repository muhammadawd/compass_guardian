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
            <span class="text-bold">{{$ml.get('add_option')}}</span>
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
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <div class="text-right">
                <vs-button type="border" color="primary" @click="addOption()">
                  <i class="fa fa-plus"></i>
                </vs-button>
              </div>
              <vs-table :data="dataModel.option_values">

                <template slot="thead">
                  <vs-th></vs-th>
                  <vs-th>{{$ml.get('value_ar')}}</vs-th>
                  <vs-th>{{$ml.get('value_en')}}</vs-th>
                  <vs-th>{{$ml.get('unit')}}</vs-th>
                </template>

                <template slot-scope="{data}">
                  <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      <vs-button type="border" color="danger" @click="removeOption(indextr)">
                        <i class="fa fa-minus"></i>
                      </vs-button>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.option_values[indextr].title_ar"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values.'+indextr+'.title_ar_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-input class="w-full" v-model="dataModel.option_values[indextr].title_en"/>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values'+indextr+'title_en_error'"></span>
                    </vs-td>
                    <vs-td class="text-right">
                      <vs-select class="selectExample" v-model="dataModel.option_values[indextr].unit_id">
                        <vs-select-item :key="index" :value="item.id" :text="item.translated.title"
                                        v-for="(item,index) in units"/>
                      </vs-select>
                      <span class="span-text-validation text-danger text-bold"
                            :id="'option_values'+indextr+'unti_id_error'"></span>
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
                         @click="addOptionValues" type="filled" vslor="primary">
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

  export default {
    data() {
      return {
        dataModel: {
          title_ar: '',
          title_en: '',
          option_values: []
        },
        units: [],
        loading: false
      }
    },
    computed: {},
    mounted() {
      this.getAllUnits()
    },
    methods: {
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
            title_ar: '',
            title_en: '',
            unit_id: ''
          }
        );
      },
      addOptionValues() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_OPTIONS, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name:'meals_options'});
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
      getAllUnits() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_UNITS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.units = response.data.units.data;
                return
              }
              vm.units = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.units = [];
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
