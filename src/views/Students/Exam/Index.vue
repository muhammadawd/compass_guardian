<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('student_exam')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col md:w-1/3 mb-base">
              <h3>{{$ml.get('exam_period')}} : 30:00</h3>
              <h3>{{$ml.get('ellipsis_time')}} : {{timeCounter}}</h3>
            </div>
            <div class="vx-col md:w-1/3 mb-base">
            </div>
            <div class="vx-col md:w-1/3 text-left mb-base">
              <div class="btn-group" dir="ltr">
                <vs-button :disabled="loading" @click="goPrevious()"
                           class="vs-con-loading__container vs-button-dark text-bold" type="filled" vslor="primary">
                  <i class="fas fa-arrow-left"></i>
                  {{$ml.get('previous')}}
                </vs-button>
                <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading" @click="goNext()"
                           class="vs-con-loading__container vs-button-dark text-bold" type="filled" vslor="primary">
                  {{$ml.get('next')}}
                  <i class="fas fa-arrow-right"></i>
                </vs-button>
              </div>
            </div>
            <div class="vx-col w-full mb-base">
              <hr class="pb-0">
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col md:w-1/5 mb-base">

              <vs-list>
                <vs-list-header :title="$ml.get('questions')" color="info"></vs-list-header>
                <vs-list-header :title="$ml.get('question') + ` 1`" color="success"></vs-list-header>
                <vs-list-item title="كم ناتج العملية الحسابية 1+1= " subtitle="MCQ">
                  <template slot="avatar">
                    <vs-avatar :color="'success'"
                               :text="'✔'"/>
                  </template>
                </vs-list-item>
                <vs-list-header :title="$ml.get('question') + ` 2`" color="danger"></vs-list-header>
                <vs-list-item title="ايهما اكبر حجما السيارة ام الدراجة ؟ " subtitle="MCQ">
                  <template slot="avatar">
                    <vs-avatar :color="'danger'"
                               :text="'✖'"/>
                  </template>
                </vs-list-item>
                <vs-list-header :title="$ml.get('question') + ` 3`" color="danger"></vs-list-header>
                <vs-list-item title="صوت الماء يسمي ؟ " subtitle="MCQ">
                  <template slot="avatar">
                    <vs-avatar :color="'danger'"
                               :text="'✖'"/>
                  </template>
                </vs-list-item>
                <vs-list-header :title="$ml.get('question') + ` 4`" color="danger"></vs-list-header>
                <vs-list-item title="1+1= " subtitle="MCQ">
                  <template slot="avatar">
                    <vs-avatar :color="'danger'"
                               :text="'✖'"/>
                  </template>
                </vs-list-item>
              </vs-list>

            </div>

            <div class="vx-col md:w-4/5 mb-base">

              <vx-card class="text-right">
                <div class="vx-row">
                  <div class="vx-col w-full mb-base">
                    <hr class="pb-0">
                  </div>
                </div>
              </vx-card>
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
        timeCounter: '00:00',
      }
    },
    computed: {},
    mounted() {
      setInterval(() => {
        this.timeCounter = this.diffTwoDates('2020-02-01 16:00:00', new Date())
      }, 1000)
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
      goPrevious() {
        let vm = this;
        vm.openLoadingContained()
      },
      goNext() {
        let vm = this;
        vm.openLoadingContained()
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
