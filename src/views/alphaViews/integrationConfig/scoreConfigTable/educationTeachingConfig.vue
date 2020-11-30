<template>
  <div class="app-container">
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="award_level_of_edu_teach_achieve"
        align="center"
        label="获奖级别"
        width="250"/>
      <el-table-column
        prop="award_grade_of_edu_teach_achieve"
        align="center"
        label="获奖等级"
        width="250"/>
      <el-table-column
        prop="person_role_edu_teach_achieve"
        align="center"
        label="个人角色"
        width="250"/>
      <el-table-column
        prop="score_of_edu_teach_achieve"
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
  name: 'EducationTeachingConfig',
  data() {
    return {
      tableData: [],
      token: getToken()
    }
  },
  mounted() {
    this.getResultData()
  },
  methods: {
    getResultData: function() {
      const prams = {
        project_name: '教育教学成果'
      }
      inquireScoreConfig({ ...prams, token: this.token }).then(response => {
        this.tableData = response.data.scoreConfig
        console.log(this.tableData)
      })
    },
    updateResultData: function() {
      const prams = {
        project_name: '教育教学成果'
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
