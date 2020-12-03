<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
    <el-row>
      <span style="font-size: 16px;font-weight: bolder">选择工作任务类型：</span>
      <el-select v-model="type_select_work" placeholder="请选择您的工作任务类型" >
        <el-option label="教学与专业发展" value="teachingandprofession"/>
        <el-option label="科研与社会服务" value="researchandsocialservices"/>
        <el-option label="学生管理工作" value="studentmanagement"/>
<!--        <el-option label="绩效任务" value="scientific"/>-->
      </el-select>
    </el-row>
      <el-divider/>
    <el-row v-if="type_select_work === 'teachingandprofession'">
<!--      <basic-table/>-->
      <table-students-practical-situation></table-students-practical-situation>
      <el-divider></el-divider>
      <table-students-graduation-design></table-students-graduation-design>
      <el-divider></el-divider>
      <table-education-and-teaching-award></table-education-and-teaching-award>
      <el-divider></el-divider>
      <table-participate-construction></table-participate-construction>
      <el-divider></el-divider>
      <table-participate-teaching-research-project></table-participate-teaching-research-project>
      <el-divider></el-divider>
      <table-participate-writing-material></table-participate-writing-material>
    </el-row>
      <el-row v-if="type_select_work === 'researchandsocialservices'">
<!--        <match-info-table/>-->
        <table-participate-project></table-participate-project>
        <el-divider></el-divider>
        <table-academic-achievements></table-academic-achievements>
        <el-divider></el-divider>
        <table-research-achievements></table-research-achievements>
        <el-divider></el-divider>
        <table-social-training></table-social-training>
        <el-divider></el-divider>
        <table-social-practice></table-social-practice>
      </el-row>
<!--    <el-row v-if="type_select_work === 'scientific'">-->
<!--      <scientific-table/>-->
<!--    </el-row>-->
      <el-row v-if="type_select_work === 'studentmanagement'">
<!--        <academic-exchange-table/>-->
        <table-counselor-job></table-counselor-job>
        <el-divider></el-divider>
        <table-guide-community></table-guide-community>
        <el-divider></el-divider>
        <table-help-student></table-help-student>
      </el-row>
    </div>
  </div>
</template>

<script>
import basicTable from "./workTable/basicTable";
import scientificTable from "./workTable/scientificTable";
import matchInfoTable from "./workTable/matchInfoTable";
import academicExchangeTable from "./workTable/academicExchangeTable";
import tableStudentsPracticalSituation from "./workTable/tableStudentsPracticalSituation";
import tableStudentsGraduationDesign from "./workTable/tableStudentsGraduationDesign";
import tableEducationAndTeachingAward from "./workTable/tableEducationAndTeachingAward";
import tableParticipateConstruction from "./workTable/tableParticipateConstruction";
import tableParticipateTeachingResearchProject from "./workTable/tableParticipateTeachingResearchProject";
import tableParticipateWritingMaterial from "./workTable/tableParticipateWritingMaterial";
import tableParticipateProject from "./workTable/tableParticipateProject";
import tableAcademicAchievements from "./workTable/tableAcademicAchievements";
import tableResearchAchievements from "./workTable/tableResearchAchievements";
import tableSocialTraining from "./workTable/tableSocialTraining";
import tableSocialPractice from "./workTable/tableSocialPractice";
import tableCounselorJob from "./workTable/tableCounselorJob";
import tableGuideCommunity from "./workTable/tableGuideCommunity";
import tableHelpStudent from "./workTable/tableHelpStudent";
export default {
  name: 'Index',
  components:{
    basicTable,
    scientificTable,
    matchInfoTable,
    academicExchangeTable,
    tableStudentsPracticalSituation,
    tableStudentsGraduationDesign,
    tableEducationAndTeachingAward,
    tableParticipateConstruction,
    tableParticipateTeachingResearchProject,
    tableParticipateWritingMaterial,
    tableParticipateProject,
    tableAcademicAchievements,
    tableResearchAchievements,
    tableSocialTraining,
    tableSocialPractice,
    tableCounselorJob,
    tableGuideCommunity,
    tableHelpStudent
  },
  data(){
    return{
      type_select_work: 'teachingandprofession',
      value: ''
    }
  }
}
</script>

<style scoped>

</style>
