<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('add_admins')}}</span>
          </vs-alert>

          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('name')" v-model="dataModel.name"/>
              <span class="span-text-validation text-danger text-bold" id="name_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('username')" v-model="dataModel.username"/>
              <span class="span-text-validation text-danger text-bold" id="username_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('password')" v-model="dataModel.password"
                        type="password"/>
              <span class="span-text-validation text-danger text-bold" id="password_error"></span>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('phone')" v-model="dataModel.phone"/>
              <span class="span-text-validation text-danger text-bold" id="phone_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-input class="w-full" :label="$ml.get('email')" v-model="dataModel.email"/>
              <span class="span-text-validation text-danger text-bold" id="email_error"></span>
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading"
                         class="vs-con-loading__container vs-button-dark text-bold" :disabled="loading"
                         @click="addAdmin" type="filled" vslor="primary">
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
        loading: false,
        dataModel: {}
      }
    },
    computed: {},
    methods: {
      handleFileUpload() {
        let vm = this;
        vm.dataModel.image = vm.$refs.image.files[0];
      },
      addAdmin() {
        let vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;
        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.ADD_ADMIN, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                vm.$router.push({name: 'settings_admins'});
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
