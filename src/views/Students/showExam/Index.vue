<template>
  <div id="knowledge-base-page">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('all_student_exam')}}</span>
          </vs-alert>
          <div class="vx-row">
            <div class="vx-col w-full mb-base" v-if="dataModel">
              <vs-row vs-justify="center" class="w-full">
                <vs-col type="flex" vs-justify="centesr" vs-align="center">
                  <vs-card>
                    <div slot="header">
                      <h3 class="text-bold">
                        {{dataModel.name}}
                      </h3>
                      <span class="text-bold text-primary" v-if="dataModel.subject">{{dataModel.subject.translated.title}}</span>
                      <br>
                      <ul class="mr-4" style="list-style: square">
                        <li>
                          <span class="text-info text-bold" v-if="dataModel.teacher" dir="ltr">{{dataModel.teacher.name}} - ({{dataModel.teacher.username}})</span>
                        </li>
                        <li>
                          <span class="text-info text-bold">{{dataModel.duration}} {{$ml.get('mins')}}</span>
                        </li>
                        <li>
                          <span class="text-info text-bold" v-if="dataModel.status" dir="ltr">{{dataModel.stage.translated.title}}</span>
                        </li>
                        <li>
                          <span class="text-info text-bold" v-if="dataModel.status" dir="ltr">{{dataModel.status.translated.title}}</span>
                        </li>
                      </ul>

                      <span class="span-text-validation text-danger text-bold" id="error_id_error"></span>

                    </div>
                    <div>

                    </div>
                    <div slot="footer">
                      <vs-row vs-justify="flex-end">
                        <vs-button ref="loadableButton" id="button-with-loading" :disabled="loading"
                                   class="vs-con-loading__container vs-button-dark text-bold"
                                   @click="startExam()">
                          {{$ml.get('start_exam')}}
                        </vs-button>
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
      this.findStudentExams();
    },
    methods: {
      startExam() {
        const vm = this;
        vm.openLoadingContained();
        let request_data = vm.dataModel;

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.CREATE_STUDENT_EXAM, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.ls.saveToStorage('current_exam', response.data.studentExam);

                vm.$router.push({name: 'student_start_exam', params: {serial: request_data.serial}});
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
      findStudentExams() {
        let vm = this;
        let serial = vm.$route.params.serial;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_STUDENT_EXAM + `/${serial}`)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.dataModel = response.data.exam;
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
