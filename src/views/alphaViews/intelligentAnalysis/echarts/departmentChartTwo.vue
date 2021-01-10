<template>
  <div class="app-container">
    <div class="content">
      <div id="zhuguanjixiao" style="width:100%;height: 450px" />
    </div>
  </div>
</template>

<script>
  import echarts from 'echarts'
  import { geTeacherWorkStatistic } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "departmentChartTwo",
      data() {
        return {
          option:{
            title: {
              text: '教师工作统计图',
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
              x: 'right',
              data: ['教学与专业发展','指导学生实训情况','指导学生毕业设计','教育教学获奖情况','参与建设情况','参与教研项目情况','参与编写教材情况','科研与社会服务','参与课题情况','学术成果情况','科研成果获奖情况','社会培训情况','社会实践（兼职）情况','学生管理工作','承担辅导员工作','指导社团获奖情况','帮扶学生情况']
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
                  { value: 835, name: '教学与专业发展', selected: true },
                  { value: 1948, name: '科研与社会服务' },
                  { value: 1948, name: '学生管理工作' }
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
                  { value: 335, name: '指导学生实训情况' },
                  { value: 100, name: '指导学生毕业设计' },
                  { value: 100, name: '教育教学获奖情况' },
                  { value: 100, name: '参与建设情况' },
                  { value: 100, name: '参与教研项目情况' },
                  { value: 100, name: '参与编写教材情况' },
                  { value: 1048, name: '参与课题情况' },
                  { value: 251, name: '学术成果情况' },
                  { value: 147, name: '科研成果获奖情况' },
                  { value: 102, name: '社会培训情况' },
                  { value: 100, name: '社会实践（兼职）情况' },
                  { value: 100, name: '承担辅导员工作' },
                  { value: 100, name: '指导社团获奖情况' },
                  { value: 100, name: '帮扶学生情况' }
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
        getEchartData: function() {
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt'),
            authority: '系部主管'
          }
          geTeacherWorkStatistic(prams).then(response=> {
            console.log('系部主管权限获取图的数据')
            console.log(response.data.data)
            this.option.series[0].data[0].value = response.data.data.teachAndMajorDevJsonObject.teachAndMajorDevTotalNums
            this.option.series[0].data[1].value = response.data.data.sciAndSocialServiceJsonObject.sciAndSocialServiceTotalNums
            this.option.series[0].data[2].value = response.data.data.stuManageWork.stuManageWorkTotalNums
            this.option.series[1].data[0].value = response.data.data.teachAndMajorDevJsonObject.teaInstructStuTrainingInfoNums
            this.option.series[1].data[1].value = response.data.data.teachAndMajorDevJsonObject.teaInstructStuGradInfoNums
            this.option.series[1].data[2].value = response.data.data.teachAndMajorDevJsonObject.teaEduAwardInfoNums
            this.option.series[1].data[3].value = response.data.data.teachAndMajorDevJsonObject.teaParticiConstructInfoNums
            this.option.series[1].data[4].value = response.data.data.teachAndMajorDevJsonObject.teaParticiTeachResearchInfoNums
            this.option.series[1].data[5].value = response.data.data.teachAndMajorDevJsonObject.teaParticiCompileTextbookInfoNums
            this.option.series[1].data[6].value = response.data.data.sciAndSocialServiceJsonObject.teaParticiResearchPrjInfoNums
            this.option.series[1].data[7].value = response.data.data.sciAndSocialServiceJsonObject.teaPaperInfoNums
            this.option.series[1].data[8].value = response.data.data.sciAndSocialServiceJsonObject.teaSciAchieveInfoNums
            this.option.series[1].data[9].value = response.data.data.sciAndSocialServiceJsonObject.teaSocialTrainInfoNums
            this.option.series[1].data[10].value = response.data.data.sciAndSocialServiceJsonObject.teaSocialPracticeInfoNums
            this.option.series[1].data[11].value = response.data.data.stuManageWork.teaBeCounselorInfoNums
            this.option.series[1].data[12].value = response.data.data.stuManageWork.teaInstructClubNums
            this.option.series[1].data[13].value = response.data.data.stuManageWork.teaAssistStuNums
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('zhuguanjixiao'), 'macarons')
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
