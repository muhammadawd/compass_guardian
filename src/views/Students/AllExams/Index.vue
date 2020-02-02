<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('all_student_exam')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/4 mb-base">
              <vs-row vs-justify="center" class="w-full">
                <vs-col type="flex" vs-justify="centesr" vs-align="center">
                  <vs-card>
                    <div slot="header">
                      <h3 class="text-bold">
                        امتحان مادة اللغة العربية
                      </h3>
                      <span>الاستاذ محمد عبدالله نصر</span> <br>
                      <span class="text-primary text-bold">60 دقيقة</span>
                    </div>
                    <div>
                      <span>
                          <img
                            width="50%"
                            src="@/assets/images/elements/212256.svg"
                            alt="">
                      </span>
                    </div>
                    <div slot="footer">
                      <vs-row vs-justify="flex-end">
                        <vs-button type="gradient" color="primary" icon="remove_red_eye"
                                   @click="$router.push({name:'show_exam',params:{'serial':'8WCB7R27#4h1V9&HG&!5644SDA&1d1dDFF6@64'}})"></vs-button>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>
            <div class="vx-col md:w-1/4 mb-base">
              <vs-row vs-justify="center" class="w-full">
                <vs-col type="flex" vs-justify="centesr" vs-align="center">
                  <vs-card>
                    <div slot="header">
                      <h3 class="text-bold">
                        امتحان مادة اللغة العربية
                      </h3>
                      <span>الاستاذ محمد عبدالله نصر</span> <br>
                      <span class="text-primary text-bold">60 دقيقة</span>
                    </div>
                    <div>
                      <span>
                          <img
                            width="50%"
                            src="@/assets/images/elements/212256.svg"
                            alt="">
                      </span>
                    </div>
                    <div slot="footer">
                      <vs-row vs-justify="flex-end">
                        <vs-button type="gradient" color="primary" icon="remove_red_eye"
                                   @click="$router.push({name:'show_exam',params:{'serial':'8WCB7R27#4h1V9&HG&!5644SDA&1d1dDFF6@64'}})"></vs-button>
                      </vs-row>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
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
        dataModel: {},
        loading: false,
      }
    },
    computed: {},
    mounted() {
    },
    methods: {
      getAllParents() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_PARENTS)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.parents = response.data.parents.data;
                return
              }
              vm.parents = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.parents = [];
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
      diffTwoDates(start, end) {
        start = this.$moment(start, 'YYYY.MM.DD HH:mm')
        end = this.$moment(end, 'YYYY.MM.DD HH:mm')
        let seconds = end.diff(start, 'seconds');
        return this.fancyTimeFormat(seconds)
      },
      fancyTimeFormat(time) {
        // // Hours, minutes and seconds
        // var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        var ret = "";

        // if (hrs > 0) {
        //   ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        // }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
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
