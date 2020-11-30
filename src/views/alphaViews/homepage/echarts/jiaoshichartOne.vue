<template>
  <div class="app-container">
    <div content="title">
      <span style="font-weight: bolder;font-size: 18px">教师绩效分布详情图</span>
    </div>
    <div class="content">
      <div id="test" style="width:1400px;height: 400px" />
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
export default {
  name: 'IntegrationSumChart',
  data() {
    return {
      option: {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['基本工作', '完成教学工作情况', '完成教育工作情况', '汇报课、观摩课、研究课情况', '组织课外活动情况', '参加系统进修或继续教育情况', '指导、 培养教师情况', '绩效工作', '学术成果', '项目课题', '学术经验与讲座', '教育教学评比竞赛', '研究课', '教育教学成果', '教师指导学生参加学科竞赛获奖情况', '艺科体社团']
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
              { value: 835, name: '基本工作', selected: true },
              { value: 1948, name: '绩效工作' }
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
              { value: 335, name: '完成教学工作情况' },
              { value: 100, name: '完成教育工作情况' },
              { value: 100, name: '汇报课、观摩课、研究课情况' },
              { value: 100, name: '组织课外活动情况' },
              { value: 100, name: '参加系统进修或继续教育情况' },
              { value: 100, name: '指导、 培养教师情况' },
              { value: 1048, name: '学术成果' },
              { value: 251, name: '项目课题' },
              { value: 147, name: '学术经验与讲座' },
              { value: 102, name: '教育教学评比竞赛' },
              { value: 100, name: '研究课' },
              { value: 100, name: '教育教学成果' },
              { value: 100, name: '教师指导学生参加学科竞赛获奖情况' },
              { value: 100, name: '艺科体社团' }
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
      this.chart = echarts.init(document.getElementById('test'), 'macarons')
      this.chart.setOption(this.option)
    }
  }
}
</script>

<style scoped>
  .content{
    padding-top: 20px;
  }

</style>
