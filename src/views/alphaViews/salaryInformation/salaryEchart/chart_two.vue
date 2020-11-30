<template>
  <div class="app-container">
    <el-row>
      <div id="chart_two" style="width:100%;height: 400px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
name: "chart_two",
  data() {
    return {
      option:{
        title : {
          text: '年度工资信息',//主标题
          // subtext: '纯属虚构',//副标题
          x:'left',//x轴方向对齐方式
        },
        tooltip: {              //设置tip提示
          trigger: 'axis'
        },
        legend: {               //设置区分（哪条线属于什么）
          data:['实发工资','应发工资','个人所得税']
        },
        color: ['#8AE09F', '#FA6F53'],       //设置区分（每条线是什么颜色，和 legend 一一对应）
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            nameTextStyle: {        //坐标轴名称的文字样式
              color: '#FA6F53',
              fontSize: 16,
              padding: [0, 0, 0, 20]
            },
            axisLine: {             //坐标轴轴线相关设置。
              lineStyle: {
                color: '#FA6F53',
              }
            }
          }
        ],
        grid:{
            top:'50',
            x:'45',
        },
        yAxis: {
          nameTextStyle: {
            color: '#FA6F53',
            fontSize: 16,
            padding: [0, 0, 10, 0]
          },
          axisLine: {
            lineStyle: {
              color: '#FA6F53',
            }
          },
          type: 'value'
        },
        series: [
          {
            name: '实发工资',
            data:  [6000, 5000, 4700, 4300, 5000, 6200, 5800,5900,4900,6100,4900,5000],
            type: 'line',               // 类型为折线图
            lineStyle: {                // 线条样式 => 必须使用normal属性
              normal: {
                color: '#8AE09F',
              }
            },
          },
          {
            name: '应发工资',
            data:  [12000, 10000, 9700, 7300, 11000, 12200, 9800,12900,8900,12100,12500,10200],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#FA6F53',
              }
            },
          },
          {
            name: '个人所得税',
            data: [1500, 1200, 1120, 980, 1270, 1110, 1130,981,1021,1300,1129,1000],
            type: 'line',
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
      this.chart = echarts.init(document.getElementById('chart_two'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
