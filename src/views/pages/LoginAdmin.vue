<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>
            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8">
                <div class="vx-card__title mb-8">
                  <h4 class="mb-4 text-bold">{{$ml.get('sign_in_admin')}}</h4>
                </div>
                <vs-input
                  name="email"
                  icon="icon icon-user"
                  icon-pack="feather"
                  :label-placeholder="$ml.get('username')"
                  v-model="username"
                  class="w-full no-icon-border"/>
                <span class="span-text-validation text-danger text-bold" id="username_error"></span>
                <br>

                <vs-input
                  type="password"
                  name="password"
                  icon="icon icon-lock"
                  icon-pack="feather"
                  :label-placeholder="$ml.get('password')"
                  v-model="password"
                  class="w-full mt-6 no-icon-border"/>
                <span class="span-text-validation text-danger text-bold" id="password_error"></span>
                <br>
                <vs-button class="float-left" @click="login()">{{$ml.get('login')}}</vs-button>
                <br>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        username: '',
        password: '',
        checkbox_remember_me: false
      }
    },
    methods: {
      login() {
        // AUTH_LOGIN
        let vm = this;
        $('.span-text-validation').text('')
        try {
          window.serviceAPI.API().post(window.serviceAPI.AUTH_LOGIN, {
            username: vm.username,
            password: vm.password,
          })
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                let auth_data = {
                  user: {
                    id: response.data.admin.id,
                    name: response.data.admin.name,
                    phone: response.data.admin.phone,
                    username: response.data.admin.username,
                  },
                  permissions: [],
                  token: response.data.token,
                  type: 'admin'
                };
                window.ls.saveToStorage('auth_data',auth_data)
                vm.$router.push({name: 'home'});
                return null;
              }
            }).catch((error) => {
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="scss">
  #page-login {
    .social-login {
      .bg-facebook {
        background-color: #1551b1;
      }

      .bg-twitter {
        background-color: #00aaff;
      }

      .bg-google {
        background-color: #4285F4;
      }

      .bg-github {
        background-color: #333;
      }
    }
  }
</style>
