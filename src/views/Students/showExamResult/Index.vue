<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('all_student_exam')}}</span>
          </vs-alert>
          <div class="vx-row" v-if="dataModel">
            <div class="vx-col w-full mb-base" v-if="dataModel.textQuestions.length  > 0">
              <vs-row vs-justify="center" class="w-full">
                <vs-col type="flex" vs-justify="centesr" vs-align="center">
                  <vs-card>
                    <div slot="header">
                      <vs-alert active="true" color="danger">
                        <h3 class="text-bold pb-4">
                          <span class="text-info" style="font-size: 18px">{{dataModel.exam.name}}</span> <br>
                          <hr class="mb-4">
                          {{$ml.get('result_soon')}}
                        </h3>
                      </vs-alert>
                    </div>
                  </vs-card>
                </vs-col>
              </vs-row>
            </div>
          </div>
          <div class="vx-row" v-if="dataModel">
            <div class="vx-col w-full mb-base" v-if="dataModel.textQuestions.length  == 0">
              <h2 class="text-bold">
                {{$ml.get('your_result_p')}} <br><span class="text-info"
                                                       style="font-size: 18px">{{dataModel.exam.name}}</span>
              </h2>
              <div class="vx-card bg-primary-gradient p-0 m-0 text-center" style="width: 250px"><!---->
                <div class="vx-card__collapsible-content vs-con-loading__container">
                  <div class="vx-card__body m-0">
                    <h3 class="text-bold">
                      {{$ml.get('your_result')}}
                    </h3>
                    <div class="vx-row text-center " style="background: #fff">
                      <div class="vx-col w-full text-center" dir="ltr">
                        <h1 class="text-bold mt-3">{{parseFloat(dataModel.degree).toFixed(2)}} /
                          {{parseFloat(dataModel.exam ? dataModel.exam.degree : 0
                          ).toFixed(2)}}</h1>
                      </div>
                    </div>
                  </div>
                </div>
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
        loading: false,
      }
    },
    computed: {},
    mounted() {
      this.findStudentExams();
    },
    methods: {
      findStudentExams() {
        let vm = this;
        let id = vm.$route.params.id;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_STUDENT_EXAM_ID + `/${id}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.studentExam;
                console.log(vm.dataModel)
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
