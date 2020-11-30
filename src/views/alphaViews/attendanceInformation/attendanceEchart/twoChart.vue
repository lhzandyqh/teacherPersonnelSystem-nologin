<template>
  <div class="app-container">
    <el-row>
      <div id="twochart" style="width:500px;height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'twoChart',
  data() {
    return {
      option: {
        title: {
          text: '九月考勤信息分析',//主标题
          // subtext: '纯属虚构',//副标题
          x:'center',//x轴方向对齐方式
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          bottom: '0',
          data: ['已出勤', '迟到', '出差', '早退', '旷工', '休息']
        },
        series: [
          {
            name: '考勤信息',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'outside'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: true
            },
            data: [
              { value: 22, name: '已出勤' },
              { value: 2, name: '迟到' },
              { value: 3, name: '出差' },
              { value: 2, name: '早退' },
              { value: 1, name: '旷工' },

              { value: 5, name: '休息' },
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
      this.chart = echarts.init(document.getElementById('twochart'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
