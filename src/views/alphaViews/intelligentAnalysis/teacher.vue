<template>
    <div class="app-container">
      <div>
        <div class="score_title">
          <span>考核得分</span>
        </div>
        <div class="assessment_score_con">
          <div class="score_item ">
            <div class="logo_con">
              <img class="shide_bg" src="../../../assets/icon/shide.png">
            </div>
            <div class="sco_con">
              <div class="sco_one_layer">
                <span>师德考核得分</span>
              </div>
              <div class="sco_two_layer">
                <span>96.5(第12名)</span>
              </div>
            </div>
          </div>
          <div class="score_item">
            <div class="logo_con">
              <img class="niandu_bg" src="../../../assets/icon/niandu.png">
            </div>
            <div class="sco_con">
              <div class="sco_one_layer">
                <span>年度考核得分</span>
              </div>
              <div class="sco_two_layer">
                <span>96.5(第12名)</span>
              </div>
            </div>
          </div>
          <div class="score_item">
            <div class="logo_con">
              <img class="dudao_bg" src="../../../assets/icon/dudao.png">
            </div>
            <div class="sco_con">
              <div class="sco_one_layer">
                <span>督导考核得分</span>
              </div>
              <div class="sco_two_layer">
                <span>96.5(第12名)</span>
              </div>
            </div>
          </div>
          <div class="score_item">
            <div class="logo_con">
              <img class="xuesheng_bg" src="../../../assets/icon/xuesheng.png">
            </div>
            <div class="sco_con">
              <div class="sco_one_layer">
                <span>学生考核得分</span>
              </div>
              <div class="sco_two_layer">
                <span>96.5(第12名)</span>
              </div>
            </div>
          </div>
        </div>
        <div class="score_title control_margin">
          <span>画像分析</span>
        </div>
        <div class="echart_con" style="width: 100%">
          <div class="echart_one" style="width: 30%;float: left" >
            <div class="content" style="width: 100%" >
              <div id="leida" style="width:100%;height: 450px" />
            </div>
          </div>
          <div class="echart_Two" style="width: 70%;float: left" >
            <div class="content">
              <div id="gongzuo" style="width:100%;height: 450px" />
            </div>
          </div>
        </div>
