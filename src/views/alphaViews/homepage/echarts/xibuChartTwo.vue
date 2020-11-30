<template>
  <div class="app-container">
    <div id="xibu_two" style="height: 300px" />
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
          text: '本院教职工情况分布',
          left: 'left'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'right',
          data: ['男性', '女性', '20岁-30岁', '30岁-40岁', '40岁-50岁', '50岁-60岁', '60岁以上',
            '在编', '长休', '返聘', '编外聘用', '劳务派遣']
        },
        series: [
          {
            name: '性别',
            type: 'pie',
            radius: '55%',
            center: ['20%', '60%'],
            data: [
              { value: 20, name: '男性' },
              { value: 13, name: '女性' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '年龄段',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 3, name: '20岁-30岁' },
              { value: 12, name: '30岁-40岁' },
              { value: 7, name: '40岁-50岁' },
              { value: 3, name: '50岁-60岁' },
              { value: 2, name: '60岁以上' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name: '合同类型',
            type: 'pie',
            radius: '55%',
            center: ['75%', '60%'],
            data: [
              { value: 20, name: '在编' },
              { value: 1, name: '长休' },
              { value: 1, name: '返聘' },
              { value: 5, name: '编外聘用' },
              { value: 2, name: '劳务派遣' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
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
      this.chart = echarts.init(document.getElementById('xibu_two'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>

