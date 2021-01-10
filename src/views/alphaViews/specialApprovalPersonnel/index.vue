<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
      <div class="select">
        <el-row :gutter="5">
          <el-col :span="3">
            <div class="shenpiselect">
              <span style="font-size: 16px;font-weight: bolder">选人事处择审批类型：</span>
            </div>
          </el-col>
          <el-col :span="6">
            <div class="select">
              <el-select v-model="type_select_value" placeholder="请选择您的审批项目类型类型">
<!--                <el-option label="个人信息审批" value="people" />-->
                <el-option label="教学与专业发展" value="jiaoxue" />
                <el-option label="科研与社会服务" value="keyan" />
                <el-option label="学生管理工作" value="xuesheng" />
              </el-select>
            </div>
          </el-col>
        </el-row>
      </div>
      <el-divider />
<!--      <el-row v-if="type_select_value === 'people'">-->
<!--        <people-approval />-->
<!--      </el-row>-->
      <el-row v-if="type_select_value === 'jiaoxue'">
        <teach-and-pro-table></teach-and-pro-table>
      </el-row>
      <el-row v-if="type_select_value === 'keyan'">
        <reasearch-and-socail></reasearch-and-socail>
      </el-row>
      <el-row v-if="type_select_value === 'xuesheng'">
        <student-manage-table></student-manage-table>
      </el-row>
    </div>
  </div>
</template>

<script>
import peopleApproval from '@/views/alphaViews/specialApprovalPersonnel/tables/peopleApproval'
import teachAndProTable from '@/views/alphaViews/specialApprovalPersonnel/tables/teachAndProTable'
import reasearchAndSocail from '@/views/alphaViews/specialApprovalPersonnel/tables/reasearchAndSocail'
import studentManageTable from '@/views/alphaViews/specialApprovalPersonnel/tables/studentManageTable'
// import projectApproval from './Approval/projectApproval'
// import scientificApproval from './Approval/scientificApproval'
export default {
  name: 'ResearchDepartment',
  components: {
    peopleApproval,
    teachAndProTable,
    reasearchAndSocail,
    studentManageTable
  },
  data() {
    return {
      type_select_value: 'jiaoxue',
      value: ''
    }
  }
}
</script>

<style scoped>
  .shenpiselect{
    margin-top: 10px;
  }
  .select {
    background-color: white;
  }
</style>
