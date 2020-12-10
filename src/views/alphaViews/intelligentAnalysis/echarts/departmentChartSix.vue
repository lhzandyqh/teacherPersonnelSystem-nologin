<template>
    <div class="app-container">
      <div class="content">
        <div id="huan_four" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartThree",
      data() {
        return {
          option: {
            title: {
              text: '高级职称教师比',
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
              data: ['是', '否']
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
                  {value: 45, name: '是'},
                  {value: 193, name: '否'}
                ]
              }
            ]
          }
        }
      },
      mounted() {
        this.initChart()
      },
      methods: {
        initChart: function() {
          this.chart = echarts.init(document.getElementById('huan_four'), 'macarons')
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
