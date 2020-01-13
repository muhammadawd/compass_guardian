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
    <div class="vx-row">
      <div class="vx-col md:w-1/2 mb-2">
        <vs-button color="primary" class="text-bold" type="filled" icon-pack="feather" icon="icon-plus"
                   @click="$router.push({name: 'meals_categories_add'})">
          {{$ml.get('add_new')}}
        </vs-button>
      </div>
    </div>
    <!-- JUMBOTRON -->
    <div class="knowledge-base-jumbotron">
      <div class="knowledge-base-jumbotron-content lg:p-15 md:p-12 sm:p-16 py-4 rounded-lg mb-base">
        <h1 class="mb-1 text-white">{{$ml.get('search')}}</h1>
        <p class="text-white lead">{{$ml.get('about_categories')}}</p>
        <vs-input :placeholder="$ml.get('search_word')" v-model="knowledgeBaseSearchQuery" icon-pack="feather"
                  icon="icon-search" size="large" class="w-full no-icon-border mt-6"/>
      </div>
    </div>

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/4 sm:w-1/2 mb-base " v-for="item in filteredKB" :key="item.id"
           :id="`row_${item.id}`">
        <vx-card class="text-center">
          <div class="vs-dialog" style="background: #fff">
            <vs-button style="position: absolute;left: -10px;top: -10px;" color="danger" type="filled"
                       @click="openConfirm(item.id)"
                       icon-pack="feather" icon="icon-x"></vs-button>
          </div>
          <div class="cursor-pointer" @click="$router.push({name:'meals_categories_edit',params:{id:item.id}})">
            <img :src="item.image_path" alt="graphic" width="100%"
                 class="mx-auto mb-4">
            <h2 class="mb-2 text-bold">{{ item.translated.title.toUpperCase() }}</h2>
            <small class="hidden">{{ item.translated.description }}</small>
          </div>
          <!--          <img :src="require(`@/assets/images/pages/categories/${item.graphic}`)" alt="graphic" width="100%"-->
          <!--               class="mx-auto mb-4">-->
        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        knowledgeBaseSearchQuery: '',
        categories: [],
        id_to_delete: null,
      }
    },
    computed: {
      filteredKB() {
        return _.filter(this.categories, (item) => {
          return item.translated.title.toLowerCase().includes(this.knowledgeBaseSearchQuery.toLowerCase())
        });
      }
    },
    mounted() {
      let vm = this;
      vm.getAllCategories();
    },
    methods: {
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
                console.log(vm.categories)
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
      openConfirm(id) {
        this.id_to_delete = id;
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure'),
          accept: this.acceptAlert
        })
      },
      acceptAlert() {

        let vm = this;
        let id = vm.id_to_delete;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().post(window.serviceAPI.DELETE_CATEGORIES + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                $(`#row_${id}`).remove()
              }
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      },
    },
  }
</script>

<style lang="scss">
  .vx-card .vx-card__collapsible-content .vx-card__body {
    padding: 0;
  }

  .knowledge-base-jumbotron-content {
    background-image: url('../../../../assets/images/pages/data/1.jpg');
    background-size: cover;
  }
</style>
