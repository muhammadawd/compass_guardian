<template>
  <div>
    <div class="vx-row">
      <div class="vx-col md:w-1/4 mb-base">
        <h3 class="text-bold text-center">{{$ml.get('top_absense_students')}}</h3>
        <e-charts autoresize :options="topStudentAbsencelineChart" ref="pie" auto-resize/>

      </div>
      <div class="vx-col md:w-3/4 mb-base">
        <h3 class="text-bold text-center">{{$ml.get('student_count_term')}}</h3>
        <e-charts autoresize :options="studentStages" theme="ovilia-green" ref="line" auto-resize/>

      </div>
    </div>
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
  import 'echarts/lib/component/tooltip'
  import 'echarts/lib/component/legend'
  import 'echarts/lib/chart/line'

  export default {
    data() {
      return {
        topStudentAbsence: [],
        stages: [],
        studentStages: {

          // Make gradient line here
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }],
          tooltip: {
            trigger: 'axis'
          },
          xAxis: {
            data: ['test', 'test']
          },
          yAxis: {
            splitLine: {show: false},
          },
          series: {
            type: 'line',
            showSymbol: false,
            data: []
          }
        },

        topStudentAbsencelineChart: {
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
              name: 'مرات الغياب',
              type: 'pie',
              radius: '55%',
              center: ['50%', '60%'],
              color: ['#FF9F43', '#28C76F', '#42a4f6', '#2e2e2e', '#EA5455'],
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
      }
    },
    components: {
      ECharts,
      VueApexCharts,
      StatisticsCardLine
    },
    mounted() {
      let auth_data = JSON.parse(window.ls.getFromStorage('auth_data'));
      if (auth_data.type == 'student') {
        this.$router.push({name: 'home_student'})
      } else if (auth_data.type == 'teacher') {
        this.$router.push({name: 'home_teacher'})
      } else {
        console.log('i\'m here')
      }

      this.getHomeData();
    },
    methods: {
      pieAnimation() {

        let vm = this;
        let dataIndex = -1
        let pie = vm.$refs.pie

        let dataLen = pie.options.series[0].data.length
        let Interval = setInterval(() => {
          pie.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex
          })
          dataIndex = (dataIndex + 1) % dataLen
          pie.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex
          })
          pie.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex
          })
        }, 1000);

        setTimeout(() => {
          clearInterval(Interval)
        }, 5500)
      },
      getHomeData() {
        let vm = this;
        vm.$root.$children[0].$refs.loader.show_loader = true;
        try {
          window.serviceAPI.API().get(window.serviceAPI.GET_ADMIN_HOME_DATA)
            .then((response) => {
              vm.$root.$children[0].$refs.loader.show_loader = false;
              response = response.data;
              if (response.status) {
                vm.stages = response.data.stages;
                vm.topStudentAbsence = response.data.topStudentAbsence;
                // vm.topStudentAbsencelineChart.legend.data = [vm.$ml.get('late'), vm.$ml.get('present'), vm.$ml.get('absence')]
                // vm.topStudentAbsencelineChart.series[0].data = [
                //   {value: response.data.absence_statistic.late, name: vm.$ml.get('late')},
                //   {value: response.data.absence_statistic.present, name: vm.$ml.get('present')},
                //   {value: response.data.absence_statistic.absence, name: vm.$ml.get('absence')},
                // ]
                let dataPie = _.map(vm.topStudentAbsence, (item) => {
                  return {
                    name: item.student ? item.student.name : '',
                    value: item.absence_count,
                  };
                })
                vm.topStudentAbsencelineChart.legend.data = _.map(dataPie, 'name')
                vm.topStudentAbsencelineChart.series[0].data = dataPie
                //
                let xData = _.map(vm.stages, 'translated.title')
                let yData = _.map(vm.stages, 'students_count')
                vm.studentStages.xAxis.data = (xData)
                vm.studentStages.series.data = (yData)
                vm.pieAnimation()
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
