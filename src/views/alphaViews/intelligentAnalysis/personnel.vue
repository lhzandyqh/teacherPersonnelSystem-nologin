<template>
    <div class="app-container">
      <div>
        <div class="score_title">
          <span>全校教师平均考核得分</span>
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
                <span>{{AllScore.ethicsAssessmentScore}}(第{{AllScore.ethicsAssessmentScoreRank}}名)</span>
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
                <span>{{AllScore.annualAssessmentScore}}(第{{AllScore.annualAssessmentScoreRank}}名)</span>
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
                <span>{{AllScore.supervisionAssessmentScore}}(第{{AllScore.supervisionAssessmentScoreRank}}名)</span>
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
                <span>{{AllScore.studentAssessmentScore}}(第{{AllScore.studentAssessmentScoreRank}}名)</span>
              </div>
            </div>
          </div>
        </div>
        <el-row>
          <el-col :span="7">
            <personnel-chart-one></personnel-chart-one>
          </el-col>
          <el-col :span="17">
            <personnel-chart-two></personnel-chart-two>
          </el-col>
        </el-row>
      </div>
      <div class="main_Table">
        <el-row>
          <el-col :span="15">
            <div class="score_title" >
              <span>教学与专业能力</span>
            </div>
            <div style="margin-top: 20px">
              <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                  prop="averageCourseNums"
                  label="平均课程数">
                </el-table-column>
                <el-table-column
                  prop="weekHoursNums"
                  label="周课时数">
                </el-table-column>
                <el-table-column
                  prop="studentNums"
                  label="任课学生数">
                </el-table-column>
                <el-table-column
                  prop="majorConstructNums"
                  label="参与专业建设数">
                </el-table-column>
              </el-table>
              <el-table
                :data="tableDataTwo"
                border
                style="width: 100%">
                <el-table-column
                  prop="courseConstructNums"
                  label="课程建设数">
                </el-table-column>
                <el-table-column
                  prop="bigPrjConstructNums"
                  label="重大工程建设数">
                </el-table-column>
                <el-table-column
                  prop="trainBaseConstructNums"
                  label="实训基地建设数">
                </el-table-column>
                <el-table-column
                  prop="teachResearchNums"
                  label="教研项目数">
                </el-table-column>
              </el-table>
            </div>
            <div class="score_title" style="margin-top: 15px">
              <span>科研与社会服务能力</span>
            </div>
            <div style="margin-top: 20px">
              <el-table
                :data="tableDataThree"
                border
                style="width: 100%">
                <el-table-column
                  prop="broadwiseCounts"
                  label="纵向课题数">
                </el-table-column>
                <el-table-column
                  prop="broadwiseTotalAmount"
                  label="纵向课题到款额">
                </el-table-column>
                <el-table-column
                  prop="endwiseCounts"
                  label="横向课题数">
                </el-table-column>
                <el-table-column
                  prop="endwiseTotalAmount"
                  label="横向课题到款额">
                </el-table-column>
              </el-table>
              <el-table
                :data="tableDataFour"
                border
                style="width: 100%">
                <el-table-column
                  prop="paperCounts"
                  label="发表论文总数">
                </el-table-column>
                <el-table-column
                  prop="monographPatentCounts"
                  label="发表专著、专利数">
                </el-table-column>
                <el-table-column
                  prop="sciAchieveCounts"
                  label="科研成果获奖数">
                </el-table-column>
                <el-table-column
                  prop="socialTrainCounts"
                  label="社会培训数">
                </el-table-column>
              </el-table>
            </div>
            <div class="score_title" style="margin-top: 15px">
              <span>学生管理工作能力</span>
            </div>
            <div style="margin-top: 20px">
              <el-row>
                <el-col :span="11">
                  <el-table
                    :data="tableDataFive"
                    border
                    style="width: 100%">
                    <el-table-column
                      prop="instructClubCounts"
                      label="指导学生社团数">
                    </el-table-column>
                    <el-table-column
                      prop="assistStuCounts"
                      label="帮扶学生数">
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="9">
            <div class="paiming_con">
              <div class="score_title" style="margin-left: 60px" >
                <span>教师综合能力排名</span>
              </div>
              <div style="margin-left: 60px">
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan first_red"><span style="color: white;font-size: 12px">1</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan second_yellow"><span style="color: white;font-size: 12px">2</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan third_green"><span style="color: white;font-size: 12px">3</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">4</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">5</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">6</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">7</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">8</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">9</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
                <div class="rank_item">
                  <el-row>
                    <el-col :span="4">
                      <div class="yuan"><span style="color: white;font-size: 12px">10</span></div>
                    </el-col>
                    <el-col :span="8">
                      <span style="font-size: 15px;color: #848484">刘老师</span>
                    </el-col>
                    <el-col :span="8">
                      <el-progress :percentage="86" :format="format"></el-progress>
                    </el-col>
                    <el-col :span="4">
                      <span>86</span>
                    </el-col>
                  </el-row>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="shizi">
        <div class="score_title">
          <span>师资队伍</span>
        </div>
        <div class="first_layer">
          <div class="people_item">
            <div style="text-align: center;margin-top: 10px">
              <span style="font-size: 13px;color: #999999">师资人数</span>
            </div>
            <div style="text-align: center;margin-top: 25px">
              <span style="color: black;font-size: 24px">{{teacherGroup.teacherNums}}人</span>
            </div>
          </div>
          <div class="people_item">
            <div style="text-align: center;margin-top: 10px">
              <span style="font-size: 13px;color: #999999">双师素质教师人数</span>
            </div>
            <div style="text-align: center;margin-top: 25px">
              <span style="color: black;font-size: 24px">{{teacherGroup.doubleQualityNums}}人</span>
            </div>
          </div>
          <div class="people_item">
            <div style="text-align: center;margin-top: 10px">
              <span style="font-size: 13px;color: #999999">骨干教师人事</span>
            </div>
            <div style="text-align: center;margin-top: 25px">
              <span style="color: black;font-size: 24px">{{teacherGroup.cadreTeacherNums}}人</span>
            </div>
          </div>
          <div class="people_item">
            <div style="text-align: center;margin-top: 10px">
              <span style="font-size: 13px;color: #999999">专业带头人</span>
            </div>
            <div style="text-align: center;margin-top: 25px">
              <span style="color: black;font-size: 24px">{{teacherGroup.professionalLeaderNums}}人</span>
            </div>
          </div>
          <div class="people_item">
            <div style="text-align: center;margin-top: 10px">
              <span style="font-size: 13px;color: #999999">专任教师数量</span>
            </div>
            <div style="text-align: center;margin-top: 25px">
              <span style="color: black;font-size: 24px">{{teacherGroup.fullTimeTeacherNums}}人</span>
            </div>
          </div>
          <div class="people_item">
            <div style="text-align: center;margin-top: 10px">
              <span style="font-size: 13px;color: #999999">兼职教师数量</span>
            </div>
            <div style="text-align: center;margin-top: 25px">
              <span style="color: black;font-size: 24px">{{teacherGroup.partTimeTeacherNums}}人</span>
            </div>
          </div>
        </div>
        <div class="second_layer">
          <el-row>
            <el-col :span="6 ">
              <personnel-chart-three></personnel-chart-three>
            </el-col>
            <el-col :span="6 ">
              <personnel-chart-four></personnel-chart-four>
            </el-col>
            <el-col :span="6 ">
              <personnel-chart-five></personnel-chart-five>
            </el-col>
            <el-col :span="6 ">
              <personnel-chart-six></personnel-chart-six>
            </el-col>
          </el-row>
        </div>
        <div class="third_layer">
          <el-row>
            <el-col :span="8">
              <personnel-bing-chart-one></personnel-bing-chart-one>
            </el-col>
            <el-col :span="8">
              <personnel-bing-chart-two></personnel-bing-chart-two>
            </el-col>
            <el-col :span="8">
              <personnel-bing-chart-three></personnel-bing-chart-three>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <personnel-bing-chart-four></personnel-bing-chart-four>
            </el-col>
            <el-col :span="8">
              <personnel-bing-chart-five></personnel-bing-chart-five>
            </el-col>
            <el-col :span="8">
              <personnel-bing-chart-six></personnel-bing-chart-six>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
