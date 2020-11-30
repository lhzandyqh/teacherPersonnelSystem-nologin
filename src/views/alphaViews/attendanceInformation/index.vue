<template>
  <div class="app-container">
    <div style="background-color: white;padding: 20px">
    <el-row>
      <span style="font-size: 16px;font-weight: bolder">查看</span>
      <el-date-picker
        v-model="valuedate"
        type="month"
        placeholder="2020-9"
        style="width: 7rem" >
      </el-date-picker>
      <span style="font-size: 16px;font-weight: bolder">考勤信息</span>
    </el-row>
<!--      <el-divider/>-->
    <el-row>
      <el-col :span="12">
        <one-chart/>
      </el-col>
      <el-col :span="12"><two-chart/></el-col>

    </el-row>

    </div>
  </div>
</template>

<script>
import oneChart from "./attendanceEchart/oneChart";
import twoChart from "./attendanceEchart/twoChart";
export default {
  name: 'Index',
  components:{twoChart, oneChart},
}
</script>

<style scoped>

</style>
