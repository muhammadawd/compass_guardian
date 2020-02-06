<template>
  <div>
    <div class="vx-row">
      <div class="vx-col md:w-1/4 mb-base">
        <statistics-card-line icon="UsersIcon" :statistic="`${leaveNumber}`" :statisticTitle="$ml.get('leaveNumber')"
                              type='area'></statistics-card-line>
      </div>

      <div class="vx-col md:w-1/4 mb-base">
        <statistics-card-line icon="StarIcon" :statistic="`${vacationNumber}`"
                              :statisticTitle="$ml.get('vacationNumber')"
                              type='area'></statistics-card-line>
      </div>

      <div class="vx-col md:w-1/4 mb-base">
        <statistics-card-line icon="FileIcon" :statistic="`${examNumber}`" :statisticTitle="$ml.get('examNumber')"
                              type='area'></statistics-card-line>
      </div>
    </div>
    <vs-card>
      <div class="vx-row">
        <div class="vx-col md:w-1/3 mb-base">
          <h3 class="text-bold mt-2 text-center">{{$ml.get('rep_absence')}}</h3>
          <e-charts :options="pie" ref="pie" auto-resize/>
        </div>
        <div class="vx-col md:w-2/3 mb-base">
          <h3 class="text-bold mt-2 text-center">{{$ml.get('rep_exams')}}</h3>
          <e-charts autoresize :options="bar" ref="bar" theme="ovilia-green" auto-resize/>
        </div>
      </div>
    </vs-card>
  </div>
</template>

<script>
  import VueApexCharts from 'vue-apexcharts'
  import StatisticsCardLine from '@/components/statistics-cards/StatisticsCardLine.vue'
  import ECharts from 'vue-echarts/components/ECharts'
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/chart/pie'
  import 'echarts/lib/chart/bar'

  export default {
    data() {
      return {
        absence_statistic: {},
        leaveNumber: 0,
        examNumber: 0,
        vacationNumber: 0,

        pie: {
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            data: []
          },
          series: [
            {
              name: 'Access source',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              color: ['#FF9F43', '#28C76F', '#EA5455'],
              data: [],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        },

        bar: {
          legend: {},
          tooltip: {},
          dataset: {
            // Provide data.
            source: [
              ['Exams', '', '', '', '', '', ''],
            ]
          },
          xAxis: {type: 'category'},
          yAxis: {},
          series: [{type: 'bar'}, {type: 'bar'}, {type: 'bar'}]

        },
      }
    },
    components: {
      ECharts,
      VueApexCharts,
      StatisticsCardLine
    },
    mounted() {
      this.getHomeData()
    },
    methods: {

      randomize(subjects) {
        return _.map(subjects, 'degree')
      },
      getHomeData() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.GET_STUDENT_HOME_DATA)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.absence_statistic = response.data.absence_statistic;
                vm.pie.legend.data = [vm.$ml.get('late'), vm.$ml.get('present'), vm.$ml.get('absence')]
                vm.pie.series[0].data = [
                  {value: response.data.absence_statistic.late, name: vm.$ml.get('late')},
                  {value: response.data.absence_statistic.present, name: vm.$ml.get('present')},
                  {value: response.data.absence_statistic.absence, name: vm.$ml.get('absence')},
                ]

                _.each(response.data.subjectGrouped, (subject, key) => {
                  let data = vm.randomize(subject);
                  data.unshift(key)
                  vm.bar.dataset.source.push(data)
                })
                vm.leaveNumber = response.data.leaveNumber;
                vm.examNumber = response.data.examNumber;
                vm.vacationNumber = response.data.vacationNumber;
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

    }
  }
</script>

<style lang="scss">
  #dashboard-analytics {
    .greet-user {
      position: relative;

      .decore-left {
        position: absolute;
        left: 0;
        top: 0;
      }

      .decore-right {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    @media(max-width: 576px) {
      .decore-left, .decore-right {
        width: 140px;
      }
    }
  }
</style>
