<template>
    <div class="app-container">
      <div class="content">
        <div id="per_one" style="width:100%;height: 400px" />
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { getTeacherAbilityRadarData } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartOne",
      data() {
        return {
          option: {
            title: {
              text: '教师能力指标雷达图',
              top: '20',
              left: 'center',
              textStyle: {
                fontSize: '15'
              }
            },
            legend: {
              data: ['标准值','当前值'],
              y:'bottom'
            },
            radar: [
              {
                indicator: [
                  { text: '教学与专业' },
                  { text: '学生管理' },
                  { text: '科研与社会服务' },
                  { text: '个人发展' }
                ],
                center: ['50%', '50%'],
                radius: 90,
                startAngle: 0,
                splitNumber: 5,
                shape: 'circle',
                name: {
                  formatter: '【{value}】',
                  textStyle: {
                    color: '#72ACD1'
                  }
                },
                splitArea: {
                  areaStyle: {
                    color: ['rgba(114, 172, 209, 0.2)',
                      'rgba(114, 172, 209, 0.4)', 'rgba(114, 172, 209, 0.6)',
                      'rgba(114, 172, 209, 0.8)', 'rgba(114, 172, 209, 1)'],
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                  }
                },
                splitLine: {
                  lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              }
            ],
            series: [
              {
                name: '雷达图',
                type: 'radar',
                emphasis: {
                  lineStyle: {
                    width: 4
                  }
                },
                data: [
                  {
                    value: [],
                    name: '标准值',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                      type: 'dashed'
                    }
                  },
                  {
                    value: [],
                    name: '当前值',
                    areaStyle: {
                      color: 'rgba(255, 255, 255, 0.5)'
                    }
                  }
                ]
              }
            ]
          }
        }
      },
      mounted() {
        this.getEchartData()
        setTimeout(()=>{
          this.initChart()
        },500)
      },
      methods: {
        initChart: function() {
          this.chart = echarts.init(document.getElementById('per_one'), 'macarons')
          this.chart.setOption(this.option)
          // window.addEventListener("resize",function (){
          //   this.chart.resize;
          // });
        },
        chartRes() {
          let _this = this;
          window.addEventListener('resize', function () {
            let w = document.getElementById("per_one").offsetWidth
            let h = document.getElementById("per_one").offsetHeight
            let resize = {
              width: w,
              height: h
            }
            // _this.myChart1.resize();
            setTimeout(() => {
              _this.chart.resize(resize);
            },100)
            console.log('111')
          })
        },
        getEchartData: function () {
          const prams = {
            // tecUsername: 'rmyzAdmin',
            tecUsername: localStorage.getItem('jwt'),
            authority: '人事处主管'
          }
          getTeacherAbilityRadarData(prams).then(resposne => {
            console.log('人事处主管测试获取雷达图数据')
            console.log(resposne.data)
            this.option.series[0].data[0].value.push(resposne.data.data.standardValue.teachAndMajorDevStandardNums)
            this.option.series[0].data[0].value.push(resposne.data.data.standardValue.stuManageWorkStandardNums)
            this.option.series[0].data[0].value.push(resposne.data.data.standardValue.sciAndSocialServiceSandardNums)
            this.option.series[0].data[0].value.push(resposne.data.data.standardValue.personnelDevStandardNums)
            // console.log(resposne.data.data.currentValue)
            this.option.series[0].data[1].value.push(resposne.data.data.currentValue.teachAndMajorDevTotalNums)
            this.option.series[0].data[1].value.push(resposne.data.data.currentValue.stuManageWorkTotalNums)
            this.option.series[0].data[1].value.push(resposne.data.data.currentValue.sciAndSocialServiceTotalNums)
            this.option.series[0].data[1].value.push(resposne.data.data.currentValue.personnelDevTotalNums)
          })
        }
      }
    }
</script>

<style scoped>

</style>
