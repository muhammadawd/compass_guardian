<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('edit_role')}}</span>
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
            <div class="vx-col w-full text-center mb-base" v-if="permissions.length != 0">
              <!--              <vs-tabs alignment="right" position="right">-->
              <vs-tabs>
                <vs-tab v-for="(_permissions,key) in permissions" :key="key" :label="key">
                  <div class="con-tab-ejemplo mt-3 p-3 w-full" style="border: 1px dashed #47a7f5">
                    <div class="vx-row">
                      <div class="vx-col md:w-1/4 mb-base" v-for="(permission,key) in _permissions" :key="key">
                        <vs-checkbox v-model="selectedPermission" :vs-value="permission.id">
                          {{permission.translated.title}}
                          <p class="text-right">{{permission.name}}</p>
                        </vs-checkbox>
                      </div>
                    </div>
                  </div>
                </vs-tab>
              </vs-tabs>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" v-if="hasAccessPermission('update-role')"
                         class="vs-con-loading__container vs-button-dark text-bold" :disabled="loading"
                         @click="editRole" type="filled" vslor="primary">
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
        loading: false,
        dataModel: {},
        findId: null,
        roles: [],
        permissions: [],
        selectedPermission: []
      }
    },
    computed: {},
    mounted() {
      this.findId = this.$route.params.id;
      this.getAllPermissions();
      this.findRole();
    },
    methods: {
      hasAccessPermission(permission) {
        // return true;
        return window.helper.hasAccessPermission(permission);
      },
      handleFileUpload() {
        let vm = this;
        vm.dataModel.image = vm.$refs.image.files[0];
      },
      getAllPermissions() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_PERMISSIONS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.permissions = response.data.permissions;
                return
              }
              vm.permissions = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.permissions = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      findRole() {
        let vm = this;
        let id = vm.findId;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_ROLES + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.role
                vm.selectedPermission = _.map(response.data.role.permissions, 'id')
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
      editRole() {
        let vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        request_data.permission_ids = vm.selectedPermission
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.EDIT_ROLES, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                // vm.$router.push({name: 'settings_roles'});
                // location.reload()
                vm.closeLoadingContained();
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
  .con-vs-tabs .con-slot-tabs {
    width: 100%;
  }
</style>
