<template>
    <div class="app-container">
      <div class="content">
        <div id="huan_one" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
  import { getTeacherStudentEchartsData } from '@/api/allChangeAnalysis'
    export default {
      name: "departmentChartThree",
      data() {
        return {
          option: {
            title: {
              text: '师生比',
              top: '20',
              left: 'center',
              textStyle: {
                fontSize: '15'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b}: {c} ({d}%)'
            },
            legend: {
              orient: 'vertical',
              left: 10,
              data: ['教师', '学生']
            },
            series: [
              {
                name: '总人数',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                },
                labelLine: {
                  show: false
                },
                data: [
                  {value: 150, name: '教师'},
                  {value: 850, name: '学生'}
                ]
              }
            ]
          }
        }
      },
      mounted() {
        this.getChartData()
        // this.initChart()
        setTimeout(()=> {
          this.initChart()
        },500)
      },
      methods: {
        getChartData: function() {
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '系部主管'
          }
          getTeacherStudentEchartsData(prams).then(response => {
            console.log('系部主管测试获取师生比图的数据')
            console.log(response.data)
            this.option.series[0].data[0].value = response.data.data.studentNums
            this.option.series[0].data[1].value = response.data.data.teacherNums
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('huan_one'), 'macarons')
          this.chart.setOption(this.option)
          // window.addEventListener("resize",function (){
          //   this.chart.resize;
          // });
        }
      }
    }
</script>

<style scoped>

</style>
