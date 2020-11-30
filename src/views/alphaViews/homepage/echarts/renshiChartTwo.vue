<template>
  <el-row>
    <el-row>
      <span style="font-weight: bolder">教职工部门分布</span>
    </el-row>
    <div id="renshi_chart_two" style="height: 600px" />
  </el-row>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
export default {
  name: 'RenshiChartTwo',
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          // eslint-disable-next-line no-sparse-arrays
          data: ['党群系统', '党委办公室', '党委组织部', '党委宣传部', '学工部', '纪检监察室', '人武部', '团委',,
            '行政系统', '学院办公室', '人事处', '财务处', '保卫处', '科研与产学合作处', '高教研究所', '发展办',
            '二级学院', '临床医学系', '中医与药学系', '护理系', '口腔医学系',]
        },
        series: [
          {
            name: '',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 835, name: '党群系统', selected: true },
              { value: 1948, name: '二级学院' },
              { value: 342, name: '行政系统' }
            ]
          },
          {
            name: '',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#ffffff',
                borderColor: '#aaa',
                borderWidth: 0,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 10
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 5, name: '党委办公室' },
              { value: 7, name: '党委组织部' },
              { value: 7, name: '党委宣传部' },
              { value: 8, name: '学工部' },
              { value: 5, name: '纪检监察室' },
              { value: 4, name: '人武部' },
              { value: 5, name: '团委' },
              { value: 5, name: '学院办公室' },
              { value: 7, name: '人事处' },
              { value: 7, name: '财务处' },
              { value: 23, name: '保卫处' },
              { value: 15, name: '科研与产学合作处' },
              { value: 10, name: '高教研究所' },
              { value: 10, name: '发展办' },
              { value: 47, name: '临床医学系' },
              { value: 54, name: '口腔医学系' },
              { value: 45, name: '护理系' },
              { value: 42, name: '中医与药学系' },
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
      this.chart = echarts.init(document.getElementById('renshi_chart_two'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>

</style>