</template>

<script>
  import personnelChartOne  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelChartOne'
  import personnelChartTwo  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelChartTwo'
  import personnelChartThree  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelChartThree'
  import personnelChartFour  from '@/views/alphaViews/intelligentAnalysis/echarts/personelChartFour'
  import personnelChartFive  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelChartFive'
  import personnelChartSix  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelChartSix'
  import personnelBingChartOne  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelBingChartOne'
  import personnelBingChartTwo  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelBingChartTwo'
  import personnelBingChartThree  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelBingChartThree'
  import personnelBingChartFour  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelBingChartFour'
  import personnelBingChartFive  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelBingChartFive'
  import personnelBingChartSix  from '@/views/alphaViews/intelligentAnalysis/echarts/personnelBingChartSix'
  import { getTeacherEvaluationScore, getTeachAndMajorTableData, getResearchAndSocialTableData, getStudentManageTableData, getTeaherGroupTableData } from '@/api/allChangeAnalysis'
    export default {
      name: "personnel",
      components: {
        personnelChartOne,
        personnelChartTwo,
        personnelChartThree,
        personnelChartFour,
        personnelChartFive,
        personnelChartSix,
        personnelBingChartOne,
        personnelBingChartTwo,
        personnelBingChartThree,
        personnelBingChartFour,
        personnelBingChartFive,
        personnelBingChartSix
      },
      data(){
        return{
          tableData: [],
          tableDataTwo: [],
          tableDataThree: [],
          tableDataFour: [],
          tableDataFive: [],
          teacherGroup: {},
          AllScore: {}
        }
      },
      mounted(){
        this.getTeachAndMajorTable()
        this.getResearchAndSocialTable()
        this.getStudentManageTable()
        this.getTacherGroup()
        this.getScore()
      },
      methods: {
        getScore: function () {
          const prams = {
            // tecUsername: 'rmyzAdmin',
            tecUsername: localStorage.getItem('jwt'),
            authority: '人事处主管'
          }
          getTeacherEvaluationScore(prams).then(response => {
            console.log('人事处主管获取考核得分')
            console.log(response.data)
            this.AllScore = response.data.data
          })
        },
        getTeachAndMajorTable: function () {
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '人事处主管'
          }
          getTeachAndMajorTableData(prams).then(response => {
            console.log('人事处主管获取教学与专业能力工作统计表数据')
            console.log(response.data)
            const one = {}
            one.averageCourseNums = response.data.data.averageCourseNums
            one.weekHoursNums = response.data.data.weekHoursNums
            one.studentNums = response.data.data.studentNums
            one.majorConstructNums = response.data.data.majorConstructNums
            this.tableData = []
            this.tableData.push(one)
            const two = {}
            two.courseConstructNums = response.data.data.courseConstructNums
            two.bigPrjConstructNums = response.data.data.bigPrjConstructNums
            two.trainBaseConstructNums = response.data.data.trainBaseConstructNums
            two.teachResearchNums = response.data.data.teachResearchNums
            this.tableDataTwo = []
            this.tableDataTwo.push(two)
          })
        },
        getResearchAndSocialTable: function () {
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '人事处主管'
          }
          getResearchAndSocialTableData(prams).then(response => {
            console.log('人事处主管获取科研与社会服务工作统计表数据')
            console.log(response.data)
            const one = {}
            one.endwiseCounts = response.data.data.endwiseCounts
            one.endwiseTotalAmount = response.data.data.endwiseTotalAmount
            one.broadwiseCounts = response.data.data.broadwiseCounts
            one.broadwiseTotalAmount = response.data.data.broadwiseTotalAmount
            this.tableDataThree = []
            this.tableDataThree.push(one)
            const two = {}
            two.paperCounts = response.data.data.paperCounts
            two.monographPatentCounts = response.data.data.monographPatentCounts
            two.sciAchieveCounts = response.data.data.sciAchieveCounts
            two.socialTrainCounts = response.data.data.socialTrainCounts
            this.tableDataFour = []
            this.tableDataFour.push(two)
          })
        },
        getStudentManageTable: function () {
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '人事处主管'
          }
          getStudentManageTableData(prams).then(response => {
            console.log('人事处主管获取学生管理工作统计表数据')
            console.log(response.data)
            const one = {}
            one.assistStuCounts = response.data.data.assistStuCounts
            one.instructClubCounts = response.data.data.instructClubCounts
            this.tableDataFive = []
            this.tableDataFive.push(one)
          })
        },
        getTacherGroup: function () {
          const prams = {
            tecUsername: 'rmyzAdmin',
            // tecUsername: localStorage.getItem('jwt')
            authority: '人事处主管'
          }
          getTeaherGroupTableData(prams).then(response => {
            console.log('人事处主管获取师资队伍统计表数据')
            console.log(response.data)
            this.teacherGroup = response.data.data
          })
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
  .echart_con {
    width: 100%;
  }
  .main_Table {
    padding-top: 120px;
  }
  .paiming_con {

  }
  .yuan {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #3acfe5;
    text-align: center;
  }
  .rank_item {
    margin-top: 10px;
  }
  .first_red{
    background-color: #ff5546;
  }
  .second_yellow {
    background-color: #ff7f48;
  }
  .third_green {
    background-color: #42ee36;
  }
  .shizi {
    margin-top: 30px;
  }
  .first_layer {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .people_item {
    width: 200px;
    height: 100px;
    /*background-color: #00a4ff;*/
    border: 1px solid #848484;
  }
</style>
