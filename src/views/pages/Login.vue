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
                  <h4 class="mb-4 text-center text-bold">{{$ml.get('sign_in')}}</h4>
                  <router-link :to="{name:'login_admin'}">
                    <b>* مدير مسئول</b>
                  </router-link>
                  <br>
                  <router-link :to="{name:'login_teacher'}">
                    <b>* مدرس</b>
                  </router-link>
                  <br>
                  <router-link :to="{name:'login_student'}">
                    <b>* طالب</b>
                  </router-link>
                </div>
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
                  admin: response.data.admin,
                  token: response.data.token
                };
                window.ls.saveToStorage('auth_data', auth_data)
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
