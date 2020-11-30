<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
      <div class="select">
        <el-row>
          <span style="font-size: 16px;font-weight: bolder">选择审核提交类型：</span>
          <el-select v-model="type_select_value" placeholder="请选择您的审核提交类型">
            <el-option label="个人信息" value="people" />
            <el-option label="职业发展" value="career" />
            <el-option label="工作任务" value="work" />
          </el-select>
        </el-row>
      </div>
      <el-divider />
      <el-row v-if="type_select_value === 'people'">
        <basic-table/>
      </el-row>
      <el-row v-if="type_select_value === 'career'">
       <career-table/>
      </el-row>
      <el-row v-if="type_select_value === 'work'">
        <work-table/>
      </el-row>
    </div>
  </div>
</template>

<script>
import basicTable from "./subTable/basicTable";
import workTable from "./subTable/workTable";
import careerTable from "./subTable/careerTable";
export default {
  name: 'Index',
  components: {
    basicTable,workTable,careerTable
  },
  data() {
    return {
      type_select_value: 'people',
      value: ''
    }
  }
}
</script>

<style scoped>
.select {
  background-color: white;
}
</style>
