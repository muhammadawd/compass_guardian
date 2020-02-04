<template>
  <div id="knowledge-base-page">
    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/1 mb-base">
        <vx-card class="text-right">
          <vs-alert class="mb-4" color="dark">
            <span class="text-bold">{{$ml.get('teacher_all_exams')}}</span>
          </vs-alert>

          <vs-alert class="mb-4" color="danger" v-if="questions.length == 0">
            <h3 class="text-bold">{{$ml.get('no_exams')}}</h3>
          </vs-alert>

          <div class="vx-row">
            <div class="vx-col w-full mb-base" v-for="(question , key) in questions" :key="key">
              <h3 class="text-bold">{{question.question.name}}</h3>
              <vs-input type="number" :max="question.exam_question.degree" min="0" v-model="questions[key].degree"
                        :label="$ml.get('degree') + ` (${question.exam_question.degree})`" class="mb-3"/>
              <span class="span-text-validation text-danger text-bold" :id="`questions.${key}.degree_error`"></span>
              <vs-textarea v-for="(answer,index) in question.answers" :key="index" row="5"
                           v-model="question.answers[index].answer" :label="$ml.get('answer')"></vs-textarea>
              <hr v-if="questions.length > key+1">
            </div>
          </div>
          <div class="vx-row">
            <div class="vx-col w-full text-center mb-base">
              <vs-button ref="loadableButton" id="button-with-loading" :disabled="questions.length == 0 || loading"
                         class="vs-con-loading__container vs-button-dark text-bold"
                         @click="correctExam" type="filled" vslor="primary">
                {{$ml.get('correct')}}
              </vs-button>
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
  import flatPickr from 'vue-flatpickr-component';
  import 'flatpickr/dist/flatpickr.css';

  export default {
    components: {
      Multiselect, flatPickr
    },
    data() {
      return {
        questions: [],
        findModelSerial: null,
        loading: false
      }
    },
    computed: {},
    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      this.findId = auth_data.user.id;
      this.findModelSerial = this.$route.params.serial;
      this.findExam()
    },
    methods: {
      findExam() {

        let vm = this;
        let serial = vm.findModelSerial;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.FIND_TEACHERS_EXAMS + `/${serial}`, {
            params: {
              limit: 5
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.questions = response.data.questions.data
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

      correctExam() {
        const vm = this;
        vm.openLoadingContained();
        let questions = [];
        _.each(vm.questions, (item, key) => {
          questions.push({
            id: item.id,
            degree: item.degree,
          });
        });
        let request_data = {questions: questions};

        $('.span-text-validation').text('');
        try {
          window.serviceAPI.API().post(window.serviceAPI.UPDATE_TEACHERS_EXAMS, request_data)
            .then((response) => {
              response = response.data;
              if (response.status) {
                window.helper.showMessage('success', vm);
                location.reload()
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
