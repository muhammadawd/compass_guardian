<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <div class="vx-row">
            <div class="vx-col w-full mb-base" v-if="exams.length == 0">
              <vs-alert class="mb-4" color="danger">
                <h2 class="text-bold">{{$ml.get('sorry')}}</h2>
                <p>{{$ml.get('no_exams')}}</p>
              </vs-alert>
            </div>
            <div class="vx-col w-full mb-base">
              <div class="vx-row mb-base" v-for="(_exams , key) in exams" :key="key">
                <vs-alert class="mb-4" color="dark">
                  <span class="text-bold">{{$ml.get('all_student_exam')}} ({{key}})</span>
                </vs-alert>

                <div class="vx-col md:w-1/4 mb-base link" v-for="(exam , _key) in _exams " :key="_key"
                     @click="$router.push({name:'show_exam',params:{'serial':exam.serial}})">

                  <div class="cardNew">
                    <div class="card-body"
                         :class="getClassCard(exam.status_id)">
                      <div class="has-icon">
                        <feather-icon icon="FileTextIcon" class="w-15 h-15"></feather-icon>
                      </div>
                      <h3 class="mt-5 text-bold text-white text-uppercase">{{exam.subject.translated.title}}</h3>
                      <h5 class="mt-5 text-bold text-white text-uppercase">({{exam.name}})</h5>
                      <h5 class="mt-1 text-bold text-white text-uppercase text-center">
                        <vs-chip color="default" class="text-black text-bold m-auto w-50"
                                 style="width:50%;float: none;"> {{exam.status.translated.title}}
                        </vs-chip>
                      </h5>
                      <div class="has-icon bg-transparent text-center mt-3">
                        <span class="feather-icon  text-bold" dir="ltr">
                          {{exam.duration}} {{$ml.get('mins')}}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!--                <div class="vx-col md:w-1/3 mb-base" v-for="(item , _key) in _exams " :key="_key">-->
                <!--                  <vs-row vs-justify="center" class="w-full">-->
                <!--                    <vs-col type="flex" vs-justify="centesr" vs-align="center">-->
                <!--                      <vs-card style="background: #efefef;box-shadow: 1px 2px 13px #ccc">-->
                <!--                        <div slot="header">-->
                <!--                          <h3 class="text-bold">-->
                <!--                            {{item.name}}-->
                <!--                          </h3>-->
                <!--                          <span class="text-bold text-primary">{{item.subject.translated.title}}</span> <br>-->
                <!--                          <span dir="ltr">{{item.teacher.name}} - ({{item.teacher.username}})</span> <br>-->
                <!--                          &lt;!&ndash;                      <span class="text-primary text-bold">{{item.duration}} {{$ml.get('mins')}}</span>&ndash;&gt;-->
                <!--                        </div>-->
                <!--                        <div>-->
                <!--                      <span>-->
                <!--                          <img-->
                <!--                            width="50%"-->
                <!--                            src="@/assets/images/elements/212256.svg"-->
                <!--                            alt="">-->
                <!--                      </span>-->
                <!--                        </div>-->
                <!--                        <div slot="footer">-->
                <!--                          <vs-row vs-justify="flex-end">-->
                <!--                            <vs-button type="gradient" color="primary" label="remove_red_eye"-->
                <!--                                       @click="$router.push({name:'show_exam',params:{'serial':item.serial}})">-->
                <!--                              {{$ml.get('show')}}-->
                <!--                            </vs-button>-->
                <!--                          </vs-row>-->
                <!--                        </div>-->
                <!--                      </vs-card>-->
                <!--                    </vs-col>-->
                <!--                  </vs-row>-->
                <!--                </div>-->
              </div>
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
      getClassCard(status_id) {

        if (status_id == 5) return 'primary-card';
        return 'danger-card'
      },
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
  .cardNew {
    box-shadow: 1px 2px 12px #ccc;
    border-radius: 30px;
    margin-bottom: 5px;
  }

  .cardNew .card-body {
    min-height: 320px;
    border-radius: 30px;
    padding-top: 25px;
    text-align: center;
  }

  .cardNew .card-body .has-icon {
    background: #eee;
    width: 70px;
    height: 70px;
    border-radius: 70px;
    border: 2px dashed #444;
    margin: auto;
  }

  .cardNew .card-body .has-icon .feather-icon {

    margin: 22px auto;
    color: #000;
    font-size: 15px;
  }

  .link {
    cursor: pointer;
  }

  .cardNew .danger-card {
    background: linear-gradient(to top, rgb(243, 85, 119), rgb(245, 124, 151))
  }

  .cardNew .primary-card {
    background: linear-gradient(to top, #2196F3, #03A9F4)
  }

  .cardNew .success-card {
    background: linear-gradient(to top, rgb(35, 188, 198), rgb(105, 204, 143))
  }

  .cardNew .warning-card {
    background: linear-gradient(to top, rgb(254, 146, 0), rgb(250, 221, 9))
  }
</style>
