<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('all_student_exam')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col w-full mb-base" v-if="exams.length == 0">
              <vs-alert class="mb-4" color="danger">
              <h2 class="text-bold">{{$ml.get('sorry')}}</h2>
              <p>{{$ml.get('no_exams')}}</p>
              </vs-alert>
            </div>
            <div class="vx-col md:w-1/3 mb-base" v-for="(item , key) in exams" :key="key">
              <vs-row vs-justify="center" class="w-full">
                <vs-col type="flex" vs-justify="centesr" vs-align="center">
                  <vs-card style="background: #efefef;box-shadow: 1px 2px 13px #ccc">
                    <div slot="header">
                      <h3 class="text-bold">
                        {{item.name}}
                      </h3>
                      <span class="text-bold text-primary">{{item.subject.translated.title}}</span> <br>
                      <span dir="ltr">{{item.teacher.name}} - ({{item.teacher.username}})</span> <br>
                      <!--                      <span class="text-primary text-bold">{{item.duration}} {{$ml.get('mins')}}</span>-->
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
                        <vs-button type="gradient" color="primary" label="remove_red_eye"
                                   @click="$router.push({name:'show_exam',params:{'serial':item.serial}})">{{$ml.get('show')}}</vs-button>
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
        exams: [],
        loading: false,
      }
    },
    computed: {},
    mounted() {
      this.getAllStudentExams();
    },
    methods: {
      getAllStudentExams() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENT_EXAM)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.exams = response.data.exams.data;
                return
              }
              vm.exams = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.exams = [];
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