<!--        <div class="juli">-->
<!--          ddd-->
<!--        </div>-->
      </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import { geTeacherWorkStatistic } from '@/api/allChangeAnalysis'
  require('echarts/theme/macarons') // echarts theme
    export default {
      name: "teacher",
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
                radius: 120,
                startAngle: 90,
                splitNumber: 4,
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
                    value: [84, 62, 73, 80],
                    name: '标准值',
                    symbol: 'rect',
                    symbolSize: 5,
                    lineStyle: {
                      type: 'dashed'
                    }
                  },
                  {
                    value: [90, 52, 43, 53],
                    name: '当前值',
                    areaStyle: {
                      color: 'rgba(255, 255, 255, 0.5)'
                    }
                  }
                ]
              }
            ]
          },
          optionTwo: {
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
        this.initChart()
        // this.initChartTwo()
        setTimeout(()=>{
          this.initChartTwo()
        },500)
      },
      methods: {
        getEchartData: function() {
          const prams = {
            // tecUsername: 'rmyzAdmin',
            tecUsername: localStorage.getItem('jwt'),
            authority: '教师'
          }
          geTeacherWorkStatistic(prams).then(response=> {
            console.log('获取教师权限获取图的数据')
            console.log(response.data.data)
            this.optionTwo.series[0].data[0].value = response.data.data.teachAndMajorDevJsonObject.teachAndMajorDevTotalNums
            this.optionTwo.series[0].data[1].value = response.data.data.sciAndSocialServiceJsonObject.sciAndSocialServiceTotalNums
            this.optionTwo.series[0].data[2].value = response.data.data.stuManageWork.stuManageWorkTotalNums
            this.optionTwo.series[1].data[0].value = response.data.data.teachAndMajorDevJsonObject.teaInstructStuTrainingInfoNums
            this.optionTwo.series[1].data[1].value = response.data.data.teachAndMajorDevJsonObject.teaInstructStuGradInfoNums
            this.optionTwo.series[1].data[2].value = response.data.data.teachAndMajorDevJsonObject.teaEduAwardInfoNums
            this.optionTwo.series[1].data[3].value = response.data.data.teachAndMajorDevJsonObject.teaParticiConstructInfoNums
            this.optionTwo.series[1].data[4].value = response.data.data.teachAndMajorDevJsonObject.teaParticiTeachResearchInfoNums
            this.optionTwo.series[1].data[5].value = response.data.data.teachAndMajorDevJsonObject.teaParticiCompileTextbookInfoNums
            this.optionTwo.series[1].data[6].value = response.data.data.sciAndSocialServiceJsonObject.teaParticiResearchPrjInfoNums
            this.optionTwo.series[1].data[7].value = response.data.data.sciAndSocialServiceJsonObject.teaPaperInfoNums
            this.optionTwo.series[1].data[8].value = response.data.data.sciAndSocialServiceJsonObject.teaSciAchieveInfoNums
            this.optionTwo.series[1].data[9].value = response.data.data.sciAndSocialServiceJsonObject.teaSocialTrainInfoNums
            this.optionTwo.series[1].data[10].value = response.data.data.sciAndSocialServiceJsonObject.teaSocialPracticeInfoNums
            this.optionTwo.series[1].data[11].value = response.data.data.stuManageWork.teaBeCounselorInfoNums
            this.optionTwo.series[1].data[12].value = response.data.data.stuManageWork.teaInstructClubNums
            this.optionTwo.series[1].data[13].value = response.data.data.stuManageWork.teaAssistStuNums
          })
        },
        initChart: function() {
          this.chart = echarts.init(document.getElementById('leida'), 'macarons')
          this.chart.setOption(this.option)
          window.addEventListener("resize",function (){
            this.chart.resize;
          });
        },
        initChartTwo: function() {
          this.chart = echarts.init(document.getElementById('gongzuo'), 'macarons')
          this.chart.setOption(this.optionTwo)
          // window.onresize = this.chart.resize;
          window.addEventListener("resize",function (){
            this.chart.resize;
          });
        }
      }
    }
</script>

<style scoped>
  .assessment_score_con{
    height: 200px;
    width: 100%;
    /*background-color: pink;*/
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .score_title span {
    font-size: 15px;
    font-weight: bolder;
    color: #00a4ff;
  }
  .score_item {
    margin-top: 30px;
    height: 140px;
    width: 320px;
    /*background-color: #999999;*/
  }
  .shide_bg {
    background-color: #00a4ff;
  }
  .niandu_bg {
    background-color: #12d1f3;
  }
  .dudao_bg {
    background-color: #39cdbb;
  }
  .xuesheng_bg {
    background-color: #ff6258;
  }
  .logo_con img {
    float: left;
    height: 100px;
    width: 100px;
    margin-top: 20px;
    /*background-color: #00a4ff;*/
  }
  .sco_con {
    float: left;
    height: 140px;
    width: 180px;
    background-color: white;
  }
  .sco_one_layer {
    margin-top: 30px;
    margin-left: 40px;
  }
  .sco_one_layer span{
    font-size: 15px;
    color: #949494;
  }
  .sco_two_layer{
    margin-top: 30px;
    margin-left: 40px;
  }
  .sco_two_layer span {
    font-size: 22px;
    color: #121212;
  }
  .control_margin {
    margin-top: 40px;
  }
  .echart_one echart_two {
    display: inline-block;
  }
  .echart_con {
    /*display: flex;*/
    /*flex-direction: row;*/
    /*justify-content: space-evenly;*/
  }
  .juli {
    width: 100%;
    height: 40px;
    background-color: white;
  }
</style>
