<template>
  <div class="">
    <div id="testtwo" style="width: 600px;height:600px;"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: "testEchartOne",
  data(){
    return{
      option:{
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      }
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      this.chart = echarts.init(document.getElementById('testtwo'), 'macarons')
      this.chart.setOption(this.option)
    }
  },
}
</script>

<style scoped>

</style>
