<template>
  <div id="data-list-thumb-view" class="data-list-container">

    <!-- KNOWLEDGE BASE CARDS  -->
    <div class="vx-row">
      <div class="vx-col w-full">
        <vx-card class="text-right mb-base" v-for="(exams , key) in monthlyGrouped" :key="key">
          <div class="text-right">
            <div class="vx-row">
              <vs-alert class="mb-4" color="danger" style="background: rgb(244, 244, 244);">
                <h3 class="text-bold text-uppercase">{{mL[key-1]}}</h3>
              </vs-alert>
            </div>
            <div class="vx-row">
              <vx-card class="vx-col md:w-1/4 mb-base" v-for="(exam , key) in exams" :key="key"
                       style="background: #eee">
                <h2 class="text-bold">
                  <span class="text-info" style="font-size: 18px">{{exam.exam.name}}</span>
                </h2>
                <div class="vx-card bg-primary-gradient p-0 m-0 text-center" style="width: 100%"><!---->
                  <div class="vx-card__collapsible-content vs-con-loading__container">
                    <div class="vx-card__body m-0">
                      <h4 class="text-bold">
                        {{$ml.get('your_result')}}
                        {{exam.exam.subject.translated.title}}
                      </h4>
                      <div class="vx-row text-center " style="background: #fff">
                        <div class="vx-col w-full text-center" dir="rtl">
                          <h1 class="text-bold mt-3">{{parseFloat(exam.exam.degree).toFixed(2)}} /
                            {{parseFloat(exam ? exam.degree : 0
                            ).toFixed(2)}}</h1>
                          <vs-button type="gradient" color="primary" label="remove_red_eye" class="mb-2"
                                     @click="$router.push({name:'student_exam_result',params:{'id':exam.id}})">
                            {{$ml.get('show')}}
                          </vs-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </vx-card>
              <div class="vx-col w-full">
                <vs-divider/>
              </div>
            </div>
          </div>
          <!--          <div class="vx-row">-->
          <!--            <div class="vx-col w-full mb-base" v-if="dataModel.textQuestions.length  > 0">-->
          <!--              <vs-row vs-justify="center" class="w-full">-->
          <!--                <vs-col type="flex" vs-justify="centesr" vs-align="center">-->
          <!--                  <vs-card>-->
          <!--                    <div slot="header">-->
          <!--                      <vs-alert active="true" color="danger">-->
          <!--                        <h3 class="text-bold pb-4">-->
          <!--                          <span class="text-info" style="font-size: 18px">{{dataModel.exam.name}}</span> <br>-->
          <!--                          <hr class="mb-4">-->
          <!--                          {{$ml.get('result_soon')}}-->
          <!--                        </h3>-->
          <!--                      </vs-alert>-->
          <!--                    </div>-->
          <!--                  </vs-card>-->
          <!--                </vs-col>-->
          <!--              </vs-row>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--                    <div class="vx-row" v-if="dataModel">-->
          <!--                      <div class="vx-col w-full mb-base" v-if="dataModel.textQuestions.length  == 0">-->
          <!--                        <h2 class="text-bold">-->
          <!--                          {{$ml.get('your_result_p')}} <br>-->
          <!--                          <span class="text-info" style="font-size: 18px">{{dataModel.exam.name}}</span>-->
          <!--                        </h2>-->
          <!--                        <div class="vx-card bg-primary-gradient p-0 m-0 text-center" style="width: 250px">&lt;!&ndash;&ndash;&gt;-->
          <!--                          <div class="vx-card__collapsible-content vs-con-loading__container">-->
          <!--                            <div class="vx-card__body m-0">-->
          <!--                              <h3 class="text-bold">-->
          <!--                                {{$ml.get('your_result')}}-->
          <!--                              </h3>-->
          <!--                              <div class="vx-row text-center " style="background: #fff">-->
          <!--                                <div class="vx-col w-full text-center" dir="ltr">-->
          <!--                                  <h1 class="text-bold mt-3">{{parseFloat(dataModel.degree).toFixed(2)}} /-->
          <!--                                    {{parseFloat(dataModel.exam ? dataModel.exam.degree : 0-->
          <!--                                    ).toFixed(2)}}</h1>-->
          <!--                                </div>-->
          <!--                              </div>-->
          <!--                            </div>-->
          <!--                          </div>-->
          <!--                        </div>-->
          <!--                      </div>-->
          <!--                    </div>-->


        </vx-card>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        mL: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthlyGrouped: [],
        selected: [],
        itemsPerPage: 5,
        isMounted: false,
      }
    },
    mounted() {
      this.isMounted = true;
      this.getAllExams()
    },
    computed: {
      currentPage() {
        if (this.isMounted) {
          return this.$refs.table.currentx
        }
        return 0
      },
    },
    methods: {
      getAllExams() {
        let vm = this;
        // let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.GET_STUDENT_EXAM_HOME_DATA, {
            params: {
              is_corrected: 'true'
              // teacher_id: auth_data.user.id
            }
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              console.log(response)
              if (response.status) {
                vm.monthlyGrouped = response.data.monthlyGrouped;
                return
              }
              vm.monthlyGrouped = [];
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
            vm.monthlyGrouped = [];
          });
        } catch (e) {
          console.log(e)
        }
      },
      // getAllExams() {
      //   let vm = this;
      //   // let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      //   vm.$root.$children[0].$refs.loader.show_loader = true;
      //   try {
      //     window.serviceAPI.API().get(window.serviceAPI.ALL_STUDENT_EXAM_NATEGA, {
      //       params: {
      //         is_corrected: 'true'
      //         // teacher_id: auth_data.user.id
      //       }
      //     })
      //       .then((response) => {
      //         vm.$root.$children[0].$refs.loader.show_loader = false;
      //         response = response.data;
      //         console.log(response)
      //         if (response.status) {
      //           vm.exams = response.data.studentExams.data;
      //           return
      //         }
      //         vm.exams = [];
      //       }).catch((error) => {
      //       vm.$root.$children[0].$refs.loader.show_loader = false;
      //       window.helper.handleError(error, vm);
      //       vm.exams = [];
      //     });
      //   } catch (e) {
      //     console.log(e)
      //   }
      // },
      deleteSelected() {
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure'),
          acceptText: this.$ml.get('yes'),
          cancelText: this.$ml.get('no'),
          accept: this.acceptAlert
        })
      },
      acceptAlert() {
        let vm = this;
        let ids = vm.selected;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        ids = _.map(ids, 'id');
        console.log(ids)
        try {
          window.serviceAPI.API().post(window.serviceAPI.DELETE_EXAM, {
            ids: ids
          })
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.exams = window.helper.deleteMulti(ids, vm.exams)
                location.reload()
              }
            }).catch((error) => {
            vm.$root.$children[0].$refs.loader.show_loader = false;
            window.helper.handleError(error, vm);
          });
        } catch (e) {
          console.log(e)
        }
      },
      deleteSingle(id) {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        this.$vs.dialog({
          type: 'confirm',
          color: 'danger',
          title: this.$ml.get('confirm'),
          text: this.$ml.get('are_sure'),
          acceptText: this.$ml.get('yes'),
          cancelText: this.$ml.get('no'),
          accept: () => {
            try {
              window.serviceAPI.API().post(window.serviceAPI.DELETE_EXAM, {
                ids: [id]
              })
                .then((response) => {
                  vm.$root.$children[0].$refs.loader.show_loader = false;
                  response = response.data;
                  if (response.status) {
                    vm.exams = window.helper.deleteMulti([id], vm.exams)
                    location.reload()
                  }
                }).catch((error) => {
                vm.$root.$children[0].$refs.loader.show_loader = false;
                window.helper.handleError(error, vm);
              });
            } catch (e) {
              console.log(e)
            }
          }
        })
      },
    },
  }
