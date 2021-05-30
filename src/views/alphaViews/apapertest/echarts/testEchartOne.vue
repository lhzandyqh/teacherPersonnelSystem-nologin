<template>
  <div class="">
    <div id="testone" style="width: 600px;height:600px;"></div>
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
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'line',
          crossStyle: {
            color: '#999'
          }
        }
      },
      title: {
        // text: 'WORLD COFFEE RESEARCH SENSORY LEXICON',
        // subtext: 'Source: https://worldcoffeeresearch.org/work/sensory-lexicon/',
        textStyle: {
          fontSize: 24,
          align: 'center'
        },
        subtextStyle: {
          align: 'center'
        },
        // sublink: 'https://worldcoffeeresearch.org/work/sensory-lexicon/'
      },
      series: {
        type: 'sunburst',
        highlightPolicy: 'ancestor',
        data: [{
          name: '材料工程系',
          children: [{
            name: '邓老师',
            value: 15,
            children: [{
              name: '科研项目',
              value: 2
            }, {
              name: '学术论文',
              value: 5
            }, {
              name: '专利',
              value: 4
            }, {
              name: '专著',
              value: 4
            }]
          }, {
            name: '杨老师',
            value: 7,
            children: [{
              name: '科研项目',
              value: 3
            }, {
              name: '学术论文',
              value: 1
            }, {
              name: '专利',
              value: 2
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '李老师',
            value: 6,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '胡老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '付老师',
            value: 14,
            children: [
              {
                name: '科研项目',
                value: 6
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '刘老师',
            value: 5,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '赵老师',
            value: 4,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '詹老师',
            value: 5,
            children: [
              {
                name: '科研项目',
                value: 3
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '欧阳老师',
            value: 5,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 0
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '成老师',
            value: 4,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '李老师',
            value: 12,
            children: [
              {
                name: '科研项目',
                value: 7
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 2
              }]
          }, {
            name: '胡老师',
            value: 4,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 2
              }]
          }]
        }, {
          name: '机电工程系',
          children: [{
            name: '肖老师',
            value: 20,
            children: [{
              name: '科研项目',
              value: 10
            }, {
              name: '学术论文',
              value: 7
            }, {
              name: '专利',
              value: 1
            }, {
              name: '专著',
              value: 2
            }]
          },{
            name: '左老师',
            value: 22,
            children: [{
              name: '科研项目',
              value: 12
            }, {
              name: '学术论文',
              value: 10
            }, {
              name: '专利',
              value: 1
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '谭老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 6
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '彭老师',
            value: 16,
            children: [
              {
                name: '科研项目',
                value: 10
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '欧老师',
            value: 5,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '秦老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '杨老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 10
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '杨老师',
            value: 4,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '王老师',
            value: 20,
            children: [
              {
                name: '科研项目',
                value: 12
              }, {
                name: '学术论文',
                value: 3
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 4
              }]
          }]
        }, {
          name: '计算机技术系',
          children: [{
            name: '刘老师',
            value: 20,
            children: [{
              name: '科研项目',
              value: 13
            }, {
              name: '学术论文',
              value: 4
            }, {
              name: '专利',
              value: 2
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '李老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 10
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 0
              }]
          }, {
            name: '陈老师',
            value: 12,
            children: [
              {
                name: '科研项目',
                value: 5
              }, {
                name: '学术论文',
                value: 5
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '骆老师',
            value: 11,
            children: [
              {
                name: '科研项目',
                value: 4
              }, {
                name: '学术论文',
                value: 4
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 2
              }]
          }, {
            name: '罗老师',
            value: 27,
            children: [
              {
                name: '科研项目',
                value: 19
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '易老师',
            value: 24,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 15
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '杨老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 8
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 3
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '刘老师',
            value: 16,
            children: [
              {
                name: '科研项目',
                value: 8
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }]
        }, {
          name: '环境与化学工程系',
          children: [{
            name: '李老师',
            children: [{
              name: '科研项目',
              value: 1
            }, {
              name: '学术论文',
              value: 1
            }, {
              name: '专利',
              value: 1
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '杨老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '程老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '立老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '郭老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '孙老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '楚老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 4
              }, {
                name: '专著',
                value: 3
              }]
          }]
        }, {
          name: '信息工程与自动化系',
          children: [{
            name: '刘老师',
            value: 17,
            children: [{
              name: '科研项目',
              value: 13
            }, {
              name: '学术论文',
              value: 2
            }, {
              name: '专利',
              value: 1
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '赵老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 4
              }, {
                name: '学术论文',
                value: 4
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '赵老师',
            value: 6,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 4
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '邓老师',
            value: 18,
            children: [
              {
                name: '科研项目',
                value: 16
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 0
              }]
          }, {
            name: '周老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 12
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '郑老师',
            value: 13,
            children: [
              {
                name: '科研项目',
                value: 4
              }, {
                name: '学术论文',
                value: 4
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '王老师',
            value: 11,
            children: [
              {
                name: '科研项目',
                value: 8
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '兵老师',
            value: 6,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 5
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 0
              }]
          }, {
            name: '祁老师',
            value: 14,
            children: [
              {
                name: '科研项目',
                value: 8
              }, {
                name: '学术论文',
                value: 3
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 1
              }]
          }]
        }, {
          name: '建筑工程系',
          children: [{
            name: '赵老师',
            value: 15,
            children: [{
              name: '科研项目',
              value: 12
            }, {
              name: '学术论文',
              value: 1
            }, {
              name: '专利',
              value: 1
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '谭老师',
            value: 9,
            children: [
              {
                name: '科研项目',
                value: 6
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '贺老师',
            value: 4,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 0
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '徐老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 12
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '李老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 8
              }, {
                name: '学术论文',
                value: 4
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '钱老师',
            value: 19,
            children: [
              {
                name: '科研项目',
                value: 13
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 2
              }]
          }, {
            name: '许老师',
            value: 8,
            children: [
              {
                name: '科研项目',
                value: 6
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 0
              }]
          }, {
            name: '杨老师',
            value: 19,
            children: [
              {
                name: '科研项目',
                value: 11
              }, {
                name: '学术论文',
                value: 4
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 3
              }]
          }]
        }, {
          name: '经济贸易系',
          children: [{
            name: '刘老师',
            value: 8,
            children: [{
              name: '科研项目',
              value: 5
            }, {
              name: '学术论文',
              value: 2
            }, {
              name: '专利',
              value: 0
            }, {
              name: '专著',
              value: 1
            }]
          }, {
            name: '龙老师',
            value: 6,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 2
              }]
          }, {
            name: '何老师',
            value: 3,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '邓老师',
            value: 16,
            children: [
              {
                name: '科研项目',
                value: 12
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '周老师',
            value: 18,
            children: [
              {
                name: '科研项目',
                value: 12
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 6
              }]
          }, {
            name: '温老师',
            value: 10,
            children: [
              {
                name: '科研项目',
                value: 6
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '刘老师',
            value: 5,
            children: [
              {
                name: '科研项目',
                value: 2
              }, {
                name: '学术论文',
                value: 1
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }]
        }, {
          name: '基础教学部',
          children: [{
            name: '霍老师',
            value: 25,
            children: [{
              name: '科研项目',
              value: 2
            }, {
              name: '学术论文',
              value: 14
            }, {
              name: '专利',
              value: 1
            }, {
              name: '专著',
              value: 8
            }]
          }, {
            name: '胡老师',
            value: 15,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 13
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 0
              }]
          }, {
            name: '文老师',
            value: 16,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 14
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 1
              }]
          }, {
            name: '李老师',
            value: 6,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '杨老师',
            value: 9,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 6
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '周老师',
            value: 11,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 6
              }, {
                name: '专利',
                value: 1
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '陈老师',
            value: 5,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 2
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '罗老师',
            value: 16,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 10
              }, {
                name: '专利',
                value: 2
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '詹老师',
            value: 8,
            children: [
              {
                name: '科研项目',
                value: 0
              }, {
                name: '学术论文',
                value: 5
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }, {
            name: '钱老师',
            value: 7,
            children: [
              {
                name: '科研项目',
                value: 1
              }, {
                name: '学术论文',
                value: 3
              }, {
                name: '专利',
                value: 0
              }, {
                name: '专著',
                value: 3
              }]
          }]
        }],
        radius: [0, '95%'],
        sort: null,
        levels: [{}, {
          r0: '15%',
          r: '35%',
          itemStyle: {
            borderWidth: 2
          },
          label: {
            rotate: 'tangential'
          }
        }, {
          r0: '35%',
          r: '70%',
          label: {
            align: 'right'
          }
        }, {
          r0: '70%',
          r: '72%',
          label: {
            position: 'outside',
            padding: 3,
            silent: false,
            fontSize: '18'
          },
          itemStyle: {
            borderWidth: 3
          }
        }]
      }
    }
  }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart: function() {
      console.log('生成test1')
      this.chart = echarts.init(document.getElementById('testone'), 'macarons')
      // this.chart = echarts.init(document.getElementById('testone'))
      this.chart.setOption(this.option)
    }
  },
}
</script>

<style scoped>

</style>
