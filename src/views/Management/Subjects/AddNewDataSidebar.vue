<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
              class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{$ml.get('add_subject')}}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new pt-4 pb-6" :settings="settings">

      <div class="p-6">
        <!-- NAME -->

        <div class="vx-row">
          <div class="vx-col w-full mb-base">
            <vs-input class="w-full" :label="$ml.get('title_ar')" v-model="dataModel.title_ar"/>
            <span class="span-text-validation text-danger text-bold" id="title_ar_error"></span>
          </div>
          <div class="vx-col w-full mb-base">
            <vs-input class="w-full" :label="$ml.get('title_en')" v-model="dataModel.title_en"/>
            <span class="span-text-validation text-danger text-bold" id="title_en_error"></span>
          </div>
        </div>

        <!-- IMG -->
        <!--        <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" />-->
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center justify-center p-6" slot="footer">
      <vs-button class="ml-6" @click="addSubject()">{{$ml.get('add')}}</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{$ml.get('cancel')}}</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
  import VuePerfectScrollbar from 'vue-perfect-scrollbar'

  export default {
    props: {
      isSidebarActive: {
        type: Boolean,
        required: true
      },
      updateUnits: {
        type: Function
      }
    },
    data() {
      return {
        dataModel: {},
        settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
        },
      }
    },
    mounted(){
      // setTimeout(()=>{
      //   this.updateUnits([])
      // },2000)
    },
    computed: {
      isSidebarActiveLocal: {
        get() {
          return this.isSidebarActive
        },
        set(val) {
          if (!val) {
            this.$emit('closeSidebar');
          }
        }
      }
    },
    methods: {
      addSubject() {
        let vm = this;
        let request_data = vm.dataModel;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_SUBJECTS, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                this.dataModel = {}
                this.updateUnits(response.data.subject)
                window.helper.showMessage('success', vm);
                return null;
              }
            }).catch((error) => {
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      },
    },
    components: {
      VuePerfectScrollbar,
    }
  }
</script>

<style lang="scss" scoped>
  .add-new-data-sidebar {
    /deep/ .vs-sidebar--background {
      z-index: 52010;
    }

    /deep/ .vs-sidebar {
      z-index: 52010;
      width: 400px;
      max-width: 90vw;

      .img-upload {
        margin-top: 2rem;

        .con-img-upload {
          padding: 0;
        }

        .con-input-upload {
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  .scroll-area--data-list-add-new {
    height: calc(100% - 4.3rem);
  }
</style>