</script>

<style lang="scss">
  #data-list-thumb-view {
    .vs-con-table {

      .vs-table--header {
        display: flex;
        flex-wrap: wrap-reverse;
        margin-left: 1.5rem;
        margin-right: 1.5rem;

        > span {
          display: flex;
          flex-grow: 1;
        }

        .vs-table--search {
          padding-top: 0;

          .vs-table--search-input {
            padding: 0.9rem 2.5rem;
            font-size: 1rem;

            & + i {
              left: 1rem;
            }

            &:focus + i {
              left: 1rem;
            }
          }
        }
      }

      .vs-table {
        border-collapse: separate;
        border-spacing: 0 1.3rem;
        padding: 0 1rem;


        tr {
          box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .05);

          td {
            padding: 10px;

            &:first-child {
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }

            &:last-child {
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }

            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: center;
              }

              .product-img {
                height: 110px;
              }
            }
          }

          td.td-check {
            padding: 20px !important;
          }
        }
      }

      .vs-table--thead {
        th {
          padding-top: 0;
          padding-bottom: 0;

          .vs-table-text {
            text-transform: uppercase;
            font-weight: 600;
          }
        }

        th.td-check {
          padding: 0 15px !important;
        }

        tr {
          background: none;
          box-shadow: none;
        }
      }

      .vs-table--pagination {
        justify-content: center;
      }
    }
  }
</style>
