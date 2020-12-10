<template>
  <div class="app-container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="color: #3eb8fa;font-weight: bolder">教师职业发展规划</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="beginInput">填写</el-button>
      </div>
      <div class="plan_item">
        <div>
          <span style="font-weight: bolder">教师个人规划</span>
        </div>
        <el-divider></el-divider>
        <p style="line-height: 50px;color: #999999">本学期要获取<span v-show="inputFlag">({{this.form.qualifiNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>
          个资格证书，获取双师资格认证<span>(是、否)</span><span v-show="inputFlag&&flagOne==='是'">:是</span><span v-show="inputFlag&&flagOne==='否'">:否</span>
          <span v-show="!inputFlag">
                <el-select style="width: 100px" v-model="flagOne" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
                </el-select>
          </span>，在职攻读<span v-show="inputFlag">({{this.form.onJobStudy}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>学历学位，
          取得<span v-show="inputFlag">({{this.form.getTile}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>职称，
          参加进修、培训<span v-show="inputFlag">({{this.form.trainingNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>次，
          参加社会兼职、实践<span v-show="inputFlag">({{this.form.practiceNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>次</p>
      </div>
      <div class="plan_item" style="margin-top: 30px">
        <div>
          <span style="font-weight: bolder">教学与专业发展</span>
        </div>
        <el-divider></el-divider>
        <p style="line-height: 50px;color: #999999">本学期承担<span v-show="inputFlag">({{this.form.courseNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>门课程，
          周课时达到<span v-show="inputFlag">({{this.form.weeklyHour}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>课时,
          学生评价分数达到<span v-show="inputFlag">({{this.form.stuScore}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>分，
          督导评价分数到达<span v-show="inputFlag">({{this.form.supervisorScore}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>分，
          指导学生专业实训<span>(是、否)</span><span v-show="inputFlag&&flagTwo==='是'">:是</span><span v-show="inputFlag&&flagTwo==='否'">:否</span>
          <span v-show="!inputFlag">
                <el-select style="width: 100px" v-model="flagTwo" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
                </el-select>
          </span>，
          指导学生毕业设计<span>(是、否)</span><span v-show="inputFlag&&flagThree==='是'">:是</span><span v-show="inputFlag&&flagThree==='否'">:否</span>
          <span v-show="!inputFlag">
                <el-select style="width: 100px" v-model="flagThree" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
                </el-select>
          </span>，
          参加<span v-show="inputFlag">({{this.form.particiCompeti}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>比赛，
          获得<span v-show="inputFlag">({{this.form.getAward}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>等奖，
          （主持、参与）专业建设<span v-show="inputFlag">({{this.form.majorConstructNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          （主持、参与）课程建设<span v-show="inputFlag">({{this.form.courseConstructNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          （主持、参与）工程建设<span v-show="inputFlag">({{this.form.engineeringConstructNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          （主持、参与）实训基地建设<span v-show="inputFlag">({{this.form.trainBaseConstructNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          （主持、参与）教研项目<span v-show="inputFlag">({{this.form.teaResearchConstructNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          （主持、参与）编写教材<span v-show="inputFlag">({{this.form.compileTextbookNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
        </p>
      </div>
      <div class="plan_item" style="margin-top: 30px">
        <div>
          <span style="font-weight: bolder">科研与社会服务</span>
        </div>
        <el-divider></el-divider>
        <p style="line-height: 50px;color: #999999">
          本学期要（主持、参与）纵向课题<span v-show="inputFlag">({{this.form.verticalPrjNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          （主持、参与）横向课题<span v-show="inputFlag">({{this.form.horizontalPrjNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          发表论文<span v-show="inputFlag">({{this.form.paperNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>篇，
          （主编、参编）专著<span v-show="inputFlag">({{this.form.compileMonograph}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>部，
          获得发明专利<span v-show="inputFlag">({{this.form.patentNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          科研成果荣获<span v-show="inputFlag">({{this.form.sciAchieveLevel}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>级奖励（市、省、国家）
          <span v-show="inputFlag">({{this.form.sciAchieveNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>项，
          参加社会培训<span v-show="inputFlag">({{this.form.adcancedStudyNum}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>次
        </p>
      </div>
      <div class="plan_item" style="margin-top: 30px">
        <div>
          <span style="font-weight: bolder">学生管理工作</span>
        </div>
        <el-divider></el-divider>
        <p style="line-height: 50px;color: #999999">
          本学期承担辅导员工作<span>(是、否)</span><span v-show="inputFlag&&flagFour==='是'">:是</span><span v-show="inputFlag&&flagFour==='否'">:否</span>
          <span v-show="!inputFlag">
                <el-select style="width: 100px" v-model="flagFour" placeholder="请选择">
                  <el-option label="是" value="是" />
                  <el-option label="否" value="否" />
                </el-select>
          </span>,
          帮扶学生工作<span v-show="inputFlag">({{this.form.assistStuTime}})</span><span v-show="!inputFlag"><el-input style="width: 80px" v-model="input" placeholder="请输入"></el-input></span>次
        </p>
      </div>
      <div class="save_container">
        <div>
          <el-button type="primary" @click="cancel">取消</el-button>
          <el-button type="primary" @click="saveInput">保存</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import { getDevelopmentPlan } from '@/api/developmentPlan'
export default {
  name: "index",
  data() {
    return {
      inputFlag: true,
      flagOne: '',
      flagTwo: '',
      flagThree: '',
      flagFour: '',
      form: {

      },
      editForm: {

      }
    }
  },
  mounted() {
    this.getAllplan()
  },
  methods: {
    beginInput: function () {
      this.inputFlag = false
    },
    saveInput: function () {
      this.inputFlag = true
    },
    cancel: function () {
      this.inputFlag = true
    },
    getAllplan: function () {
      const prams = {
        tecUsername: 'rmyzAdmin'
      }
      getDevelopmentPlan(prams).then(response => {
        console.log('测试获取发展规划')
        console.log(response.data)
        this.form = response.data.data[0]
        console.log(this.form)
      })
    }
  }
}
</script>

<style scoped>
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .save_container {
    float: right;
    padding-bottom: 20px;
  }
</style>
