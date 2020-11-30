<template>
  <div class="app-container">
    <el-row>
      <div id="chart_seven" style="height: 300px" />
    </el-row>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'OverviewChartOne',
  data() {
    return {
      option: {
        title: {
          text: '本院教师绩效情况对比'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['科研任务/项目', '论文', '授课']
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        xAxis: [
          {
            type: 'category',
            data: ['王老师', '刘老师', '李老师', '程老师', '吴老师', '张老师', '蒋老师', '陈老师', '何老师', '贺老师', '邓老师', '赵老师']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '科研任务/项目',
            type: 'bar',
            data: [2, 4, 7, 12, 16, 8, 13, 12, 3, 20, 14, 13],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '论文',
            type: 'bar',
            data: [26, 29, 14, 24, 27, 17, 16, 18, 17, 18, 16, 23],
            markPoint: {
              data: [
                { name: '年最高', value: 182, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 23, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
          },
          {
            name: '授课',
            type: 'bar',
            data: [13, 14, 20, 18, 17, 12, 11, 10, 14, 18, 16, 13],
            markPoint: {
              data: [
                { name: '年最高', value: 182, xAxis: 7, yAxis: 183 },
                { name: '年最低', value: 23, xAxis: 11, yAxis: 3 }
              ]
            },
            markLine: {
              data: [
                { type: 'average', name: '平均值' }
              ]
            }
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
      this.chart = echarts.init(document.getElementById('chart_seven'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
