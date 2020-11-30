<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="subject_of_compititon"
        align="center"
        label="学科"
        width="250"/>
      <el-table-column
        prop="award_level_of_sub_competition"
        align="center"
        label="获奖级别"
        width="180"/>
      <el-table-column
        prop="award_grade_of_sub_competition"
        align="center"
        label="获奖等级"
        width="250"/>
      <el-table-column
        prop="score_of_sub_competition"
        align="center"
        label="分值"
        width="250"/>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
import { inquireScoreConfig } from '@/api/integralConfiguration'
export default {
  name: 'StudentAwardsConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getAwardsData()
  },
  methods: {
    getAwardsData: function() {
      const prams = {
        project_name: '教师指导学生参加学科比赛获奖情况'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateAwardsData: function() {
      const prams = {
        project_name: '教师指导学生参加学科比赛获奖情况'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    }
  }
}
</script>

<style scoped>

</style>
